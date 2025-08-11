import DonutProgress from "~/shared/ui/donut-progress/donut-progress";
import "../styles/project-card.scss";
import { Link } from "react-router";

interface IProjectCard {
  title: string;
  progress: number;
}

export default function ProjectCard({ title, progress }: IProjectCard) {
  return (
    <div className="project-card">
      <div className="project-card__inner">
        <div className="project-card__face project-card__face--front">
          <DonutProgress
            className="project-card__donut"
            value={progress}
            thickness={6}
          />
          <h4 className="project-card__title">{title}</h4>
        </div>

        <div className="project-card__face project-card__face--back">
          <Link className="project-card__more" to={"/project/id/:projectId"}>Подробнее</Link>
        </div>
      </div>
    </div>
  );
}
