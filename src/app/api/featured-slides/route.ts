import { NextResponse } from 'next/server';
import { featuredSlides } from '../../../data/posts';

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json({
      success: true,
      data: featuredSlides
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch featured slides' },
      { status: 500 }
    );
  }
}
