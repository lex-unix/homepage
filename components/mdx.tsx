import Image from 'next/image'
import s from '@/styles/mdx.module.scss'

type ImageProps = {
  src: string
  alt: string
}
const RoundedImage = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={720}
      height={400}
      className={s['rounded-image']}
    />
  )
}

export const components = {
  RoundedImage
}
