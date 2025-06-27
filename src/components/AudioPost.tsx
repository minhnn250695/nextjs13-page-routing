interface AudioPostProps {
  image: string;
  imageAlt: string;
  audioSrc: string;
  title: string;
  url: string;
  excerpt: string;
  categories: string[];
  animate?: boolean;
}

export default function AudioPost({
  image,
  imageAlt,
  audioSrc,
  title,
  url,
  excerpt,
  categories,
  animate = true
}: AudioPostProps) {
  const animateClass = animate ? 'animate-this' : '';
  
  return (
    <article className={`brick entry format-audio ${animateClass}`.trim()}>
      <div className="entry-thumb">
        <a href={url} className="thumb-link">
          <img src={image} alt={imageAlt} />
        </a>

        <div className="audio-wrap">
          <audio
            id="player"
            src={audioSrc}
            style={{ width: "100%", height: 42 }}
            controls
          />
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
