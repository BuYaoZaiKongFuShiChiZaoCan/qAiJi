const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

const audio = document.getElementById("audio")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
const title = document.getElementById("title")
const musicCover = document.getElementById("music-cover")
const jdt = document.querySelector('#progress-container')

// 音乐信息
const songs = [
    "宿敌_田人",
    "You Don t Know Me - 雅欣",
    "顿啦 爱你（小花版）-弹棉花的小花",
    "最美的瞬间 (女版)_弹棉花的小花",
    "蔡淳佳 - 对不起我爱你",
    "向云端_小霞,海洋Bo",
    "DJ马哥 - 最火OK (DJ版)",
    "别想她_高进",
    "我爱他_王小帅",
    "James Newton Howard - Chase Across DC",
    "刘大壮 - 会不会 (吉他版)",
    "Nightwish - Last Ride Of The Day",
    "张佳乐 - 忘记时间 (温柔版)",
    "黄雅莉 - 蝴蝶泉边 (Live)",
    "Two Steps From Hell-Star Sky 活有余罪 - 可有道",
    "源辰 - Two Steps From Hell-Star Sky (源辰 Remix)",
    "Dschinghis Khan - Moskau",
    "久石譲 - Mad Summer (疯狂的夏天)",
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
    /* 歌词添加到这里了 */
    "Are you OK.m4a",
    "1coco - 把回忆拼好给你 (0.8)",
    "221小伙伴 - 遥远的你 (室友合唱版片段)",
    "Achim Reichel - Aloha Heja He",
    "Adam Clayton、Larry Mullen Jr. - Theme From Mission：Impossible",
    "Ahxello - Horizon (地平线)",
    "Alan Walker - Faded",
    "ALisa - Insomnia (钢琴治愈版)",
    "ANU - FLY",
    "Anuo. - 喜欢你 (x0.8)",
    "BGM供货商 - 通往胜利 (钢琴版)",
    "BM奈一 - 后继者",
    "Cagnet - 24／7",
    "Calypso、DJ Despacito、échame La Culpa - Despactio",
    "Christine Welch - 一百万个可能 (Live)",
    "cici_ - 盗墓笔记·十年人间 (片段)",
    "Corki - 下坠Falling",
    "Cornfield Chase",
    "Cuishan He - If You’re Happy",
    "DJ - 虹之间 (DJ版)",
    "DJ蚕豆好吃 - Lendo Calendo",
    "DP龙猪 - 风吹一夏 (片段)",
    "Dschinghis Khan - Moskau",
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
    "G.G - 给陌生的你听",
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
    "MuSik I、满舒克、廖伟珊 - My Heart Will Go On(1)",
    "Nicky - 说散就散 (弹唱版)",
    "Rompasso - Angetenar (安捷纳尔)(Subkills Remix)",
    "S.H.E - 不想长大",
    "Sami & Sasha - Love You Like A Love Song",
    "Sand - CHINA-2 (中国-2)",
    "Steven Burke - Hero's Theme (英雄之魂)",
    "Suprafive、Kelly Clarkson - Catch My Breath (Remix)",
    "T.R.Y - 不是因为寂寞才想你",
];

// 向页面输出音乐数量
document.getElementById('mlength').innerText = songs.length;

function listupdate() {
    // 遍历、输出列表
    let index2;
    for (let index = 0; index < songs.length; index++) {
        if (title.innerText == songs[index]) {
            index2 = index + 1;
            // 设置正在播放的歌曲列表样式
            musicList.getElementsByTagName('div')[index + 1].classList.add('musliIng')
        } else {
            // 恢复其它的样式
            musicList.getElementsByTagName('div')[index + 1].classList.remove('musliIng')
        }
    }
}

setTimeout(() => {
    listupdate()
}, 0);

// 遍历、输出列表
let musicList = document.getElementById('musicList');
let index2;
for (let index = 0; index < songs.length; index++) {
    index2 = index + 1;
    let obect = '<div id="' + songs[index] + '" style="cursor: pointer;" title="' + songs[index] + '" onclick="listonclick(' + index + ')">      <span class="musicItem">' + index2 + '.</span> ' + songs[index] + '</div>';
    musicList.insertAdjacentHTML('beforeend', obect);
}

// 列表点击
function listonclick(index) {
    if (songIndex == index) {
        if (audio.paused) {
            playSong();
            // tanChuang('当前歌曲正在播放，可以点击进度条设置音乐进度');
        } else {
            pauseSong()
        }
    } else {
        // 点击后设置一下当前播放音乐的index，不然songindex还是之前的，到下一首就会以之前播放的音乐为下一首跳转
        songIndex = index;
        loadSong(songs[index]);
        playSong();
    }
}

