var txt = document.getElementById("input");
var oUl = document.getElementById("soSuoItem");
let clear = document.getElementById("clear");

let isCompstition = false;

txt.addEventListener("input", function () {// onkeyup
    if (!/\S/g.test(txt.value)) {
        // 输入框为空时不发生请求
    } else {
        if (isCompstition) {
            return;
        }
        search(txt.value);
    }
})

txt.addEventListener('compositionstart', () => {
    console.log('中文输入开始');
    isCompstition = true;
})

txt.addEventListener('compositionend', () => {
    console.log('中文输入结束');
    isCompstition = false;
    search(txt.value);
})

function search(searchStr) {
    clear.style.opacity = "1";
    var oScript = document.createElement("script");//动态创建script标签
    oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + searchStr + "&cb=callback";
    //添加链接及回调函数
    document.body.appendChild(oScript);//添加script标签
    document.body.removeChild(oScript);//删除script标签
}

// 回调函数
function callback(data) {
    // 清空一下原列表
    oUl.innerHTML = null
    // if一下返回内容为空
    console.log(data);
    if (data.s.length == 0) {
        var oLi = document.createElement("li");
        oLi.innerHTML = "[该内容暂无提示词]";
        oUl.appendChild(oLi);
    } else {
        data.s.forEach(function (value) {
            var oLi = document.createElement("li");
            oLi.innerHTML = "<a href=\"https://www.bing.com/search?q=" + value + "\">" + value + "</a>";
            oUl.appendChild(oLi);
        })
    }
    oUl.style.display = "block";
}

// 初始化clear默认为看不见
clear.style.opacity = "0";

// 键盘按下立即判断
document.onkeyup = function () {
    if (!/\S/g.test(txt.value)) {
        oUl.style.display = "none";
        clear.style.opacity = "0";
    }
}

// 清除搜索框
function clearInput() {
    txt.value = '';
    oUl.style.display = "none";
    clear.style.opacity = "0";
}

// 对整个页面文档监听
document.onkeydown = function (e) {

}

// 弹窗
function tanChuang(content, time = 2000) {
    let div = document.createElement("div");
    div.id = "tanChuang";
    div.textContent = content;
    // 添加到页面
    document.body.appendChild(div);
    setTimeout(() => {
        let tc = document.getElementById('tanChuang');
        tc.remove();
    }, time);
}