window.onload = function () {
    //找人
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    //alert("引用成功");

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //鼠标进过wrap 让箭头 显示出来
    wrap.onmouseover = function () {
        //让箭头 渐渐地 显示出来
        animate(arrow, {"opacity": 1});//让箭头显示 是把透明度 从0变为1
    }
    //鼠标离开wrap 让箭头 隐藏
    wrap.onmouseout = function () {
        //让箭头 渐渐地 隐藏
        animate(arrow, {"opacity": 0});//让箭头隐藏 就是把透明度 从1变为0
    }

    //让每一个li 渐渐地 各就各位
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            //lis[i]//每一个li
            animate(lis[i], config[i]);
        }
    }

    assign();

    //点击右箭头 让li旋转 实际上是对配置单进行操作 然后再根据新的配置单去让li各就各位

    //arr.push(arr.shift());
    arrRight.onclick = function () {
        config.push(config.shift());//把配置单的第一项放到最后
        assign();
    }

    //点击左箭头 让li旋转 实际上是对配置单进行操作 然后再根据新的配置单去让li各就各位
    //arr.unshift(arr.pop());
    arrLeft.onclick = function () {
        config.unshift(config.pop());
        assign();
    }

}