import { Button } from "@/components/ui/button";
import { FileCode2 } from "lucide-react";

const URL =
  "https://raw.githubusercontent.com/ziteh/awesome/refs/heads/main/src/data/apps.yaml";

export function RawButton() {
  return (
    <Button variant="ghost" size="icon" aria-label="Raw file">
      <a href={URL} target="_blank" title="Raw file">
        <FileCode2 aria-hidden />
      </a>
    </Button>
  );
}
