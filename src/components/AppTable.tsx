import { columns, type App } from "@/components/DataTable/columns";
import { DataTable } from "@/components/DataTable";

export default function AppTable() {
  const data: App[] = [
    {
      name: "Astro",
      description: "Build faster websites with less code",
      url: {
        repo: "https://github.com/withastro/astro",
        website: "https://astro.build",
      },
      platform: ["web", "server"],
      tags: ["frontend", "backend"],
      license: "",
    },
    {
      name: "Astro",
      description: "Build faster websites with less code",
      url: {
        repo: "https://github.com/withastro/astro",
        website: "https://astro.build",
      },
      platform: ["web", "server"],
      tags: ["frontend", "backend"],
      license: "",
      favorite: true,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
