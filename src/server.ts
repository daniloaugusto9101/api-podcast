import * as http from "http";
import { getListEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method == "GET") {
      await getListEpisodes(req, res);
    }
  }
);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`🔥 Server running on port http://localhost:${port} 🔥`);
});
