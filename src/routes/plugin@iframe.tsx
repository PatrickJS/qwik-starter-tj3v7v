import { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async (requestEvent) => {
  // for iframe
  // requestEvent.request.headers.get("sec-fetch-dest") === "iframe";
  // for document request
  if (requestEvent.request.headers.get("sec-fetch-dest") === "document") {
    // requestEvent.send
    // for json requestEvent.json
    // for html requestEvent.html
    throw requestEvent.html(200, "<html><body>hello world</body></html>");
  }
};
