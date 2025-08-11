import type { Route } from "./+types/home";
import ProjectList from "./../widgets/projects-list/ui/project-list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="">
      <ProjectList />
    </main>
  );
}
