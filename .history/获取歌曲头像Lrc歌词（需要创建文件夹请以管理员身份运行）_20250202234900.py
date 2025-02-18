import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import re
import os
import time

# 歌曲名称列表
song_names = [
    "氟西汀 - 是想你的声音啊+忘川彼岸",
    "挪威的森林-伍佰",
    "探清水河-摩登兄弟",
    "罗刹海市-刀郎",
    "童话镇-陈一发儿",
    "童话镇-苗疆少女",
    "雨蝶-李翊君",
    "不是因为寂寞才想你-T.R.Y",
    "随风而去-云菲菲",
    "一生与你擦肩而过-阿悠悠",
    "交换余生（林俊杰）-林宥嘉",
    "你的答案-阿冗 抖音版",
    "擦肩而过-宇桐非",
    "就让这大雨全都落下-容祖儿",
    "挥着翅膀的女孩-容祖儿",
    "有一种爱叫做放手-阿木",
    "淘汰-陈奕迅",
    "风吹过八千里-苏星婕",
    "DJ马哥 - C哩C哩",
    "Gamper & Dadoni、Ember Island - Creep",
    "Mike Zhou - The Dawn (亡灵序曲完美钢琴版)",
    "乌兰图雅、师鹏、沙溢、胡可、云朵、云飞 - 歌舞：点赞新时代 (Live)",
    "于溪悦 - 万爱千恩",
    "华语群星 - 杂技：争奇斗技 (Live)",
    "古筝萧雅 - 片片相思赋予谁",
    "吉克隽逸 - 歌舞：映山红 (Live)",
    "小易萨克斯 - 风筝误",
    "彭雨菲 - 超级棒棒糖",
    "未知歌手 - Autumn (DJ版)",
    "林志玲 - 特别设计：绽放 (Live)",
    "柳轻颂 - 舞い落ちる花びら(Fallin' Flower) (飘落的花瓣)(钢琴版)",
    "段丽阳 - 小孩的梦",
    "翟亚楠 - 心中的另一个自己",
    "萧亮 - 梦的过客",
    "要不要买菜 - 全是爱 (片段)",
    "陈依梦 - 忘情果 (伤感女声版)",
    "韩可可 - 错位时空 (女版)",
    "黄小琥 - 没那么简单",
    "光泽 - 空心",
    "太阳 (你看着我眼睛)-刘鹏",
    "黄征 - 你是另一个我",
    "DP龙猪 - 风吹一夏 (片段)",
    "G.G - 给陌生的你听",
    "T.R.Y - 不是因为寂寞才想你",
    "七星 - 佛说",
    "徐秉龙、沈以诚 - 白羊",
    "旺仔小乔 - 剑伤 (片段)",
    "梁静茹 - 勇气",
    "汪苏泷 - 不分手的恋爱",
    "程响 - 不再联系",
    "筷子兄弟 - 老男孩 (Live)",
    "Jam - 七月上",
    "Leon不太冷的哈哈 - Time Back",
    "前男友 - 你离开的事实",
    "Sing, R. Sing! - 幼女幻奏",
    "林俊杰 - 交换余生 (Live)",
    "汪苏泷 - 那个男孩",
    "许巍 - 旅行 (Live)",
    "许巍 - 曾经的你 (Live)",
    "许巍 - 蓝莲花",
    "留什么给你(Live)-孙楠",
    "Two Steps From Hell-Star Sky 活有余罪 - 可有道",
    "春风何时来",
    "我用什么把你留住-福禄寿FloruitShow",
    "谁 (Live版)-廖俊涛",
    "李巨儒 - 男孩别哭",
    "Collapsing World",
    "lifeline",
    "You",
    "Ephemeral Memories-转瞬即逝的记忆",
    "金琳 - 雨落长安",
    "笔记",
    "最美的瞬间 (女版)_弹棉花的小花",
    "顿啦 爱你（小花版）-弹棉花的小花",
    "新疆美丽公主组合 - 欢乐的跳吧",
    "徐怀钰 - 踏浪 (Live)",
    "郁可唯 - 路过人间",
    "You Don t Know Me - 雅欣",
    "DJ - 虹之间 (DJ版)",
    "精卫-30年前，50年后",
    "弹吉他的小马哥 - 逃",
    "毛不易 - 牧马城市",
    "周传雄 - 黄昏 (Live)",
    "我爱他_王小帅",
    "我还能把你抢回来",
    "白雲兮、DJ家兴、寐加岛-我还能把你抢回来",
    "杜昊澎 - 青春留白",
    "篝火旁",
    "雨花石",
    "茂茂呀 - 洪荒之力 (越南鼓)",
    "羽·泉、黄征 - 奔跑",
    "金玟岐 - 岁月神偷",
    "馒头 - 胖人愁 (变音版)",
    "雨爱",
    "海来阿木_浮生记",
    "打上花火",
    "Cornfield Chase",
    "Thr rain - 久石譲",
    "Are you OK.m4a",
    "蔡淳佳 - 对不起我爱你",
    "向云端_小霞,海洋Bo",
    "DJ马哥 - 最火OK (DJ版)",
    "别想她_高进",
    "James Newton Howard - Chase Across DC",
    "Nightwish - Last Ride Of The Day",
    "张佳乐 - 忘记时间 (温柔版)",
    "黄雅莉 - 蝴蝶泉边 (Live)",
    "源辰 - Two Steps From Hell-Star Sky (源辰 Remix)",
    "少不更事 - 浅影阿",
    "李克勤、周深 - 天下有情人",
    "7爷、9爷 - 漫步人生路 (DJ版)",
    "DJ河园 - 青海摇",
    "N29 - SADDDDDDDD",
    "十三叔 - 囧架架 (DJ版)",
    "官云康 - 穿越时空的思念",
    "阿梨粤 - 秒针",
    "9馨 - Bater Official",
    "Dschinghis Khan - Moskau",
    "刘大壮 - 会不会 (吉他版)",
    "修炼爱情-林俊杰",
    "221小伙伴 - 遥远的你 (室友合唱版片段)",
    "Achim Reichel - Aloha Heja He",
    "Adam Clayton、Larry Mullen Jr. - Theme From Mission：Impossible",
    "Ahxello - Horizon (地平线)",
    "Alan Walker - Faded",
    "ANU - FLY",
    "BGM供货商 - 通往胜利 (钢琴版)",
    "BM奈一 - 后继者",
    "Cagnet - 24／7",
    "Calypso、DJ Despacito、Échame La Culpa - Despactio",
    "Christine Welch - 一百万个可能 (Live)",
    "cici_ - 盗墓笔记·十年人间 (片段)",
    "Corki - 下坠Falling",
    "Cuishan He - If You’re Happy",
    "DJ蚕豆好吃 - Lendo Calendo",
    "dwayne ford - Perseus",
    "ediq - 路过八零",
    "en - 可不可以 (片段)",
    "en - 嚣张",
    "Epic Score - You Must Overcome",
    "Eric周兴哲 - 你,好不好？",
    "F.I.R.飞儿乐团 - 你的微笑",
    "F.O.O.L - Criminals (罪犯)",
    "G.E.M.邓紫棋 - 来自天堂的魔鬼",
    "G.G - 小可爱与小领带",
    "ghfhgfyg - 王者荣耀 (口白)",
    "GTRS - 伊格赛听-谪仙 (DJR7版)",
    "hea2t - 恋殇",
    "iw ix - 月光の雲海 (月光下的云海)",
    "Janji - Horizon (地平线)",
    "Klaus Badelt - He's a Pirate (他是海盗)",
    "Lefty Hand Cream - 恋音と雨空 (恋歌与雨天)",
    "Li-2c - 隔岸观火",
    "LKer林柯 - 满目星辰皆是你",
    "M.Graveyard - You",
    "MC天子、夏沫MOMO - 不爱又何必纠缠",
    "MC浪子楚阳 - 江海不渡你 (烟嗓版)",
    "MJ-7 - Sorry 对不起",
    "MuSik I、满舒克、廖伟珊 - My Heart Will Go On",
    "Nicky - 说散就散 (弹唱版)",
    "Rompasso - Angetenar (安捷纳尔)(Subkills Remix)",
    "S.H.E - 不想长大",
    "Sami & Sasha - Love You Like A Love Song",
    "Sand - CHINA-2 (中国-2)",
    "Steven Burke - Hero's Theme (英雄之魂)",
    "Suprafive、Kelly Clarkson - Catch My Breath (Remix)",
    "久石譲 - Mad Summer (疯狂的夏天)",
]

