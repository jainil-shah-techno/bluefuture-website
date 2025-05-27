import PostTitle from './post-title'
import Container from './container'

export default function PageDetailHeader({ hedearImage, title, pageHeading, pageSubHeading }) {
  return (
    <div className="PageHeader bg-cover bg-center pt-48 pb-24 text-white text-center" style={{backgroundImage:`url(${hedearImage})`}} >
      <Container className="">
      <p className="font-semibold pb-12">{title}</p>
      <h2 className="text-2xl lg:text-4xl xl:text-5xl mx-auto md:w-2/3 font-semibold uppercase pb-6 md:pb-12">{pageHeading}</h2>
      {pageSubHeading && <p className="font-semibold">{pageSubHeading}</p>}
      </Container>
    </div>
  )
}