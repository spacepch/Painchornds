import express from "express";
import qq from './router/qq-api.js'
import bili from './router/bili-api.js'
import github from './router/github-api.js'
import phone from './router/phone-api.js'

const app = express();

app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static('public'));
app.use("/", qq);
app.use("/", bili);
app.use("/", phone);
app.use("/", github);

app.get("/", async (request, response) => {
  response.send("Holle ppsAPI!");
});

app.listen(5000, "192.168.10.7", () => {
  console.log("5000服务器启动！");
});
