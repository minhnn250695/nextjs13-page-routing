interface VideoPostProps {
  image: string;
  imageAlt: string;
  videoUrl: string;
  title: string;
  url: string;
  excerpt: string;
  categories: string[];
  animate?: boolean;
}

export default function VideoPost({
  image,
  imageAlt,
  videoUrl,
  title,
  url,
  excerpt,
  categories,
  animate = true
}: VideoPostProps) {
  const animateClass = animate ? 'animate-this' : '';
  
  return (
    <article className={`brick entry format-video ${animateClass}`.trim()}>
      <div className="entry-thumb video-image">
        <a href={videoUrl} data-lity>
          <img src={image} alt={imageAlt} />
        </a>
      </div>

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
        
        <div className="entry-excerpt">
          {excerpt}
        </div>
      </div>
    </article>
  );
}
