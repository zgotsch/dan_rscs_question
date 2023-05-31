Hi Dan 👋, thanks for taking the time to look at this

This is a simplified example from some real code I wrote. Basically, I have a server (<Node>) component that fetches some data (in the real app, this data comes from the database, here I just generate some random data), but I also want to use the same component to conditionally fetch and render the data on the client.

To get this to work currently, I need to create a client component version (<ClientNode>) and a presentation component (<NodeInner>) to share the render logic. Also, I need to create an API route that the client component can hit to fetch the data, since it can't use the same mechanism as the server component.

Grep `@dan` for some comments in more contextually relevant places.
