'use client';
import BlogContent from '../../components/BlogContent';
import Comments from '../../components/Comments';
import CommentForm from '../../components/CommentForm';
import { sampleBlogPost, sampleComments } from '../../data/blogContent';

export default function Blog() {
  const handleCommentSubmit = (data: { name: string; email: string; website: string; message: string }) => {
    console.log('Comment submitted:', data);
    // Handle comment submission here
  };

  return (
    <>
      <section id="content-wrap" className="blog-single">
        <div className="row">
          <div className="col-twelve">
            <BlogContent post={sampleBlogPost} />
          </div>
        </div>

        <Comments comments={sampleComments} totalComments={5} />
        
        <div className="row">
          <div className="col-full">
            <CommentForm onSubmit={handleCommentSubmit} />
          </div>
        </div>
      </section>
    </>
  );
}
