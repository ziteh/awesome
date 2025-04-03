import { type ColumnDef } from "@tanstack/react-table";

export type App = {
  name: string;
  description: string;
  url: {
    repo?: string;
    website?: string;
  };
  platform: string[];
  tags: string[];
  favorite?: boolean;
  license: string;
  note?: string;
};

export const columns: ColumnDef<App>[] = [
  {
    header: "",
    accessorKey: "favorite",
    cell: ({ row }) => {
      const isFavorite: boolean | undefined = row.getValue("favorite");
      return isFavorite ? <span>⭐</span> : null;
    },
  },
  {
    header: "名稱",
    accessorKey: "name",
  },
  {
    header: "描述",
    accessorKey: "description",
  },
  {
    header: "平台",
    accessorKey: "platform",
  },
  {
    header: "標籤",
    accessorKey: "tags",
  },
  {
    header: "授權",
    accessorKey: "license",
  },
  {
    header: "備註",
    accessorKey: "note",
  },
];
