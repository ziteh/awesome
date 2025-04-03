import { columns, type App } from "@/components/DataTable/columns";
import { DataTable } from "@/components/DataTable";

export default function AppTable({ data }: { data: App[] }) {
  return (
    <div className="container mx-auto py-4 overflow-x-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
