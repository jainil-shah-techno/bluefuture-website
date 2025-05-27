import PostTitle from './post-title'
import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link'

export default function PageHomeHeader({ hedearImage, title, subheading, bannerImage }) {
  return (
    <div className="PageHeader bg-cover bg-center text-center pb-20" style={{backgroundImage:`url(${hedearImage})`}} >
      <Container className="">
        <PostTitle className="pt-60 pb-8 text-5xl font-semibold uppercase text-center text-white">{title}</PostTitle>
        <h4 className="text-white text-center pb-20">{subheading}</h4>
        <Image
          src={bannerImage}
          className="bannerImage w-full h-auto"
          alt="logo"
          width={1183}
          height={604}
        />
      </Container>
    </div>
  )
}