import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Star, ExternalLink } from "lucide-react";

export type App = {
  name: string;
  description: string;
  url: string;
  platform: string[];
  tags: string[];
  favorite?: boolean;
  license: string;
  note?: string;
};

const getBadges = (items: string[]) => {
  return (
    <div className="flex gap-1">
      {items.map((item) => (
        <Badge key={item} variant="secondary">
          {item}
        </Badge>
      ))}
    </div>
  );
};

export const columns: ColumnDef<App>[] = [
  // {
  //   header: "",
  //   accessorKey: "favorite",
  //   cell: ({ row }) => {
  //     const isFavorite: boolean | undefined = row.getValue("favorite");
  //     return isFavorite ? (
  //       <Star className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
  //     ) : null;
  //   },
  // },
  {
    header: "名稱",
    accessorKey: "name",
    cell: ({ row }) => (
      <span className="font-bold">{row.getValue("name")}</span>
    ),
    // cell: ({ row }) => {
    //   const name: string = row.getValue("name");
    //   const url: string = row.getValue("url");
    //   return (
    //     <a
    //       href={url}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="hover:underline underline-offset-2 "
    //     >
    //       {name}
    //     </a>
    //   );
    // },
  },
  {
    header: "網頁",
    accessorKey: "url",
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      const url: string = row.getValue("url");
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
          <ExternalLink
            className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"
            aria-hidden
          />
        </a>
      );
    },
  },

  // {
  //   header: "連結",
  //   accessorKey: "url",
  //   cell: ({ row }) => {
  //     const { repo, website }: { repo?: string; website?: string } =
  //       row.getValue("url");
  //     return (
  //       <div className="flex gap-2">
  //         {website && (
  //           <a
  //             href={website}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="underline underline-offset-2"
  //           >
  //             {/* <PanelTop /> */}
  //             Website
  //           </a>
  //         )}
  //         {repo && (
  //           <a
  //             href={repo}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="underline underline-offset-2"
  //           >
  //             {/* <BookMarked /> */}
  //             Repo
  //           </a>
  //         )}
  //       </div>
  //     );
  //   },
  // },
  {
    header: "描述",
    accessorKey: "description",
  },
  {
    header: "標籤",
    accessorKey: "tags",
    cell: ({ row }) => getBadges(row.getValue("tags")),
  },
  {
    header: "平台",
    accessorKey: "platform",
    cell: ({ row }) => getBadges(row.getValue("platform")),
  },
  {
    header: "授權許可",
    accessorKey: "license",
  },
  // {
  //   header: "備註",
  //   accessorKey: "note",
  // },
];
