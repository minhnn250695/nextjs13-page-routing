import { NextResponse } from 'next/server';
import { blogPosts } from '../../../data/posts';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const category = searchParams.get('category');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 150));
    
    let filteredPosts = [...blogPosts];
    
    // Filter by category if provided
    if (category) {
      filteredPosts = blogPosts.filter(post => 
        post.categories?.some(cat => 
          cat.toLowerCase().includes(category.toLowerCase())
        )
      );
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    return NextResponse.json({
      success: true,
      data: {
        posts: paginatedPosts,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredPosts.length / limit),
          totalPosts: filteredPosts.length,
          hasNext: endIndex < filteredPosts.length,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
