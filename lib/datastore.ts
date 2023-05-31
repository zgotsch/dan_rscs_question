import type {Node} from "./types";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// fake uuid
function uuid() {
  return Math.random().toString(36).substring(2, 15);
}

export async function loadNode(id: string): Promise<Node<String>> {
  await delay(1000);

  const childCount = Math.floor(Math.random() * 3) + 1;
  return {
    id: id.toString(),
    data: `Node ${id}`,
    children: Array.from({length: childCount}, () => uuid()),
  };
}
