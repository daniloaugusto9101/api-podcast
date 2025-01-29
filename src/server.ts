import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`🔥 Server running on port http://localhost:${port} 🔥`);
});
