import { NextResponse } from 'next/server';
import { sampleBlogPost } from '../../../../data/blogContent';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 120));
    
    // For now, return the sample blog post for any ID
    // In a real app, you'd fetch from database by ID
    if (id) {
      return NextResponse.json({
        success: true,
        data: {
          ...sampleBlogPost,
          id: id
        }
      });
    }
    
    return NextResponse.json(
      { success: false, error: 'Post not found' },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}
