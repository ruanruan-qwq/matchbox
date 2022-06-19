

var row = [1,2,3];
var arr = [3,5,7];
var player = 1;

while (true) {

    // 获取用户输入的行数
    var i = parseInt(prompt("请输入" + player + "号玩家要选择的行数("+row+")"));

    if (row[0]==i) {
        var n = parseInt(prompt("请输入" + player + "号玩家要取走的数量(1-"+arr[0]+")"));
        if (n<1 || n>arr[0]) {
            alert("牙签的数目错误，请重新输入！");
            continue;
        }

        arr[0] -= n;

        if (arr[0]==0){
            arr.splice(0,1)
            row.splice(0,1)
        }
        
        alert("剩余牙签的数目："+arr);
        if (arr.length>0) {
            player = player==1?2:1;
        } else {
            break;
        };
    };

    if(row[1]==i) {
        var n = parseInt(prompt("请输入" + player + "号玩家要取走的数量(1-"+arr[1]+")"));
        if (n<1 || n>arr[1]) {
            alert("牙签的数目错误，请重新输入！");
            continue;
        }

        arr[1] -= n;
        if (arr[1]==0){
            arr.splice(1,1)
            row.splice(1,1)
        }
        
        alert("剩余牙签的数目："+arr);
        if (arr.length>0) {
            player = player==1?2:1;
        } else {
            break;
        };
    };

    if(row[2]==i) {
        var n = parseInt(prompt("请输入" + player + "号玩家要取走的数量(1-"+arr[2]+")"));
        if (n<1 || n>arr[2]) {
            alert("牙签的数目错误，请重新输入！");
            continue;
        }

        arr[2] -= n;
        if (arr[2]==0){
            arr.splice(2,1)
            row.splice(2,1)
        }
        
        alert("剩余牙签的数目："+arr);
        if (arr.length>0) {
            player = player==1?2:1;
        } else {
            break;
        };
    };
}
alert(player+"号玩家输了！");

