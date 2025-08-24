import http from "http";
import app from "./app.js";
import { initSocket } from "./sockets/index.js";
import connectDb from "./config/db.js";
connectDb();

const PORT = process.env.PORT;
const server = http.createServer(app);
initSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
