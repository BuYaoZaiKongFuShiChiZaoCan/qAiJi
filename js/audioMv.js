const audioMv = document.querySelector('#audioMv');

let mvList = [
    {
        id: "浮夸-陈奕迅",
        title: '《浮夸》2010DUO演唱会 现场版',
        srcLocalhost: '../music/mv/浮夸-陈奕迅.mp4',
        srcNetwork: null,
        poster: null,
        desc: '《浮夸》现场版，演唱陈奕迅，粵语经典歌曲，太好听了来源 qq.com · 时长 4 分钟35 秒 · 上传时间 2021年2月7日 · 上传人 娟子v音乐'
        // 上传时间
        // 上传人
        // 播放量
        // 弹幕[{time,info{text,style},{发布人,发布地点...},{弹幕点赞量、弹幕回复}}]
    },
    {
        id: "体面-于文文",
        title: '《前任3：再见前任》电影插曲 体面-于文文',
        srcLocalhost: '../music/mv/体面-于文文.mp4',
        srcNetwork: "https://tv.sohu.com/v/dXMvMzQ2NjQwNzg3LzQyMjA0MzQ2OS5zaHRtbA==.html",
        poster: null,
        desc: '《体面》由于文文作曲并演唱，唐恬作词，郑楠编曲，单曲于2017年12月25日发行，是电影《前任3：再见前任》的插曲。 后收录在于文文于2018年11月7日发行的专辑《尚未界定》中。 2018年4月8日，该曲获第23届华鼎奖中国电影最佳歌曲奖；8月29日，该歌曲获得华人歌曲音乐盛典年度金曲；12月18日，获得Billboard Radio China 2018年度华语十大金曲。'
    },
    {
        id: "说散就散-袁娅维TIA RAY",
        title: '《前任3：再见前任》电影插曲 《说散就散》',
        srcLocalhost: '../music/mv/说散就散-袁娅维.mp4',
        srcNetwork: "https://music.163.com/#/mv?id=5741462",
        poster: null,
        desc: '袁娅维献声电影《前任3：再见前任》「灵魂新锋」TIA袁娅维再度为爱献声，剖心演绎最催人泪下版《说散就散》。电影「前任3：再见前任」主题曲《说散就散》洒脱上线'
    },
    {
        id: "挪威的森林-伍佰",
        title: '挪威的森林 伍佰',
        srcLocalhost: '../music/mv/挪威的森林-伍佰.mp4',
        srcNetwork: null,
        poster: null,
        desc: '《挪威的森林》是由伍佰创作词曲并演唱的流行摇滚歌曲，由伍佰与China Blue乐队共同编曲，收录在伍佰&China Blue于1996年6月18日发行的专辑《爱情的尽头》中 。创作灵感来源于日本作家村上春树出版的同名长篇小说《挪威的森林》，是伍佰有感而发创作出的歌曲。伍佰音乐生涯中传唱度最高的音乐作品。'
    }
]

/**
 * 主函数
 * @param {boolean} autoplay 是否自动播放
 * @param {object} musicInfo 音乐信息
 * @returns {null} 无返回
 */
function audioMvmain(musicInfo = findMusic(title.textContent)) {
    // 创建一个video元素
    let video = document.createElement('video');
    // 设置ID为audioMvVideo
    video.id = 'audioMvVideo1';
    video.className = 'audioMvVideo';
    // 设置样式
    video.style.cssText = `
            width: 100%;
            height: auto;
        `;
    // 设置src属性为视频地址
    video.src = musicInfo.srcLocalhost;
    // 设置自动播放
    // video.autoplay = true;
    // 设置循环播放
    // video.loop = true;
    // 设置静音播放
    // video.muted = true;
    // 设置音量
    // video.volume = 0.5;
    // 控制条
    video.controls = true;
    audioMv.appendChild(video);
    // 元素加载完成后
    video.onloadedmetadata = function () {
        // 设置音乐进度为视频进度
        video.currentTime = window.localStorage.getItem('musicTime');
        // 视频最大化
        // setTimeout(() => {
        video.webkitRequestFullScreen();
        // }, 17);
        video.onended = function () {
            nextSong();
        };
    };
    // 添加标题等表述元素
    let title = document.createElement('h2');
    title.classList.add('audioMvTitle');
    title.textContent = musicInfo.title;
    let desc = document.createElement('p');
    desc.classList.add('audioMvDesc');
    desc.textContent = musicInfo.desc;
    audioMv.appendChild(title);
    audioMv.appendChild(desc);
}

// 更新video元素
function updateVideo() {
    let video = document.querySelector('#audioMvVideo1');
    if (video) {
        // 判断如果video.src包含title.textContent
        if (decodeURIComponent(video.src).includes(title.textContent)) {
            window.localStorage.setItem('musicTime', video.currentTime);
        }
        // 移除#audioMv中的所有元素
        audioMv.textContent = null;
    }
}

// 查找ID与歌曲对应的元素
function findMusic(id) {
    for (let i = 0; i < mvList.length; i++) {
        if (mvList[i].id == id) {
            return mvList[i];
        }
    }
}

// 页面加载执行一次
let musicinfo = findMusic(title.textContent);
setTimeout(() => {
    updateVideo();
    // 判断视频是否存在于显示的列表
    if (musicinfo) {
        pauseSong();
        // Mv 有MV的歌曲会切换后会优先自动播放MV
        audioMvmain(musicinfo);
    } else {
        // tanChuang("此歌曲暂无MV");
    }
}, 0);

let videoList = [
    {
        "name": "《尸潮往生录》惊变/余阳",
        "img": "https://img2.imgtp.com/2024/05/11/iChli8Cf.webp",
        "id": "403716b135021b8f7b8acce874bb5ba1"
    },
    {
        "name": "韩国丧尸电影《活着》",
        "img": "https://img2.imgtp.com/2024/05/11/qLe1RGIk.jpg",
        "id": "56bc99ca189b42408bfeecfa92318f03"
    },
    {
        "name": "盗盗梦空间1080P",
        "img": "https://img2.imgtp.com/2024/05/11/kxXW3VE5.webp",
        "id": "c84e297fa4b3b60ab6f3cafaa9022677"
    },
    {
        "name": "破坏者",
        "img": "https://img2.imgtp.com/2024/05/11/BEmf4kJu.webp",
        "id": "1d4ccb0c93809148ddf4ca30ff18139a"
    },
    {
        "name": "暗影青梅",
        "img": "https://img2.imgtp.com/2024/05/11/Lv1306sm.webp",
        "id": "133c665625a9c0e08be813bfbd33c700"
    },
    {
        "name": "纯爱军训",
        "img": "https://img2.imgtp.com/2024/05/11/l75k39g1.PNG",
        "id": "e57b3094e5ba411573b7a3118804b207"
    },
    {
        "name": "丧尸来敲门",
        "img": "https://img2.imgtp.com/2024/05/11/0gnZ35T4.webp",
        "id": "17d8890b69079e975c5b9da9ba4372ff"
    }
]