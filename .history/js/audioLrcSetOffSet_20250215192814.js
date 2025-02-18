// 更新歌词滚动和样式的主函数
function updateLyrics() {
    const index = findIndex();
    const validIndex = Math.max(0, index);

    const offset = lrc.childNodes[validIndex] ? lrc.childNodes[validIndex].offsetTop - 20 : 0;

    if (Yindex !== validIndex && !musicLrcHandmouse) {
        Yindex = validIndex;
        const finalOffset = Math.max(0, offset);

        requestAnimationFrame(() => {
            musicLrcHand.scroll(0, finalOffset);
            if (window.dogLrc) {
                dog.scroll(0, finalOffset - dogHeight / 2);
            }
        });
    }

    // 更新 lrc 内的歌词样式
    updateLyricStyles(lrc, validIndex);

    // 更新 window.dogLrc 内的歌词样式
    if (window.dogLrc) {
        updateLyricStyles(window.dogLrc, validIndex);
    }
}

/**
 * 设置偏移量
 */
let Yindex = 0;
let musicLrcHandmouse = false;
window.musicLrcHand.onmouseover = function () {// 鼠标移入后包括滚动时执行
    musicLrcHandmouse = true;
}
window.musicLrcHand.onmouseleave = function () {// 鼠标移出时执行
    musicLrcHandmouse = false;
    updateLyrics()
}

// 更新歌词样式的辅助函数
function updateLyricStyles(container, index) {
    const activeLi = container.querySelector('.active');
    if (activeLi) {
        activeLi.classList.remove('active');
        activeLi.classList.add('visited');
    }

    const currentLi = container.children[index];
    if (currentLi) {
        currentLi.classList.add('active');
        currentLi.style.height = liHeight;
    }
}

// 动画循环函数
function animationLoop() {
    if (!audio.paused && !audio.ended) {
        updateLyrics();
        requestAnimationFrame(animationLoop);
    }
}

// 当音频开始播放时启动动画循环
audio.addEventListener('play', () => {
    requestAnimationFrame(animationLoop);
});

// 当音频暂停或结束时停止动画循环
audio.addEventListener('pause', () => {
    // 这里不需要额外操作，animationLoop 会自行停止
});

audio.addEventListener('ended', () => {
    // 这里不需要额外操作，animationLoop 会自行停止
});