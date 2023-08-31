import express from 'express';
import { getbiliAPI, getBiliUserAPI } from "../utils/index.js";
import { msg_error, msg_failed } from '../utils/store.js'
import { mybili, mybiliList } from '../utils/store.js'

const router = express.Router()

router.get("/bili", async (request, response) => {
    const uid = request.query.keyword;
    if (!uid) return response.send(msg_error);
    if (uid == mybili) return response.send(msg_error);
    const { data: res } = await getbiliAPI(uid);
    if (res.code) return response.send(msg_error);
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

router.get("/biliList", async (request, response) => {
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
    if (!keyword) return response.send(msg_error);
    if (keyword == mybiliList) return response.send(msg_error);
    //返回数据处理数据
    const { data: res } = await getBiliUserAPI(send_options)
    if (res.code) return response.send(msg_failed);
    const { numResults, numPages } = res.data // 筛选结果总条数及页数
    const newRes = res.data.result.map(item => {
        const { mid, uname, fans, upic, gender } = item // 筛选单个用户信息
        const newObj = { mid, uname, fans, upic, gender }
        return newObj
    })
    console.log('bili昵称查询接口调用！');
    response.send({ numResults, numPages, result: newRes });
});

export default router;