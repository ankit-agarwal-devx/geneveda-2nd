import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function DELETE(
  request: NextRequest,
{ params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.enquiry.update({
      where: { id: Number(id) },
      data: { is_deleted: true },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}

export async function PATCH(
    req: NextRequest, 
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        if (!body) {
            return NextResponse.json({ success: false, error: "No data provided" }, { status: 400 });
        }

        const updatedInquiry = await prisma.enquiry.update({
            where: { id: Number(id) }, 
            data: {
                ...(body.status && { status: body.status }),
            }
        });

        return NextResponse.json({ 
            success: true, 
            message: "Enquiry updated successfully",
            data: updatedInquiry 
        });
    } catch (error: any) {
        console.error("PATCH Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to update enquiry" }, 
            { status: 500 }
        );
    }
}