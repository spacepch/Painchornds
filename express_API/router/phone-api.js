import express from 'express';
import { getphoneAPI } from "../utils/index.js";
import { msg_error, msg_failed } from '../utils/store.js'
import { myphone } from '../utils/store.js'
import cheerio from 'cheerio'

const router = express.Router()

router.get("/phone", async (request, response) => {
    const phone = request.query.keyword;
    if (!phone) return response.send(msg_error);
    if (phone == myphone) return response.send(msg_error);
    const { data: res } = await getphoneAPI(phone)
    const $ = cheerio.load(res)
    const operator = $('tbody tr:eq(2) td:eq(1)').text().trim();
    const area = $('tbody tr:eq(1) td:eq(1) span').text().replace(/\s+/g, '');
    const postcode = $('tbody tr:eq(5) td:eq(1)').text().trim();
    const data = { phone, district: operator + area, postcode }
    console.log('手机号归属地接口调用！');
    response.send(data);
});

export default router;