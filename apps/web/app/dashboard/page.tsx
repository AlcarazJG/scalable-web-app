import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="mt-1 text-sm text-gray-600">
          This is your main dashboard.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Link
          href="/dashboard/projects"
          className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <h3 className="text-lg font-medium">Projects</h3>
          <p className="mt-2 text-sm text-gray-500">
            View and manage your saved projects.
          </p>
        </Link>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-medium">More features soon</h3>
          <p className="mt-2 text-sm text-gray-500">
            Settings, analytics, and background jobs can go here next.
          </p>
        </div>
      </section>
    </main>
  );
}