"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PostRenderer from "../../components/PostRenderer";
import Pagination from "../../components/Pagination";
import { fetchCategory } from "../../utils/api";

export default function Category() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('slug') || 'photography'; // Default to photography
  const currentPage = parseInt(searchParams.get('page') || '1');
  
  const [category, setCategory] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalPosts: 0,
    hasNext: false,
    hasPrev: false
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategoryData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchCategory(categorySlug, currentPage, 12);

        if (response.success && response.data) {
          setCategory(response.data.category);
          setPosts(response.data.posts);
          setPagination(response.data.pagination);
        } else {
          setError('Failed to load category data');
        }
      } catch (err) {
        setError('Failed to load category');
        console.error('Error loading category data:', err);
      } finally {
        setLoading(false);
      }
    }

    loadCategoryData();
  }, [categorySlug, currentPage]);

  if (loading) {
    return (
      <div className="loading-container" style={{ padding: '50px', textAlign: 'center' }}>
        <p>Loading category...</p>
      </div>
    );
  }

  if (error || !category) {
    return (
      <div className="error-container" style={{ padding: '50px', textAlign: 'center' }}>
        <p>Error: {error || 'Category not found'}</p>
      </div>
    );
  }

  return (
    <>
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: {category.name}</h1>
            {category.description && (
              <p>{category.description}</p>
            )}
          </div>
        </div>
      </section>

      <section id="bricks" className="with-top-sep">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>

            {/* Render all category posts using reusable components */}
            {posts.map((post) => (
              <PostRenderer key={post.id} post={post} animate={true} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          baseUrl={`/category?slug=${categorySlug}`}
        />
      </section>
    </>
  );
}
