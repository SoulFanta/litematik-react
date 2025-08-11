import ProjectCard from "./../../../feauters/project-card/ui/project-card";
import "../styles/project-list.scss";
import { Input } from "~/shared/ui/input/input";
export default function ProjectList() {
  return (
    <section className="container project-list">
      <header className="project-list__header">
        <p className="project-list__header-title">Список проектов</p>
        <Input placeholder="Введите запрос" size="sm" />
      </header>
      <div className="project-list__grid">
        <ProjectCard
          title={"Замок"}
          progress={0}
          description="lorem imkdslfdksflsdf fdsfsdfnsdf dskfmsdlfmsd sdkfkmsd;lfmsdf sdlkfmsdlfds"
        />
        <ProjectCard title={"карточка2"} progress={10} />
        <ProjectCard title={"карточка3"} progress={15} />
        <ProjectCard title={"карточка4"} progress={20} />
        <ProjectCard title={"карточка5"} progress={100} />
        <ProjectCard title={"карточка6"} progress={100} />
      </div>
    </section>
  );
}
