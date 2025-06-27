interface QuotePostProps {
  quote: string;
  author: string;
  animate?: boolean;
}

export default function QuotePost({ quote, author, animate = true }: QuotePostProps) {
  const animateClass = animate ? 'animate-this' : '';
  
  return (
    <article className={`brick entry format-quote ${animateClass}`.trim()}>
      <div className="entry-thumb">
        <blockquote>
          <p>{quote}</p>
          <cite>{author}</cite>
        </blockquote>
      </div>
    </article>
  );
}
