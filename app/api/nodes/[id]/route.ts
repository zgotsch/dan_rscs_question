import {NextRequest} from "next/server";
import {loadNode} from "../../../../lib/datastore";

export async function GET(
  request: NextRequest,
  {params}: {params: {id: string}}
): Promise<Response> {
  const node = await loadNode(params.id);
  // @ts-expect-error This is real I promise
  return Response.json(node, {status: 200});
}
