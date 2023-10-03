const secondsaudio = document.querySelector('#seconds');
const a_paused = document.querySelector('#a_paused');
const timediv = document.querySelector('#time');

/**
 * 秒针声音控制
 */
let sa_paused = false
function playseconds() {
    if (sa_paused) {
        secondsaudio.play()
    }
}
// 每秒执行一次
setInterval(() => {
    playseconds()
}, 1000);

// 点击开关后
a_paused.onclick = 开关;
// 点击元素后设置开关
timediv.onclick = 开关;
function 开关() {
    if (sa_paused) {
        a_paused.innerText = '秒针声音：关(默认)'
        sa_paused = false
    } else {
        a_paused.innerText = '秒针声音：开'
        sa_paused = true
    }
}


/**
 * 报时声音控制
 */

/**
 * 整点报时声音控制
 */