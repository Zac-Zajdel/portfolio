import NextImage from 'next/image'

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const Image = ({ src, alt, width, height, className }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}

export default Image
