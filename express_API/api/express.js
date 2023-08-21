import express from "express";
import { getqqAPI, getbiliAPI, getGithubAPI, getphoneAPI, getBiliUserAPI, getqqPhoneAPI } from "./index.js";

const app = express();

const msg_error = { code: 1, message: '错误的接口！' }
const msg_failed = { code: 1, message: "请求失败，请再次尝试！" }

app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", async (request, response) => {
  const keyword = request.query.keyword;
  // const res = await getBiliUserAPI()
  response.send("Holle ppsAPI!");
});

app.get("/api/phone", async (request, response) => {
  const keyword = request.query.keyword;
  const { data: res } = await getphoneAPI(keyword)
  console.log(res);
  response.send(res);
});

app.get("/api/qq", async (request, response) => {
  const uid = request.query.keyword;
  if (!uid) return response.send(error);
  //调取接口获取信息
  const { data: res1 } = await getqqAPI(uid);
  const { data: res2 } = await getqqPhoneAPI(uid);
  // console.log([res1,res2]);
  // 判断异常
  if (!res2.status || !res1.code) {
    return response.send(msg_failed)
  } else if (res1.code === "400" || res2.status === "500") {
    return response.send(msg_error)
  };
  // 处理信息
  const data = {
    qq: uid,
    name: res1.data.name,
    avatar: res1.data.avatar,
    phone: res2.phone ? res2.phone : "未绑定手机号",
    phonediqu: res2.phonediqu ? res2.phonediqu : "未绑定手机号",
  };
  console.log("qq接口被访问");
  response.send([data,request.ip]);
});

app.get("/api/bili", async (request, response) => {
  const uid = request.query.keyword;
  if (!uid) return response.send(error);
  const { data: res } = await getbiliAPI(uid);
  if (res.code) return response.send(error);
  const data = {
    avatar: res.data.card.face,
    name: res.data.card.name,
    sex: res.data.card.sex,
    level: res.data.card.level_info.current_level,
    fans: res.data.card.fans,
    isFollow: res.data.following,
    sign: res.data.card.sign,
    vip: res.data.card.vip.type,
  };
  console.log("bili接口被访问");
  response.send(data);
});

app.get("/api/github", async (request, response) => {
  const keyword = request.query.keyword;
  if (!keyword) return response.send(error);
  const { data: res } = await getGithubAPI(keyword);
  const data = {
    login: res.login,
    id: res.id,
    href: res.html_url,
    avatar: res.avatar_url,
    name: res.name,
    fans: res.followers,
    following: res.following,
  };
  console.log("git接口被访问");
  response.send(data);
});

app.get("/api/biliList", async (request, response) => {
  const default_options = {
    'page': '1',
    'page_size': '10',
    'order': '',
    'order_sort': '0',
    'user_type': '0'
  }
  const { keyword, page, page_size, order, order_sort, user_type } = request.query;
  const options = { keyword, page, page_size, order, order_sort, user_type }
  const send_options = { ...default_options, ...options }
  if (!keyword) return response.send(error);
  //返回数据处理数据
  const { data: res } = await getBiliUserAPI(send_options)
  let newRes = res.map(item => {
    let { } = item
    let newObj = { name, age }
    return newObj
  })
  console.log('bili昵称查询接口调用！');
  response.send(res);
});

// app.get("/qq", async (request, response) => {
//   const keyword = request.query.keyword;
//   const { data: res } = await getqq1API(keyword)
//   console.log('test');
//   response.send(res);
// });

app.get("/page", async (request, response) => {
  console.log('访问');

  response.send(response.redirect('/express_框架/static/index.html'))
});

app.listen(5000, "192.168.10.7", () => {
  console.log("5000服务器启动！");
});
