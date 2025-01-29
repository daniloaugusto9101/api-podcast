import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if (req.method == HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    }
    if (req.method == HttpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(req, res);
    }
  }
);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`🔥 Server running on port http://localhost:${port} 🔥`);
});
