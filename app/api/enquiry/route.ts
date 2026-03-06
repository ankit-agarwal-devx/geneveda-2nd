import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const service = searchParams.get("service") || "";
  const contact_number = searchParams.get("contact_number") || "";

  try {
    const where: any = {
      is_deleted: false
    };

    if (name && name.trim() !== "") {
      where.name = { contains: name, mode: "insensitive" };
    }

    if (email && email.trim() !== "") {
      where.email = { contains: email, mode: "insensitive" };
    }

    if (service && service.trim() !== "") {
      where.service = { contains: service, mode: "insensitive" };
    }

    if (contact_number && contact_number.trim() !== "") {
      where.contact_number = { contains: contact_number, mode: "insensitive" };
    }

    const [data, total] = await Promise.all([
      prisma.enquiry.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.enquiry.count({ where }),
    ]);

    return NextResponse.json({
      data,
      meta: {
        total,
        pageCount: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: name and email are required",
        },
        { status: 400 },
      );
    }

    const data = await prisma.enquiry.create({
      data: {
        name: body.name,
        email: body.email,
        contact_number: body.contact_number || null,
        service: body.service || null,
        message: body.description || null,
      },
    });

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/enquiry error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to submit enquiry data",
      },
      { status: 500 },
    );
  }
}
