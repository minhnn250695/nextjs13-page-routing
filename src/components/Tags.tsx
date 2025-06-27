interface TagsProps {
  tags: string[];
  label?: string;
}

export default function Tags({ tags, label = "Tagged in :" }: TagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <p className="tags">
      <span>{label}</span>
      {tags.map((tag, index) => (
        <a key={index} href="#">
          {tag}
        </a>
      ))}
    </p>
  );
}