// 标题点击
function musicTitleOnclick() {
    let musicTitle = document.getElementById('title');
    musicTitle.addEventListener = '<a href="' + musicTitle.innerText + '"></a>';
}

// 音乐加载错误
function MusicError() {
    $.ajax({
        url: 'https://v.api.aa1.cn/api/kugou/',
        type: 'get',
        dataType: 'json',
        async: false,
        data: {
            msg: title.innerText,
            type: '1'
        },
        beforeSend: function () {
            //请求中执行的代码
        },
        complete: function () {
            //请求完成执行的代码
        },
        error: function () {
            //请求成功失败执行的代码
            console.log(res)
            tanChuang('音乐加载错误，3秒后切换下一首')
            setTimeout(() => {
                if (document.getElementById('playpf').className.indexOf('fa-play') > -1) {
                    tanChuang('已暂停')
                } else {
                    nextSong();
                }
            }, 3000);
            musicCover.src = './images/audio/error.png'
        },
        success: function (res) {
            if (res.code == 200) {
                console.log(res);
                musicCover.src = res.img
                audio.src = res.PlayLink
                title.innerText = res.SongTitle + ' - ' + res.Singer;
                musicCover.src = res.img
                playSong();
            } else if (res.code == 1) {
                nextSong();
            }
        }
    })
}

// 默认从第一首开始
let songIndex = 0;
// 更新歌曲细节
function loadSong(song) {
    title.innerHTML = song
    audio.src = `music/${song}.mp3`;
    musicCover.src = `images/audio/${song}.png`;
}

// 图片加载错误设置
function musicimgerr() {
    musicCover.src = './images/audio/error.png'
}

// 播放歌曲
function playSong() {
    // 元素添加类名
    musicContainer.classList.add("play");
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();

    // 如果因为错误暂停就自动下一首
    if (title.innerText == '已暂停') {
        nextSong();
    }

    listupdate()
}

// 停止播放
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// 上一首
function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    // 加载歌曲信息并播放
    loadSong(songs[songIndex])
    playSong()
    lrc.style.transform = `translateY(10px)`;

    listupdate()
}
// 下一首
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
    lrc.style.transform = `translateY(10px)`;

    listupdate()
}

// 创建一个MutationObserver实例
const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
            // src属性发生变化时的处理逻辑
            getLrc(title.innerText)
        }
    }
});
// 配置观察选项
const config = { attributes: true };
/**
 * 开始观察
 * @param {HTMLElement} audio 要监听audio元素
 * @param {const} 配置项
 * @returns {none} 无返回
 */
observer.observe(audio, config);

let lrcContent
// 歌词存储object
let lrc = document.querySelector('#lrc')
var lrcNone = false
/**
 * 歌词获取
 * @param {string} titC 歌词名称
 * @returns {none} 无返回
 */
function getLrc(titC) {
    lrc.innerHTML = '加载中...'
    switch (titC) {
        case "Thr rain - 久石譲",
            "Cornfield Chase",
            "DJ马哥 - 最火OK (DJ版)",
            "James Newton Howard - Chase Across DC",
            "久石譲 - Mad Summer (疯狂的夏天)",
            "源辰 - Two Steps From Hell-Star Sky (源辰 Remix)",
            "茂茂呀 - 洪荒之力 (越南鼓)"
            :
            lrc.innerHTML = '<span style="background: linear-gradient(-3deg,#eebd89 0%,#d13abd 100%);-webkit-background-clip: text;color: transparent;font-size: 20px;">纯音乐 请欣赏</span>'
            lrcNone = true
            break;

        default:
            $.get(`https://buyaozaikongfushichizaocan.github.io/qAiJi/music/lrc/${titC}.lrc`, function (data) {
                lrcContent = data
                lrcNone = false
                parseLrc()
            }).fail(function () {
                lrc.innerHTML = `<span style="background: linear-gradient(-3deg,#eebd89 0%,#d13abd 100%);-webkit-background-clip: text;color: transparent;font-size: 16px;">${titC}<br>歌词加载错误或暂无歌词<br>请等待更新或投稿对应歌词</span>`
                lrcNone = true
            });
            break;
    }
}
getLrc(title.innerText)

// 容器高度
var containerHeight = document.querySelector('.container').clientHeight;
var lrcData// = parseLrc();
/**
 * 解析歌词字符串
 * 得到一个歌词对象的数组
 * 每个歌词对象:
 * {time:开始时间, words:歌词内容}
 * @returns {object} result 最终返回一个歌词对象数组
 */