# 创建保存头像和歌词文件的文件夹
if not os.path.exists("pic_files"):
    os.mkdir("pic_files")
    print("创建文件夹pic_files成功")
if not os.path.exists("lrc_files"):
    os.mkdir("lrc_files")
    print("创建文件夹lrc_files成功")

# 模拟浏览器头部信息
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Referer": "https://music.163.com/",
}


# 获取歌曲信息
def get_song_info(song_name):
    """参数
    {
        s: "歌名或者歌手", // 关键词
        type: 1, //单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002)
        offset: 0, // 偏移量
        total: true, // 是否加上总数等信息
        limit: 15 // 结果数
    }
    """
    url = f"https://music.163.com/api/search/get?s={song_name}&type=1&offset=0&limit=5"
    # 发送请求
    response = requests.get(url, headers=headers)
    data = response.json()
    song_list = data["result"]["songs"]
    return song_list
    # for song in song_list:
    #     song_id = song["id"]
    #     song_name = song["name"]
    #     artist_name = song["artists"][0]["name"]
    #     album_name = song["album"]["name"]
    #     print(f"歌曲ID: {song_id}")
    #     print(f"歌曲名称: {song_name}")
    #     print(f"歌手名称: {artist_name}")
    #     print(f"专辑名称: {album_name}")


