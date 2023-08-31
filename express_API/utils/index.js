import request from "./request.js";


/**
 * 获取QQ用户信息接口
 * @param {*} uid qq账号
 * @returns Promise对象
 */
export const getqqPhoneAPI = (uid) => {
  return request({
    url: "https://zy.xywlapi.cc/qqapi",
    params: { qq: uid },
  })
}

/**
 * 获取B站用户信息
 * @param {*} uid B站uid
 * @returns Promise对象
 */
export const getbiliAPI = (uid) => {
  return request({
    url: `https://api.bilibili.com/x/web-interface/card`,
    params: { mid: uid },
    headers: {},
  });
};

/**
 * 获取github用户信息
 * @param {*} uid github用户名
 * @returns Promise对象
 */
export const getGithubAPI = (uid) => {
  return request({
    url: `https://api.github.com/users/${uid}`,
    params: {},
    headers: {},
  });
};

/**
 * 获取QQ用户信息接口
 * @param {*} uid qq账号
 * @returns Promise对象
 */
export const getqqAPI = (uid) => {
  const pt4_token= 'eUBeq0ZjF-RdgUDoX09--TDwkC9dBMwEp9TesQeaz9Q_';
  const p_skey = '8Z*UbHtJqT*TidcV0bLOVePCeBtmTQlxCjsRK8Gr-8M_';
  return request({
    url: `https://user.qzone.qq.com/${uid}`,
    headers: {
      'cookie': `uin=o2606249268; p_uin=o2606249268; pt4_token=${pt4_token}; p_skey=${p_skey};`,
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188'
    }
  })
};

export const getphoneAPI = (uid) => {
  return request({
    url: `https://www.ip138.com/mobile.asp?mobile=${uid}&action=mobile`
  })
}

/**
 * 按昵称搜索B站用户信息
 * @param {*} keyword B站用户昵称 
 * @returns Promise对象
 */
export const getBiliUserAPI = ({ keyword, page, page_size, order, order_sort, user_type }) => {
  return request({
    url: "https://api.bilibili.com/x/web-interface/wbi/search/type",
    params: {
      page,
      page_size,
      keyword,
      order,
      order_sort,
      user_type,
      'search_type': 'bili_user'
    },
    headers: {
      'cookie': 'buvid3=D3751ACC-3F4D-28D5-F703-3F237C03A71264884infoc;',
    }
  })
}

