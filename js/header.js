// 在窗口小于700px时header的js
var Hbutton = document.getElementById("spsjhb");
var zbbq = document.getElementById('spsjhy').style;

// 小屏幕时头部导航条
var display = 0;
function headers() {
    if (display == 0) {
        Hbutton.innerHTML = '<span id="hspanone"></span><span id="hspantwo"></span>';
        document.getElementById('main').style.display = 'none';
        document.getElementById('hspanone').style.transform = 'rotateZ(-45deg) translateX(-6px)';
        document.getElementById('hspantwo').style.transform = 'rotateZ(45deg) translateX(-6px)';
        zbbq.transform = "translateX(-800px) matrix3d(3, -1, 30, 0, 0, 1, 10, 0, 1, 0, 10, 0, 0, 0, 0, 3)";
        zbbq.display = "flex";
        setTimeout(() => {
            zbbq.display = "flex";
            zbbq.transform = "translateX(0px)";
        }, 500);
        display = 1;
    } else {
        document.getElementById('main').style.display = 'block';
        zbbq.transform = "translateX(520px) matrix3d(1, 20, 0, -1, -1, 2, 5, 0, 0, 0, 1, 0, 0, 0, 0, 2)";
        setTimeout(() => {
            Hbutton.innerHTML = '<span></span><span></span><span></span>';
            zbbq.display = "none";
            zbbq.transform = "translateX(-1000px)";
        }, 500)
        display = 0;
    }
}

// 点击头像后
function toXiang() {
    let qqh = document.getElementById('input').value;
    if (qqh == '' || qqh == null) {
        tanChuang('请先输入内容');
    } else {
        let url = 'http://q1.qlogo.cn/g?b=qq&nk=' + qqh + '&s=640';
        let toXiangSrc = document.getElementById('toXiang');
        toXiangSrc.src = url;
        window.localStorage.setItem('qqh', qqh);
    }
}
// 进入后加载
let qqh = +window.localStorage.getItem('qqh');
if (qqh) {
    document.getElementById('toXiang').src = 'http://q1.qlogo.cn/g?b=qq&nk=' + qqh + '&s=640';
}