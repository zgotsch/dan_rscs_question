import * as Datastore from "../lib/datastore";
import {NodeInner} from "./NodeInner";

export async function Node({id}: {id: string}) {
  const node = await Datastore.loadNode(id);
  return <NodeInner node={node} />;
}
