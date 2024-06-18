let youShi = false;
let anNiu = document.getElementById('anNiu');
let content = document.getElementById('content');
function change() {
    if (youShi) {
        youShi = false;
        anNiu.innerText = '√';
        content.style.borderBlockColor - '#fff';
        // content.value = '';
        content.readOnly = false;
        content.focus();
        // 删除时删一下原来的事
        window.localStorage.removeItem('shi');
    } else {
        youShi = true;
        anNiu.innerText = '×';
        content.style.borderBlockColor = 'transparent';
        content.readOnly = true;
        // 每次保存时设置一下保存值
        window.localStorage.setItem('shi', content.value);
    }
}

// 每次打开查询是否有记录
let data = window.localStorage.getItem('shi');
if (data) {
    content.value = data;
    change();
}