function parseLrc() {
    if (lrcNone == false) {
        if (lrcContent) {
            var lines = lrcContent.split("\n")
            /**
             * 最终的歌词对象数组
            */
            var result = [];
            for (var i = 0; i < lines.length; i++) {
                var str = lines[i];
                var parts = str.split(']');
                var timeStr = parts[0].substring(1);// 切割第一个字符也就是这里的[
                var obj = {
                    time: parseTime(timeStr),
                    words: parts[1]
                }
                result.push(obj)
            }
            lrcData = result
            createLrcElements()

            // 设置li高度
            liHeight = lrc.children[0].clientHeight;
            return result
        } else {
            console.log('歌词内容为空，首次加载');// 似乎已解决
            setTimeout(() => {
                getLrc(title.innerText)
            }, 50);
        }
    }
}

/**
 * 将一个时间字符串解析为数字
 * @param {*} timeStr 时间段字符串
 * @returns num
 */
function parseTime(timeStr) {
    var parts = timeStr.split(':');
    return +parts[0] * 60 + +parts[1]
}

/**
 * 计算出，在当前播放器播放到第几秒的情况下
 * lrcData数组中，应改高亮显示的歌词下标
 * 在0秒时不显示任何数据，也就是返回-1,
 */
function findIndex() {
    // 播放器当前时间
    var curTime = audio.currentTime;
    for (var i = 0; i < lrcData.length; i++) {
        if (curTime < lrcData[i].time) {
            return i - 1
        }
    }
    // 找遍了都没找到（说明播放到最后一句），就返回最后一句，不然会是undefined
    return lrcData.length - 1
}

/** 
 * 鼠标划入进度条事件
 * 显示一下时间
 * 后面改一下格式
 */
jdt.onmouseenter = function () {
    // 秒转换分钟00:00:00格式
    let outtime = audio.duration;
    let ingtime = audio.currentTime;
    function timeToMinute(times) {
        var t;
        if (times > -1) {
            var hour = Math.floor(times / 3600);
            var min = Math.floor(times / 60) % 60;
            var sec = times % 60;
            if (hour < 10) {
                t = '0' + hour + ":";
            } else {
                t = hour + ":";
            }

            if (min < 10) { t += "0"; }
            t += min + ":";
            if (sec < 10) { t += "0"; }
            t += sec.toFixed(2);
        }
        t = t.substring(0, t.length - 3);
        return t;
    }
    jdt.title = `总时长：${timeToMinute(outtime)}秒\n 当 前 ：${timeToMinute(ingtime)}秒`
}

/**
 * 创建歌词元素
 */
function createLrcElements() {
    lrc.innerHTML = ''
    /* 优化后，只改一次 dom 树，当然现在这里内容很少，可以不需要做这样的优化 */
    var frag = document.createDocumentFragment(); //文档片段
    for (var i = 0; i < lrcData.length; i++) {
        var li = document.createElement('li');
        li.textContent = lrcData[i].words;
        frag.appendChild(li);
    }
    lrc.appendChild(frag)
}

/**
 * 设置偏移量
 */
function setOffset() {
    if (lrcNone == false) {
        var index = findIndex();
        var offset = liHeight * index + liHeight - containerHeight / 2;
        if (offset < 0) {
            offset = 0
        }
        lrc.style.transform = `translateY(-${offset}px)`
        // 去掉之前的样式
        var li = lrc.querySelector('.active')
        if (li) {
            li.classList.remove('active')
            li.classList.add('visited')
        }
        li = lrc.children[index];
        if (li) {
            li.classList.add('active')
            li.style.height = liHeight
        }
    }
}

audio.addEventListener('timeupdate', function () {
    setOffset()
})

// 进度条更新
function updateProgress(e) {
    // audio.duration: 音频长度
    // audio.currentTime: 音频播放位置
    // 对象解构操作
    const {
        duration,
        currentTime
    } = e.target;
    // e.target = {
    //     duration: 225,  // 当前音频时间长度 
    //     currentTime:0  // 当前播放时间
    // }
    const progressPercent = (currentTime / duration) * 100
    // 进度条
    progress.style.width = `${progressPercent}%`
}
// 设置进度条
function setProgress(e) {
    // progressContainer代理视图宽度
    const width = this.clientWidth
    // 鼠标点击时处于progressContainer里的水平偏移量
    const clickX = e.offsetX

    // audio.duration: 音频长度
    const duration = audio.duration

    // audio.currentTime: 音频播放位置
    audio.currentTime = (clickX / width) * duration
}
// 事件监听
// 1.播放歌曲
playBtn.onclick = function () {
    musicContainer.classList.contains('play') ? pauseSong() : playSong()
}
// 2.切换歌曲
prevBtn.onclick = prevSong
nextBtn.onclick = nextSong

// 3.播放器进度条相关
// 3.1 设置播放进度
progressContainer.onclick = setProgress
// 3.2 进度条更新
audio.ontimeupdate = updateProgress
// 3.3 歌曲结束后自动下一首
audio.onended = function () {
    nextSong();
    lrc.style.transform = `translateY(10px)`;
}