import {Node} from "../lib/types";
import {NodeInner} from "./NodeInner";

// TODO(zgotsch): fake data fetching library so I can use suspense
type Wrapped<T> = {unwrap(): T};
function wrap<T>(p: Promise<T>) {
  let status = "pending";
  let output: any;

  const wrapped = p.then(
    (x) => {
      status = "success";
      output = x;
    },
    (e) => {
      status = "error";
      output = e;
    }
  );

  return {
    unwrap(): T {
      if (status === "pending") {
        throw wrapped;
      } else if (status === "error") {
        throw output;
      } else {
        return output;
      }
    },
  };
}

const cache = new Map<string, Wrapped<Node<string>>>();
function fetchNode(id: string): Wrapped<Node<string>> {
  let wrapped;
  if (!cache.has(id)) {
    wrapped = wrap(fetch(`/api/nodes/${id}`).then((res) => res.json()));
    cache.set(id, wrapped);
  } else {
    wrapped = cache.get(id)!;
  }
  return wrapped;
}

export function ClientNode({id}: {id: string}) {
  // TODO(zgotsch): @dan I need to fetch through the api here, which means I need to introduce a new
  // API route
  const node = fetchNode(id).unwrap();

  return <NodeInner node={node} />;
}