# 选择歌曲设置id
def set_song_id(song_list):
    # 列表第一个元素的id
    song_id = song_list[0]["id"]
    return song_id


# 歌词获取
def get_lrc(song_id):
    lrc_url = f"https://music.163.com/api/song/lyric?os=pc&id={song_id}&lv=-1&tv=-1"
    response = requests.get(lrc_url)
    lrc_data = response.json()
    lrc = lrc_data["lrc"]["lyric"]
    # print(lrc)
    return lrc


# 保存歌词到lrc_files
def save_lrc(lrc, song_name):
    lrc_file = f"lrc_files/{song_name}.lrc"
    with open(lrc_file, "w", encoding="utf-8") as f:
        f.write(lrc)


# 根据歌曲信息请求图片
def get_pic(songId):
    # pic_url = songInfo[0]["artists"][0]["img1v1Url"]
    # return requests.get(pic_url)
    pic_url = f"https://music.163.com/api/song/detail?ids=[{songId}]"
    response = requests.get(pic_url, headers=headers)
    data = response.json()
    return data["songs"][0]["album"]["blurPicUrl"]


# 保存图片到pic_files
def save_pic(pic, song_name):
    # 请求
    response = requests.get(pic, headers=headers)
    # 保存
    save_path = os.path.join("pic_files", f"{song_name}.png")
    with open(save_path, "wb") as f:
        f.write(response.content)


for song_name in song_names:
    songInfo = get_song_info(song_name)
    songId = set_song_id(songInfo)
    print(f"歌曲ID：{songId}")
    lrc = get_lrc(songId)
    save_lrc(lrc, song_name)
    print(f"{song_name}歌词保存成功！：{os.getcwd()}\\lrc_files\\{song_name}.lrc")
    # 头像设置
    picUrl = get_pic(songId)
    save_pic(picUrl, song_name)
    # 保存位置
    print(f"{song_name}头像保存成功！：{os.getcwd()}\\pic_files\\{song_name}.png")

print("运行结束")
