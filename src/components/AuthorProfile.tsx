interface AuthorProfileProps {
  name: string;
  avatar: string;
  bio: string;
  profileUrl?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    googleplus?: string;
    instagram?: string;
  };
}

export default function AuthorProfile({
  name,
  avatar,
  bio,
  profileUrl = "#",
  socialLinks = {}
}: AuthorProfileProps) {
  return (
    <div className="author-profile">
      <img src={avatar} alt={name} />

      <div className="about">
        <h4>
          <a href={profileUrl}>{name}</a>
        </h4>

        <p>{bio}</p>

        {Object.keys(socialLinks).length > 0 && (
          <ul className="author-social">
            {socialLinks.facebook && (
              <li>
                <a href={socialLinks.facebook}>Facebook</a>
              </li>
            )}
            {socialLinks.twitter && (
              <li>
                <a href={socialLinks.twitter}>Twitter</a>
              </li>
            )}
            {socialLinks.googleplus && (
              <li>
                <a href={socialLinks.googleplus}>GooglePlus</a>
              </li>
            )}
            {socialLinks.instagram && (
              <li>
                <a href={socialLinks.instagram}>Instagram</a>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
