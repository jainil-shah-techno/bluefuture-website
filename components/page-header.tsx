import PostTitle from './post-title'
import Container from './container'

export default function PageHeader({ hedearImage, title }) {
  return (
    <div className="PageHeader bg-cover bg-center" style={{backgroundImage:`url(${hedearImage})`}} >
      <Container className="">
        <PostTitle className="pt-60 pb-48 text-2xl lg:text-4xl lg:text-5xl font-semibold uppercase text-center text-white">{title}</PostTitle>
      </Container>
    </div>
  )
}