import * as http from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {}
);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`🔥 Server running on port ${port} 🔥`);
});
