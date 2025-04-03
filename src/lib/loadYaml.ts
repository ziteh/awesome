import fs from "fs";
import path from "path";
import { parse } from "yaml";

import type { App } from "@/components/DataTable/columns";

export function loadYamlData(): App[] {
  const filePath = path.resolve("src/data/apps.yaml");
  const yamlContent = fs.readFileSync(filePath, "utf8");
  return parse(yamlContent) as App[];
}
