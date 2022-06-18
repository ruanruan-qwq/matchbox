

// 声明一个数组，里面包含 3 5 7
var arr = [3,5,7];
// 声明一个玩家，数量为1
var player = 1;

// 使用while循环 
// while 循环会在指定条件为真时循环执行代码块。
while (true) {
            //  parseInt(string, radix) 函数可解析一个字符串，并返回一个整数。
            // string	必需。要被解析的字符串。
            // radix	可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
                    // Window.prompt()将显示一个对话框，其中包含一条可选消息，提示用户输入一些文本。
    var n = parseInt(prompt("请输入"+player+"号玩家拿牙签的数目(1-"+arr[0]+")",""), 10);
    if (n<1 || n>arr[0]) {
        alert("牙签的数目错误，请重新输入！");
        // continue 跳过本次循环，进入下一次迭代
        continue;
    }

    arr[0] -= n;
    if (arr[0]==0)

    // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
    // array.shift()
        arr.shift();

    alert("剩余牙签的数目："+arr);
    if (arr.length>0) {
        player = player==1?2:1;
    } else {
        break;
    }
}
alert(player+"号玩家输了！");
