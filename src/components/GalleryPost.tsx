interface GalleryPostProps {
  images: string[];
  title: string;
  url: string;
  excerpt: string;
  categories: string[];
  animate?: boolean;
}

export default function GalleryPost({
  images,
  title,
  url,
  excerpt,
  categories,
  animate = true
}: GalleryPostProps) {
  const animateClass = animate ? 'animate-this' : '';
  
  return (
    <article className={`brick entry format-gallery group ${animateClass}`.trim()}>
      <div className="entry-thumb">
        <div className="post-slider flexslider">
          <ul className="slides">
            {images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
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
