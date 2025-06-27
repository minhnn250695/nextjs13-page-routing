interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  children?: Comment[];
}

interface CommentItemProps {
  comment: Comment;
  depth?: number;
}

function CommentItem({ comment, depth = 1 }: CommentItemProps) {
  const depthClass = depth === 1 ? "depth-1" : depth === 2 ? "depth-2" : "depth-3";
  const threadClass = depth === 1 && comment.id === "2" ? "thread-alt" : "";

  return (
    <li className={`${depthClass} ${threadClass}`.trim()}>
      <div className="avatar">
        <img
          width="50"
          height="50"
          className="avatar"
          src={comment.avatar}
          alt={comment.author}
        />
      </div>

      <div className="comment-content">
        <div className="comment-info">
          <cite>{comment.author}</cite>

          <div className="comment-meta">
            <time className="comment-time" dateTime={comment.date}>
              {comment.date}
            </time>
            <span className="sep">/</span>
            <a className="reply" href="#">
              Reply
            </a>
          </div>
        </div>

        <div className="comment-text">
          <p>{comment.content}</p>
        </div>
      </div>

      {comment.children && comment.children.length > 0 && (
        <ul className="children">
          {comment.children.map((child) => (
            <CommentItem key={child.id} comment={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

interface CommentsProps {
  comments: Comment[];
  totalComments: number;
}

export default function Comments({ comments, totalComments }: CommentsProps) {
  return (
    <div className="comments-wrap">
      <div id="comments" className="row">
        <div className="col-full">
          <h3>{totalComments} Comments</h3>

          <ol className="commentlist">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
