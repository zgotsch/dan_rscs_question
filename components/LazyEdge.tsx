"use client";

import React, {Suspense} from "react";
import {ClientNode} from "./ClientNode";

export function LazyEdge({id}: {id: string}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  if (isLoaded) {
    // TODO(zgotsch): @dan I can't do this because it's a server component
    // return <Node id={id} />;
    return (
      <Suspense fallback={`Loading node ${id}`}>
        <ClientNode id={id} />
      </Suspense>
    );
  }

  return (
    <div>
      Unloaded edge to {id} <button onClick={() => setIsLoaded(true)}>Load</button>
    </div>
  );
}
