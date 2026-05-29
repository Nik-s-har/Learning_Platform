interface ContentCardProps {
  children: React.ReactNode;
  variant: 'presentation' | 'alphabet';
}

function ContentCard({ children, variant }: ContentCardProps) {
  return <div className={`default' ${variant}`}>{children}</div>;
}

export default ContentCard;
