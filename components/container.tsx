export default function Container({ className, children }) {
  return <div className={`container md:mx-auto px-5 ${className}`}>{children}</div>
}
