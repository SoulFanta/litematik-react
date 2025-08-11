import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";

export async function loader({ params }: { params: { projectId?: string } }) {
  const projectId = params.projectId;
  if (!projectId) {
    throw new Response("projectId is required", { status: 400 });
  }
  return { projectId };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Страница проекта" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ProjectPage() {
  const { projectId } = useLoaderData<typeof loader>();
  return <p>{projectId}</p>;
}
