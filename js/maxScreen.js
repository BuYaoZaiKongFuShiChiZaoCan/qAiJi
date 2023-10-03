let Elementing
// 用于判断蒙版元素有没有，如果有就设置为了true，否则为false
let maxYN = false;

/**
 * 最大化窗口
 * @param {HTMLElement} HTMLE 需要最大化的元素
 * @returns {null} 无返回
 */
function maxScreen(HTMLE) {
    if (maxYN == false) {
        maxYN = true
        // 蒙版
        let obj = `<div id="maxScreen" style="z-index: 9999;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0,0,0,.7); backdrop-filter: blur(1px);"><span style="color: #ddd;" onclick="delMaxScreeen(Elementing)">[关闭]</span></div>`;
        document.body.insertAdjacentHTML('beforeend', obj);
        HTMLE.classList.add('maxsc')
    } else {
        // console.log('窗口已存在，请先关闭窗口');
    }
}

/**
 * 关闭最大化窗口
*/
function delMaxScreeen(HTMLE) {
    if (document.querySelector('#maxScreen')) {
        maxYN = false;
        HTMLE.classList.remove('maxsc');
        document.body.removeChild(document.querySelector('#maxScreen'));
        // 只要关闭窗口就设置一次
        musicListHand.title = '点击最大化查看歌词列表'
    }
}

// 设置元素需要传入的，这里是设置音乐列表，因为是设置样式，所以每个元素都要到max.css里去设置样式，样式选择器为“.maxsc”，为防止冲突不生效最好加!important
document.querySelector('#musicListHand').onclick = function () {
    Elementing = musicList;
    maxScreen(Elementing)
    // 最大化后设置title提示为空
    musicListHand.title = ''
}