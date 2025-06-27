import { NextResponse } from 'next/server';
import { sampleComments } from '../../../../data/blogContent';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // For now, return sample comments for any post ID
    // In a real app, you'd fetch comments by post ID from database
    return NextResponse.json({
      success: true,
      data: {
        comments: sampleComments,
        totalComments: sampleComments.length
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Validate required fields
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // In a real app, you'd save the comment to database
    const newComment = {
      id: Date.now().toString(),
      author: name,
      avatar: "images/avatars/user-01.jpg", // Default avatar
      date: new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      content: message,
      postId: id
    };
    
    return NextResponse.json({
      success: true,
      data: newComment,
      message: 'Comment added successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}
