import { NextRequest, NextResponse } from 'next/server';
import { categories, CategoryData } from '../../../data/categories';

export async function GET(request: NextRequest) {
  try {
    // Return all available categories for navigation/listing purposes
    const categoryList = Object.entries(categories).map(([slug, category]: [string, CategoryData]) => ({
      slug,
      name: category.name,
      description: category.description,
      postCount: category.posts.length
    }));

    return NextResponse.json({
      success: true,
      data: categoryList
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
