import { NextResponse } from 'next/server';
import { categories } from '../../../../data/categories';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 130));
    
    const category = categories[slug];
    
    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = category.posts.slice(startIndex, endIndex);
    
    return NextResponse.json({
      success: true,
      data: {
        category: {
          name: category.name,
          description: category.description
        },
        posts: paginatedPosts,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(category.posts.length / limit),
          totalPosts: category.posts.length,
          hasNext: endIndex < category.posts.length,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch category' },
      { status: 500 }
    );
  }
}
