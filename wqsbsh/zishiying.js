var body = document.querySelector("html");
var body1 = document.querySelector("body");
body.style.margin = "0";
body.style.padding = "0";
var wyw = body.clientWidth; //网页的宽度
var wyh = body.clientHeight; //网页单屏高度
//选中
function $(ec) {
    return document.querySelector(ec);
}

function all(ec) {
    return document.querySelectorAll(ec);
}
//链式动画
function lian(name, go, m, s, time) {
    setTimeout(function () {
        var xs = m
        var shi = s + "s"
        var c = geo(go)
        var l = c + ":" + xs
        name.style.transition = shi
        name.style.cssText = name.style.cssText + ";" + l
    }, time)
}

function geo(go) {
    return go
}

function wh(name) {
    var w = name.offsetWidth
    name.style.height = w + "px"
}
var s1 = 0;
window.onmousewheel = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
            fanye1()
        }
        if (e.wheelDelta < 0) {
            fanye2()
        }
    }
}
var x, y

function getMousePos(evt) {
    var touch = evt.touches[0]; //获取第一个触点
    x = Number(touch.pageX); //页面触点X坐标
    y = Number(touch.pageY); //页面触点Y坐标   
}
//获取 鼠标/手 位置
body1.addEventListener('touchstart', function (e) {
    //touchstart:触摸开始的一瞬间
    getMousePos(e)
    lt = x
    lb = y
   

});
body1.addEventListener('touchmove', function (e) {
    //touchmove:触摸进行时
    getMousePos(e)
});
body1.addEventListener('touchend', function (e) {
    //touchend:触摸结束的一瞬间
    if (lt < x) {
        fanye1()
    }
    else if(lt > x){
        fanye2()
    }
});




//、下翻页
function et() {
    var top = body1.style.marginTop
    body1.style.marginTop = -s1 * wyh + "px"
}
function ys(a,b){
     s1 = s1 == -1 ? a : s1;
     s1 = s1 == b ? 0 : s1;
}