#!/usr/bin/python3
# encoding:utf-8
from flask import Flask, request,jsonify
import json
import requests
from flask_cors import CORS

# 实例化api，把当前这个python文件当作一个服务，__name__代表当前这个python文件
api = Flask(__name__)
CORS(api, resources=r'/*')

@api.route("/api/bili", methods=['get'])
def search():

    uid = request.args.get('uid')
    print('接收数据：', uid)
    url = 'https://api.bilibili.com/x/web-interface/card?mid=%s' % uid + \
        '&jsonp=jsonp&article=true'
    ua = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
    }
    cookie = {
        'buvid3': '9DE3AA21-F702-47C5-B631-6281A2EDD005138373infoc',
        'LIVE_BUVID': 'AUTO2816029200667496',
        'i-wanna-go-back': '-1',
        'CURRENT_BLACKGAP': '0',
        'buvid_fp_plain': 'undefined',
        'blackside_state': '0',
        'theme_style': 'light',
        'b_timer': '%7B%22ffp%22%3A%7B%22333.788.fp.risk_9DE3AA21%22%3A%22182CE2974BB%22%2C%22333.337.fp.risk_9DE3AA21%22%3A%22182CE190299%22%2C%22333.1007.fp.risk_9DE3AA21%22%3A%22182CDBC9B23%22%2C%22333.976.fp.risk_9DE3AA21%22%3A%2218278634AB6%22%2C%22333.999.fp.risk_9DE3AA21%22%3A%22182CE3FA743%22%2C%22333.937.fp.risk_9DE3AA21%22%3A%22182CA168B33%22%2C%22888.2421.fp.risk_9DE3AA21%22%3A%221822623CB1D%22%2C%22777.5.0.0.fp.risk_9DE3AA21%22%3A%221822623F40B%22%2C%22333.1193.fp.risk_9DE3AA21%22%3A%22182CE298337%22%2C%22444.8.fp.risk_9DE3AA21%22%3A%221825F030B6F%22%7D%7D',
        'hit-dyn-v2': '1',
        'buvid4': '46D97F86-F94B-308F-C50A-EDB42BC247C718412-022012913-t9QUZKvgAmxXIKsY5Z%2B1eg%3D%3D',
        'b_nut': '100',
        '_uuid': 'B10CC377D-B1065-5936-7441-39CBD9B88921069442infoc',
        'fingerprint3': '21fb3b666d562223a347723e561f9200',
        'hit-new-style-dyn': '0',
        'rpdid': "|(YuRlm|)Jl0J'uYY)l))m~l",
        'is-2022-channel': '1',
        'CURRENT_FNVAL': '4048',
        'header_theme_version': 'CLOSE',
        'nostalgia_conf': '-1',
        'CURRENT_PID': '33060580-ce33-11ed-9b71-5de225bb181e',
        'theme_style': 'light',
        'FEED_LIVE_VERSION': 'V8',
        'DedeUserID': '388609984',
        'DedeUserID__ckMd5': '724672cba270b49e',
        'b_ut': '5',
        'i-wanna-go-feeds': '2',
        'go_old_video': '-1',
        'buvid_fp': '012afcd7ec45e0bac82b0a6ba7466095',
        'share_source_origin': 'COPY',
        'bsource': 'share_source_copy_link',
        'fingerprint': '012afcd7ec45e0bac82b0a6ba7466095',
        'CURRENT_QUALITY': '0',
        'SESSDATA': 'c66a49c5%2C1700834253%2C86824%2A52',
        'bili_jct': 'b9ae6bd06446ed742733755d98bb24d9',
        'sid': '5jyhh0r3',
        'PVID': '2',
        'home_feed_column': '4',
        'browser_resolution': '794-746',
        'b_lsid': '310A10AC29_18868030913',
        'innersign': '0',
        'bp_video_offset_388609984': '801087808173244500',
    }
    params = {
        'offset': '',
        'host_mid': '2170934',
        'timezone_offset': '-480',
        'features': 'itemOpusStyle',
    }
    response1 = requests.get(url, params=params, cookies=cookie, headers=ua)
    if response1.status_code == 200:
        # print('结果：', response1.text)
        print('请求成功！')
        data = json.loads(response1.text)
        dict = {"name": "%s" % data['data']['card']['name'], "sex": "%s" % data['data']['card']['sex'], "avatar": "%s" % data['data']['card']['face'], "level": "%s" % data['data']
                ['card']['level_info']['current_level'], "fans": "%s" % data['data']['card']['fans'], "isFollow": data['data']['following'], "sign": "%s" % data['data']['card']['sign']}
        json_data = json.dumps(dict, ensure_ascii=False)
        return json_data
    else:
        # print('请求失败！')
        return '404 not found'


if __name__ == '__main__':
    api.run()  # 启动服务

    # debug=True,改了代码后，不用重启，它会自动重启
    # 'host='127.0.0.1'别IP访问地址
