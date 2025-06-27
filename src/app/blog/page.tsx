'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BlogContent from '../../components/BlogContent';
import Comments from '../../components/Comments';
import CommentForm from '../../components/CommentForm';
import { fetchBlogPost, fetchComments, addComment } from '../../utils/api';

export default function Blog() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('id') || '1'; // Default to post ID 1 if no ID provided
  
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [totalComments, setTotalComments] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    async function loadBlogData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch blog post and comments in parallel
        const [postResponse, commentsResponse] = await Promise.all([
          fetchBlogPost(postId),
          fetchComments(postId)
        ]);

        if (postResponse.success && postResponse.data) {
          setPost(postResponse.data);
        } else {
          setError('Failed to load blog post');
          return;
        }

        if (commentsResponse.success && commentsResponse.data) {
          setComments(commentsResponse.data.comments);
          setTotalComments(commentsResponse.data.totalComments);
        }
      } catch (err) {
        setError('Failed to load blog content');
        console.error('Error loading blog data:', err);
      } finally {
        setLoading(false);
      }
    }

    loadBlogData();
  }, [postId]);

  const handleCommentSubmit = async (data: { name: string; email: string; website: string; message: string }) => {
    try {
      setSubmittingComment(true);
      const response = await addComment(postId, data);
      
      if (response.success) {
        // Refresh comments after successful submission
        const commentsResponse = await fetchComments(postId);
        if (commentsResponse.success && commentsResponse.data) {
          setComments(commentsResponse.data.comments);
          setTotalComments(commentsResponse.data.totalComments);
        }
      } else {
        alert('Failed to submit comment. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting comment:', err);
      alert('Failed to submit comment. Please try again.');
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container" style={{ padding: '50px', textAlign: 'center' }}>
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="error-container" style={{ padding: '50px', textAlign: 'center' }}>
        <p>Error: {error || 'Blog post not found'}</p>
      </div>
    );
  }

  return (
    <>
      <section id="content-wrap" className="blog-single">
        <div className="row">
          <div className="col-twelve">
            <BlogContent post={post} />
          </div>
        </div>

        <Comments comments={comments} totalComments={totalComments} />
        
        <div className="row">
          <div className="col-full">
            <CommentForm 
              onSubmit={handleCommentSubmit} 
              isSubmitting={submittingComment}
            />
          </div>
        </div>
      </section>
    </>
  );
}
