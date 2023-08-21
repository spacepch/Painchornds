import request from "../utils/request.js";

/**
 * 获取QQ用户信息接口
 * @param {*} uid qq账号
 * @returns Promise对象
 */
export const getqqAPI = (uid) => {
  return request({
      url: `https://api.usuuu.com/qq/${uid}`
    })
  ;
};
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

/**
 * 获取QQ用户信息接口
 * @param {*} uid qq账号
 * @returns Promise对象
 */
export const getqq1API = (uid) => {
  return request({
    url: `https://user.qzone.qq.com/${uid}`,
    headers: {
      'cookie': 'ptcz=3f8e6064b53aac0154012b6521b6e0f7f4c8cf2d8b195367224db96effcdcf92; o_cookie=2606249268; pac_uid=1_2606249268; iip=0; fqm_pvqid=5247f1aa-e7fa-4c42-9d35-90c57efc4556; tvfe_boss_uuid=00b348af274cf13c; pgv_pvid=5894066757; pgv_pvi=1258903552; RK=TBRolcNnuJ; pgv_info=ssid=s8286061488; cfqqcomrouteLine=download_download_a20200713hl_a20220218newlimit_a20211224new_a20211224new_a20211224new; zzpaneluin=; zzpanelkey=; cfhdcfqqcomrouteLine=a20220218march_zxDetail_a20210607download_a20220408mact_a20220408mact; fqm_sessionid=2bf1f371-92f1-45e0-8aef-b421fb195dae; QZ_FE_WEBP_SUPPORT=1; _tc_unionid=e79e0acf-2bbd-4a2b-8b12-1edeed30378c; _qpsvr_localtk=0.45492010479611866; eas_sid=6156G7p2L7p3A4G660f1z2T5N5; tokenParams=%3Fatm_cl%3Dad%26atm_pos%3D23614; codmqqcomrouteLine=main_a20210729gwhd_newsdetail_methoddetail; lmjxqqcomrouteLine=index_index_a20210809xz; vversion_name=8.2.95; __Q_w_s__QZN_TodoMsgCnt=1; __Q_w_s_hat_seed=1; randomSeed=342309; ied_qq=o1009420234; luin=null; lskey=null; user_id=null; session_id=null; qq_domain_video_guid_verify=ff862b7c82e77498; video_omgid=ff862b7c82e77498; qqmusic_uin=2606249268; qqmusic_key=@jWOWI9xoc; qqmusic_fromtag=6; qzmusicplayer=qzone_player_1678153601_1690223769868; _tucao_session=alNybDEzSFJuV1pqNk9tN2lsWkZPbi9WUTlrUG4ySzBEVGl6QzEvWGN5dXk1RC8xYXpqd0F0RCtlZjFkQVppd010bFdkWmJQcmQ3SFQzY0NqVVZYUVhKeHYvQ2luV21qM3M3YkE1Q3kwTXZ3REI0V3ErL21VcGJXY29nZjJOVHpjYWtnNSt3WGRuTmNLdlFpWktSOTlRPT0%3D--atmReFRh6c2ZU9jzcGPqPQ%3D%3D; qz_screen=1536x865; cpu_performance_v8=4; rv2=80A0D891F850245B75F47BEAAB48493F0FC6CC196A9AF41182; property20=D5923ABE8034C63CADB8739BE82B6116C00E0B6ED7A5EC466DBE4C2762ADB790CC54394CA3912F4C; uin=o2606249268; skey=@9nCqc3XBK; p_uin=o2606249268; pt4_token=YCj9ToEtILuFTEolHfYbaMyJao*I96FahQ2rQu2JpJs_; p_skey=2XwllFOLCz4wt*ft-6ihDzOjasfs4BZK7vfpoG4*n-U_',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188'
    }
  })
};