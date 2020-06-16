import app from "../index";
import http from "http";

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행되었습니다.`);
});
