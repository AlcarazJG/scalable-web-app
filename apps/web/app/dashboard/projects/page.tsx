import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

<Link href="/dashboard/projects">
  Go to Projects
</Link>

async function createProject(formData: FormData) {
  "use server";

  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const name = String(formData.get("name") || "").trim();

  if (!name) return;

  await prisma.project.create({
    data: {
      name,
      userId,
    },
  });
}

export default async function ProjectsPage() {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const projects = await prisma.project.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Projects</h1>

      <form action={createProject} className="flex gap-2 mt-4">
        <input
          name="name"
          placeholder="New project name"
          className="border rounded px-3 py-2 flex-1"
        />
        <button className="border px-4 py-2 rounded">
          Create
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded p-3"
          >
            {project.name}
          </div>
        ))}
      </div>
    </main>
  );
}