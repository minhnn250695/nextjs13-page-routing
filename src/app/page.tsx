"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import FeaturedSlider from "../components/FeaturedSlider";
import PostRenderer from "../components/PostRenderer";
import Pagination from "../components/Pagination";
import { fetchFeaturedSlides, fetchPosts } from "../utils/api";
import { BlogPostData, FeaturedSlideData } from "../data/posts";

export default function Home() {
  const [featuredSlides, setFeaturedSlides] = useState<FeaturedSlideData[]>([]);
  const [posts, setPosts] = useState<BlogPostData[]>([]);
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
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch featured slides and posts in parallel
        const [slidesResponse, postsResponse] = await Promise.all([
          fetchFeaturedSlides(),
          fetchPosts(1, 12)
        ]);

        if (slidesResponse.success && slidesResponse.data) {
          setFeaturedSlides(slidesResponse.data);
        }

        if (postsResponse.success && postsResponse.data) {
          setPosts(postsResponse.data.posts);
          setPagination(postsResponse.data.pagination);
        }

        if (!slidesResponse.success || !postsResponse.success) {
          setError('Failed to load some content');
        }
      } catch (err) {
        setError('Failed to load content');
        console.error('Error loading home page data:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading && posts.length === 0) {
    return (
      <div className="loading-container" style={{ padding: '50px', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="error-container" style={{ padding: '50px', textAlign: 'center' }}>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>
            
            {/* Featured Slider */}
            {featuredSlides.length > 0 && (
              <FeaturedSlider slides={featuredSlides} />
            )}

            {/* Render all blog posts */}
            {posts.map((post) => (
              <PostRenderer key={post.id} post={post} animate={true} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          baseUrl="/"
        />
      </section>
      
      <Script src="js/jquery-2.1.3.min.js"></Script>
      <Script src="js/plugins.js"></Script>
      <Script src="js/jquery.appear.js"></Script>
      <Script src="js/main.js"></Script>
    </>
  );
}
