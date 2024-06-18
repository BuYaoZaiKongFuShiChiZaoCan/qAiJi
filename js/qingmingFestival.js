// 获取时间
let date = new Date();
let year = date.getFullYear();//获取完整的年份(4位,1970-????)
let yue = date.getMonth();//获取当前月份(0-11,0代表1月)
let ri = date.getDate();//获取当前日(1-31)

// 清明节的日期是不固定的，规律是：闰年开始的前2年是4月4日，闰年开始的第3年和第4年是4月5日
function getQinMingJieDate(year) {
    if (isLeapYear(year) || isLeapYear(year - 1)) {
        return '0404';
    } else {
        return '0405';
    }
}
ri = 5
// 判断是否是闰年
function isLeapYear(Year) {
    if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
        return (true);
    } else { return (false); }
}
// 判断4月4号或5号
if (yue == 4 & (ri == 4 || ri == 5)) {
    if (getQinMingJieDate(year) == '0404') {
        if (ri == 4) {
            document.getElementsByTagName('html')[0].style.filter = "grayscale(1)"
        }
    } else {

    }
}