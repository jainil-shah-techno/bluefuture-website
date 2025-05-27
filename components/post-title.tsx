export default function PostTitle({ className, children }) {
  return (
    <h1
      className={`${className}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
