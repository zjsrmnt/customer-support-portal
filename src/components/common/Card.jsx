export function Card({ children, className = "", as = "div" }) {
  const Tag = as;
  return <Tag className={`card ${className}`}>{children}</Tag>;
}
