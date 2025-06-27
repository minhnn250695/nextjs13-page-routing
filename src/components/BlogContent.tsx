import { BlogPostContent } from '../data/blogContent';
import AuthorProfile from './AuthorProfile';
import Tags from './Tags';
import PostNavigation from './PostNavigation';

interface BlogContentProps {
  post: BlogPostContent;
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="format-standard">
      <div className="content-media">
        <div className="post-thumb">
          <img src={post.image} alt={post.title} />
        </div>
      </div>

      <div className="primary-content">
        <h1 className="page-title">{post.title}</h1>

        <ul className="entry-meta">
          <li className="date">{post.date}</li>
          <li className="cat">
            {post.categories.map((category, index) => (
              <a key={index} href="#">{category}</a>
            ))}
          </li>
        </ul>

        <p className="lead">{post.content.lead}</p>

        {post.content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {post.content.blockquote && (
          <blockquote>
            <p>{post.content.blockquote}</p>
          </blockquote>
        )}

        {post.content.headings?.map((heading, index) => (
          <div key={index}>
            {heading.level === 2 ? (
              <h2>{heading.text}</h2>
            ) : heading.level === 3 ? (
              <h3>{heading.text}</h3>
            ) : (
              <h4>{heading.text}</h4>
            )}
            {heading.content.map((content, contentIndex) => (
              <p key={contentIndex}>{content}</p>
            ))}
          </div>
        ))}

        {post.content.lists?.map((list, index) => (
          <div key={index}>
            {list.type === 'ul' ? (
              <ul>
                {list.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                    {/* Handle nested lists if needed */}
                    {item === "Donec nulla non metus auctor fringilla." && itemIndex === 0 && (
                      <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <ol>
                {list.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            )}
          </div>
        ))}

        <Tags tags={post.tags} />

        <AuthorProfile
          name={post.author.name}
          avatar={post.author.avatar}
          bio={post.author.bio}
          profileUrl={post.author.profileUrl}
          socialLinks={post.author.socialLinks}
        />
      </div>

      <PostNavigation
        prevPost={post.navigation.prev}
        nextPost={post.navigation.next}
      />
    </article>
  );
}
