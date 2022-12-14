interface skillProps {
  icon: string;
  title: string;
  url: string;
}

const skillCard = ({ icon, title, url }: skillProps) => {
  const DynamicComponent = icon

  return (
    <a
      key={title}
      href={url}
      target="_blank"
      className="mx-1 text-gray-800 dark:text-gray-100"
      rel="noreferrer"
    >
      <DynamicComponent />
      {title}
    </a>
  )
}

export default skillCard
