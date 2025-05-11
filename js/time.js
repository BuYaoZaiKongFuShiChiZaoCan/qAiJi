let s = document.getElementById("second");//获取到时分秒的三个指针，后面用来动态让它们旋转起来。
let m = document.getElementById("min");
let h = document.getElementById("hour");

function setDate() {
    // 获取当前日期
    let date = new Date();
    let zifu = date.getDay();//星期,0~6,0是星期天
    let nian = date.getFullYear();//获取完整的年份(4位,1970-????)
    let yue = date.getMonth() + 1;//获取当前月份(0-11,0代表1月)，所以使用时要+1
    let ri = date.getDate();//获取当前日(1-31)

    // 最终星期
    switch (zifu) {
        case 0:
            zifu = "星期日";
            break;
        case 1:
            zifu = "星期一";
            break;
        case 2:
            zifu = "星期二";
            break;
        case 3:
            zifu = "星期三";
            break;
        case 4:
            zifu = "星期四";
            break;
        case 5:
            zifu = "星期五";
            break;
        case 6:
            zifu = "星期六";
    }

    // 设置数字时间
    const wzdayText = nian + '/' + yue.toString().padStart(2, '0') + '/' + ri.toString().padStart(2, '0') + ' ' + zifu;

    window.wzday.textContent = wzdayText;
}
setDate();

function time() {
    if (window.innerWidth < 1001) {
        time = () => {
            // 获取当前时间
            let date = new Date();
            let snum = date.getSeconds();//获取现在是多少秒。
            let mnum = date.getMinutes() + snum / 60;//获取现在是多少分，不能忘记加上 秒数/60。
            let hnum = date.getHours() + mnum / 60; //获取现在是多少时，不能忘记加上 分钟数/60。

            // 设置数字时间
            const shiText = parseInt(hnum).toString().padStart(2, '0');// .toString().padStart(2,'0')，不足两位向前补齐
            const fenText = parseInt(mnum).toString().padStart(2, '0');
            const miaoText = parseInt(snum).toString().padStart(2, '0');

            window.shi.textContent = shiText;
            window.fen.textContent = fenText;
            window.miao.textContent = miaoText;
        }
    } else {
        time = () => {
            // 获取当前时间
            let date = new Date();
            let snum = date.getSeconds();//获取现在是多少秒。
            let mnum = date.getMinutes() + snum / 60;//获取现在是多少分，不能忘记加上 秒数/60。
            let hnum = date.getHours() + mnum / 60; //获取现在是多少时，不能忘记加上 分钟数/60。

            // 设置数字时间
            const shiText = parseInt(hnum).toString().padStart(2, '0');// .toString().padStart(2,'0')，不足两位向前补齐
            const fenText = parseInt(mnum).toString().padStart(2, '0');
            const miaoText = parseInt(snum).toString().padStart(2, '0');

            window.shi.textContent = shiText;
            window.fen.textContent = fenText;
            window.miao.textContent = miaoText;

            // 设置指针旋转
            s.style.transform = `rotate(${snum * 6}deg)`;//设置的trasnform就可以让它们旋转起来，秒针时一秒旋转6度。
            m.style.transform = `rotate(${mnum * 6}deg)`//分针也是一分钟旋转6度。
            h.style.transform = `rotate(${hnum * 30}deg)`//这里时小时，一小时旋转30度，所以*30.
        }
    }
    setInterval(time, 1000)//用计时器每100ms运行这个time函数。
}
time();