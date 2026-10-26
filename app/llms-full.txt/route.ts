import { buildLlmsTxt, markdownResponse } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(buildLlmsTxt({ full: true }));
}
