import { NextRequest, NextResponse } from 'next/server';
import { updateBlog, deleteBlog, getBlogById } from '@/lib/api';
import { getCurrentUser } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blog = await getBlogById(id);
    
    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error: any) {
    console.error('GET /api/blogs/[id] error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const user = await getCurrentUser();
    const { id } = await params;
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const blog = await updateBlog(id, body);
    
    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog });
  } catch (error: any) {
    console.error('PUT /api/blogs/[id] error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update blog' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const user = await getCurrentUser();
    const { id } = await params;
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await deleteBlog(id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('DELETE /api/blogs/[id] error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete blog' },
      { status: 500 }
    );
  }
}

