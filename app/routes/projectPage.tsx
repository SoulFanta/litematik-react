import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Страница проекта" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

async function loader({ projectId }: { projectId: string }) {
  return { projectId: projectId };
}

export default function ProjectPage() {
  const { projectId } = useLoaderData() as { projectId: string };
  return <p>{projectId}</p>;
}
