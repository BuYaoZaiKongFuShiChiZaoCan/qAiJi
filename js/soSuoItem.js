var txt = document.getElementById("input");
var oUl = document.getElementById("soSuoItem");
let clear = document.getElementById("clear");

txt.onkeyup = function () {
    var val = txt.value;
    if (val == '') {
        // 输入框为空时不发生请求
    } else {
        clear.style.opacity = "1";
        var oScript = document.createElement("script");//动态创建script标签
        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=callback";
        //添加链接及回调函数
        document.body.appendChild(oScript);//添加script标签
        document.body.removeChild(oScript);//删除script标签
    }
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
    if (txt.value == '') {
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
function tanChuang(content) {
    document.body.insertAdjacentHTML('beforeend', '<div id="tanChuang" style="padding: 10px; background: #00bfff; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 99; border-radius: 10px;">' + content + '</div>');
    setTimeout(() => {
        let tc = document.getElementById('tanChuang');
        tc.remove();
    }, 2000);
}