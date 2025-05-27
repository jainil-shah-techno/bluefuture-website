import styles from './post-body.module.css'

export default function PageBody({ content }) {
  return (
    <div
        className={`${styles.content} page_content`}
        dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
