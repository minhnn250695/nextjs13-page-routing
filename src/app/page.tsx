"use client";
import Image from "next/image";
import Script from "next/script";
import FeaturedSlider from "../components/FeaturedSlider";
import PostRenderer from "../components/PostRenderer";
import Pagination from "../components/Pagination";
import { featuredSlides, blogPosts } from "../data/posts";

export default function Home() {
  return (
    <>
      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>
            
            {/* Featured Slider */}
            <FeaturedSlider slides={featuredSlides} />

            {/* Render all blog posts */}
            {blogPosts.map((post) => (
              <PostRenderer key={post.id} post={post} animate={true} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={9}
          baseUrl="#"
        />
      </section>
      
      <Script src="js/jquery-2.1.3.min.js"></Script>
      <Script src="js/plugins.js"></Script>
      <Script src="js/jquery.appear.js"></Script>
      <Script src="js/main.js"></Script>
    </>
  );
}
