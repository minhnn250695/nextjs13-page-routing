interface LinkPostProps {
  description: string;
  url: string;
  displayUrl: string;
  animate?: boolean;
}

export default function LinkPost({ description, url, displayUrl, animate = true }: LinkPostProps) {
  const animateClass = animate ? 'animate-this' : '';
  
  return (
    <article className={`brick entry format-link ${animateClass}`.trim()}>
      <div className="entry-thumb">
        <div className="link-wrap">
          <p>{description}</p>
          <cite>
            <a target="_blank" href={url}>
              {displayUrl}
            </a>
          </cite>
        </div>
      </div>
    </article>
  );
}
