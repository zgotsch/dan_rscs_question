export type NodeId = string;
export type Node<T> = {
  id: NodeId;
  data: T;
  children: Array<NodeId>;
};
