"use client";
import PostRenderer from "../../components/PostRenderer";
import Pagination from "../../components/Pagination";
import { photographyCategory } from "../../data/categories";

export default function Category() {
  return (
    <>
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: {photographyCategory.name}</h1>
            {photographyCategory.description && (
              <p>{photographyCategory.description}</p>
            )}
          </div>
        </div>
      </section>

      <section id="bricks" className="with-top-sep">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>

            {/* Render all category posts using reusable components */}
            {photographyCategory.posts.map((post) => (
              <PostRenderer key={post.id} post={post} animate={true} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={9}
          baseUrl="/category"
        />
      </section>
    </>
  );
}
