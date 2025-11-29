import TechStackCard from '@/components/card/tech-stack-card';
import PageTitle from '@/components/core/page-title';
import { techStackList } from '@/types/techStack';

export default function TechStackSection() {
  return (
    <section>
      <PageTitle title="Tech Stacks" />
      <div className="flex flex-wrap justify-center">
        {techStackList.map((list) => {
          return (
            <span key={list.name}>
              <TechStackCard
                name={list.name}
                icon={list.icon}
                fill={list.fill}
                url={list.url}
              />
            </span>
          );
        })}
      </div>
    </section>
  );
}
