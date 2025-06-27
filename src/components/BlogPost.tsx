interface BlogPostProps {
  format?: 'standard' | 'audio' | 'video' | 'gallery' | 'quote' | 'link';
  image?: string;
  imageAlt?: string;
  title?: string;
  url?: string;
  excerpt?: string;
  categories?: string[];
  animate?: boolean;
  className?: string;
}

export default function BlogPost({
  format = 'standard',
  image,
  imageAlt,
  title,
  url,
  excerpt,
  categories = [],
  animate = true,
  className = ''
}: BlogPostProps) {
  const formatClass = format !== 'standard' ? `format-${format}` : '';
  const animateClass = animate ? 'animate-this' : '';
  
  if (!title || !url) return null;
  
  return (
    <article className={`brick entry ${formatClass} ${animateClass} ${className}`.trim()}>
      {image && (
        <div className="entry-thumb">
          <a href={url} className="thumb-link">
            <img src={image} alt={imageAlt || title} />
          </a>
        </div>
      )}

      <div className="entry-text">
        <div className="entry-header">
          <div className="entry-meta">
            <span className="cat-links">
              {categories.map((category, index) => (
                <a key={index} href="#">{category}</a>
              ))}
            </span>
          </div>

          <h1 className="entry-title">
            <a href={url}>{title}</a>
          </h1>
        </div>
        
        {excerpt && (
          <div className="entry-excerpt">
            {excerpt}
          </div>
        )}
      </div>
    </article>
  );
}
