import {Suspense} from "react";
import type {Node} from "../lib/types";
import {LazyEdge} from "./LazyEdge";

// TODO(zgotsch): @dan I have to make this presentational component in order to share component code
// between the server and client.
export function NodeInner({node}: {node: Node<String>}) {
  return (
    <div>
      <span>
        {node.id}: {node.data}
      </span>
      <ul>
        {node.children.map((id) => (
          <li key={id}>
            <LazyEdge id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
