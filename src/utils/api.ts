// API utility functions for fetching data

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PostsApiResponse {
  posts: any[];
  pagination: PaginationData;
}

export interface CategoryApiResponse {
  category: {
    name: string;
    description?: string;
  };
  posts: any[];
  pagination: PaginationData;
}

export interface CommentsApiResponse {
  comments: any[];
  totalComments: number;
}

// Featured slides API
export async function fetchFeaturedSlides(): Promise<ApiResponse<any[]>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/featured-slides`, {
      cache: 'no-store' // For development - use appropriate caching in production
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch featured slides');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching featured slides:', error);
    return {
      success: false,
      error: 'Failed to fetch featured slides'
    };
  }
}

// Posts API
export async function fetchPosts(page = 1, limit = 12, category?: string): Promise<ApiResponse<PostsApiResponse>> {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(category && { category })
    });
    
    const response = await fetch(`${API_BASE_URL}/api/posts?${params}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      success: false,
      error: 'Failed to fetch posts'
    };
  }
}

// Blog post API
export async function fetchBlogPost(id: string): Promise<ApiResponse<any>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blog/${id}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      success: false,
      error: 'Failed to fetch blog post'
    };
  }
}

// Comments API
export async function fetchComments(postId: string): Promise<ApiResponse<CommentsApiResponse>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/comments/${postId}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    return {
      success: false,
      error: 'Failed to fetch comments'
    };
  }
}

// Add comment API
export async function addComment(postId: string, commentData: { name: string; email: string; website?: string; message: string }): Promise<ApiResponse<any>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/comments/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add comment');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error adding comment:', error);
    return {
      success: false,
      error: 'Failed to add comment'
    };
  }
}

// Category API
export async function fetchCategory(slug: string, page = 1, limit = 12): Promise<ApiResponse<CategoryApiResponse>> {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });
    
    const response = await fetch(`${API_BASE_URL}/api/categories/${slug}?${params}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch category');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching category:', error);
    return {
      success: false,
      error: 'Failed to fetch category'
    };
  }
}

// Categories list API
export async function fetchAllCategories(): Promise<ApiResponse<any[]>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/categories`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      success: false,
      error: 'Failed to fetch categories'
    };
  }
}
