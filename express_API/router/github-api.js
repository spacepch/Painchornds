import express from "express";
import { getGithubAPI } from "../utils/index.js";
import { msg_error, msg_failed } from '../utils/store.js'
import { mygithub } from '../utils/store.js'

const router = express.Router()

router.get("/github", async (request, response) => {
    const keyword = request.query.keyword;
    if (!keyword) return response.send(msg_error);
    if (keyword == mygithub) return response.send(msg_error);
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

export default router;