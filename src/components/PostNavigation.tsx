interface PostNavigationProps {
  prevPost?: {
    title: string;
    url: string;
  };
  nextPost?: {
    title: string;
    url: string;
  };
}

export default function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="pagenav group">
      {prevPost && (
        <div className="prev-nav">
          <a href={prevPost.url} rel="prev">
            <span>Previous</span>
            {prevPost.title}
          </a>
        </div>
      )}
      {nextPost && (
        <div className="next-nav">
          <a href={nextPost.url} rel="next">
            <span>Next</span>
            {nextPost.title}
          </a>
        </div>
      )}
    </div>
  );
}
