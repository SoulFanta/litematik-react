import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import Draft from "./../widgets/draft/ui/draft";

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

  const rows = [
    { name: "Земля", qty: 10, collected: 3 },
    { name: "Песок", qty: 6, collected: 2 },
    // ...
  ];
  return (
    <main className="container">
      <Draft rows={rows} />
    </main>
  );
}
