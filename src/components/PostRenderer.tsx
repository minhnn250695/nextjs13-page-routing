import { BlogPostData } from '../data/posts';
import BlogPost from './BlogPost';
import QuotePost from './QuotePost';
import AudioPost from './AudioPost';
import VideoPost from './VideoPost';
import GalleryPost from './GalleryPost';
import LinkPost from './LinkPost';

interface PostRendererProps {
  post: BlogPostData;
  animate?: boolean;
}

export default function PostRenderer({ post, animate = true }: PostRendererProps) {
  switch (post.format) {
    case 'quote':
      if (!post.quote || !post.author) return null;
      return (
        <QuotePost
          quote={post.quote}
          author={post.author}
          animate={animate}
        />
      );

    case 'audio':
      if (!post.title || !post.url || !post.image || !post.audioSrc || !post.categories || !post.excerpt) return null;
      return (
        <AudioPost
          image={post.image}
          imageAlt={post.imageAlt || post.title}
          audioSrc={post.audioSrc}
          title={post.title}
          url={post.url}
          excerpt={post.excerpt}
          categories={post.categories}
          animate={animate}
        />
      );

    case 'video':
      if (!post.title || !post.url || !post.image || !post.videoUrl || !post.categories || !post.excerpt) return null;
      return (
        <VideoPost
          image={post.image}
          imageAlt={post.imageAlt || post.title}
          videoUrl={post.videoUrl}
          title={post.title}
          url={post.url}
          excerpt={post.excerpt}
          categories={post.categories}
          animate={animate}
        />
      );

    case 'gallery':
      if (!post.title || !post.url || !post.images || !post.categories || !post.excerpt) return null;
      return (
        <GalleryPost
          images={post.images}
          title={post.title}
          url={post.url}
          excerpt={post.excerpt}
          categories={post.categories}
          animate={animate}
        />
      );

    case 'link':
      if (!post.description || !post.url || !post.displayUrl) return null;
      return (
        <LinkPost
          description={post.description}
          url={post.url}
          displayUrl={post.displayUrl}
          animate={animate}
        />
      );

    case 'standard':
    default:
      return (
        <BlogPost
          format={post.format}
          image={post.image}
          imageAlt={post.imageAlt}
          title={post.title}
          url={post.url}
          excerpt={post.excerpt}
          categories={post.categories}
          animate={animate}
        />
      );
  }
}
