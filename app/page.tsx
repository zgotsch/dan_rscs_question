import {Node} from "../components/Node";

export default function Home() {
  // @ts-expect-error - RSC
  return <Node id="root" />;
}
