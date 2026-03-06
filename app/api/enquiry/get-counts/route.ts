import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const baseWhere: any = { is_deleted: false };
    const statusWhere = (status: string) => ({ ...baseWhere, status });

    const [
      total,
      newCount,
      contacted,
      inProgress,
      completed,
      cancelled
    ] = await Promise.all([
      prisma.enquiry.count({ where: baseWhere }),
      prisma.enquiry.count({ where: statusWhere("new") }),
      prisma.enquiry.count({ where: statusWhere("contacted") }),
      prisma.enquiry.count({ where: statusWhere("in-progress") }),
      prisma.enquiry.count({ where: statusWhere("completed") }),
      prisma.enquiry.count({ where: statusWhere("cancelled") }),
    ]);

    return NextResponse.json({
      success: true,
      counts: {
        total,
        new: newCount,
        contacted,
        inProgress,
        completed,
        cancelled
      }
    });
  } catch (error) {
    console.error("Stats Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch counts" }, { status: 500 });
  }
}
