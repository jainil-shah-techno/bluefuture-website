import PostTitle from './post-title'
import Container from './container'

export default function PageDetailHeaderh1({ hedearImage, title, pageHeading, pageSubHeading }) {
  return (
    <div className={`PageHeader bg-cover bg-center pt-48 pb-24 text-white text-center ${title === 'Partner with us'? 'border-b-2 border-[#50DCF2]' : ''}`} style={{backgroundImage:`url(${hedearImage})`}} >
      <Container className="">
      <p className="font-semibold pb-12">{title}</p>
      <h1 className="text-2xl lg:text-4xl xl:text-5xl mx-auto md:w-2/3 font-semibold uppercase pb-6 md:pb-12">{pageHeading}</h1>
      {pageSubHeading && <p className="font-semibold">{pageSubHeading}</p>}
      </Container>
    </div>
  )
}