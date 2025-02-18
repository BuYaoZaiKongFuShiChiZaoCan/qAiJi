function audioMvmain() {
    updateVideo();
    // 判断视频是否存在
    if (findMusic(title.textContent)) {
        // 创建一个video元素
        let video = document.createElement('video');
        // 设置ID为audioMvVideo
        video.id = 'audioMvVideo1';
        video.className = 'audioMvVideo';
        // 设置样式
        video.style.cssText = `
            width: 100%;
            height: 100%;
        `;
        // 设置src属性为视频地址
        video.src = findMusic(title.textContent).srcLocalhost;
        document.querySelector('#Center').appendChild(video);
        // 暂停音乐
        pauseSong();
        video.play();
        // 设置音乐进度为视频进度
        video.currentTime = window.localStorage.getItem('musicTime');
        video.onended = function () {
            nextSong();
            // 最小化窗口
            document.webkitExitFullscreen();
            document.getElementById("audioMvVideo1").remove();
            tanChuang("播放完毕，一自动切换换下一首");
        };
        // 设置自动播放
        // video.autoplay = true;
        // 设置循环播放
        // video.loop = true;
        // 设置静音播放
        video.muted = true;
        // 设置音量
        // video.volume = 0.5;
        // 控制条
        video.controls = true;
        // 视频最大化
        setTimeout(() => {
            video.webkitRequestFullScreen();
        }, 0);
    } else {
        console.log("mv不存在");
    }
}

// 更新video元素
function updateVideo() {
    if (document.querySelector('#audioMvVideo1')) {
        // 判断如果video.src包含title.textContent
        if (decodeURIComponent(document.querySelector('#audioMvVideo1').src).includes(title.textContent)) {
            window.localStorage.setItem('musicTime', document.querySelector('#audioMvVideo1').currentTime);
        }
        document.querySelector('#audioMvVideo1').remove();
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

let mvList = [
    {
        id: "浮夸-陈奕迅",
        title: '《浮夸》现场版',
        srcLocalhost: '/music/mv/浮夸-陈奕迅.mp4',
        srcNetwork: null,
        poster: null,
        desc: '《浮夸》现场版，演唱陈奕迅，粵语经典歌曲，太好听了来源 qq.com · 时长 4 分钟35 秒 · 上传时间 2021年2月7日 · 上传人 娟子v音乐'
        // 上传时间
        // 上传人
        // 播放量
        // 弹幕[{time,info{text,style},{发布人,发布地点...},{弹幕点赞量、弹幕回复}}]
    }
]