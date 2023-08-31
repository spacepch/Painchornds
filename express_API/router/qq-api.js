import express from 'express';
import { getqqAPI, getqqPhoneAPI } from "../utils/index.js";
import { msg_error, msg_failed } from '../utils/store.js';
import { myqq } from '../utils/store.js';
import cheerio from 'cheerio';

const router = express.Router()

router.get("/qq", async (request, response) => {
    const qq = request.query.keyword;
    if (!qq) return response.send(msg_error);
    if (qq == myqq) return response.send(msg_error);
    const { data: res1 } = await getqqAPI(qq)
    const { data: res2 } = await getqqPhoneAPI(qq);
    // 筛html
    const $ = cheerio.load(res1)
    // 判断异常
    if (!res2.status) {
        return response.send(msg_error)
    }
    // 判断有无权限拦截
    if ($('.pg-profile').text()) {
        // 无拦截
        var nickname = $('.head-detail-name .user_name').text()
        var gender = '太难写了，当没有吧！'
    } else {
        // 有拦截
        var nickname = $('.user_infor .user_name').text()
        var gender = $('.user_infor p').eq(1).text().substring(0, 1).trim() || null;
    }
    // 整理数据
    const data = {
        qq,
        name: nickname || '等待修复',
        gender,
        avatar: `https://qlogo4.store.qq.com/qzone/${qq}/${qq}/100`,
        phone: res2.phone ? res2.phone : "未绑定手机号",
        phonediqu: res2.phonediqu ? res2.phonediqu : "未绑定手机号",
    }
    console.log('QQ接口调用！');
    response.send(data);
});

export default router;