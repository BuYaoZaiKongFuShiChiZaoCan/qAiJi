// 键盘监听

document.onkeydown = function (e) {    //对整个页面监听
    var keyNum = window.event ? e.keyCode : e.which;       //获取被按下的键值  
    // alt + k  搜索
    if (e.altKey && keyNum == 75) {
        window.input.focus();
        return;
    }

    // audio.js
    if (keyNum == 190) {//.>
        nextSong();
        return;
    }
    if (keyNum == 191) {//?/
        setTimeout(() => {
            musicContainer.classList.contains('play') ? pauseSong() : playSong();
        }, 50);
        return;
    }
    if (keyNum == 188) {//,<
        prevSong();
        return;
    }

    // 搜索条目soSouItem
    let list_a = document.getElementById('soSuoItem').querySelectorAll('a');// 获取到列表下的a标签
    let input = document.getElementById('input');

    function js() {
        for (let index = 0; index < list_a.length; index++) {
            if (list_a[index] == document.activeElement) {
                return index;
            }
        }
    }

    if (keyNum == 38) {
        // alert('您按下了up');
        if (list_a.length == 0) {
            tanChuang('列表为空，请输入正确的内容');
            return;
        } else {
            js()
            if (js() == undefined) {
                list_a[0].focus();
                input.value = list_a[0].innerText;
                return;
            } else {
                if (list_a[js() - 1] == undefined) {
                    list_a[(document.getElementById('soSuoItem').childNodes.length) - 1].focus();
                    input.value = list_a[(document.getElementById('soSuoItem').childNodes.length) - 1].innerText;
                    return;
                } else {
                    list_a[js() - 1].focus();
                    input.value = list_a[js()].innerText;
                    return;
                }
            }
        }
    }

    if (keyNum == 40) {
        // alert('您按下了down');
        if (list_a.length == 0) {
            tanChuang('列表为空，请输入正确的内容');
            return;
        } else {
            js()
            console.log(js());
            if (js() == undefined) {
                list_a[0].focus();
                input.value = list_a[0].innerText;
                return;
            } else {
                if (list_a[js() + 1] == undefined) {
                    list_a[0].focus();
                    input.value = list_a[0].innerText;
                    return;
                } else {
                    list_a[js() + 1].focus();
                    input.value = list_a[js()].innerText;
                    return;
                }
            }
        }
    }
}