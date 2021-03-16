// https://4.bp.blogspot.com/-N5_3lsYkKDg/V3Ucr11M3DI/AAAAAAAAXkM/ux_NlZPdyLUgiXPsJX_4unedW5qgPgrYACLcB/s1600/taeyeon_why%2B%25284%2529.jpg
var photos = ['https://soshi.manuth.life/data/soshi/pictures/taeyeon/solo/why-ep/ty-pc11_28396453063_o.jpg',
                'https://4.bp.blogspot.com/-N5_3lsYkKDg/V3Ucr11M3DI/AAAAAAAAXkM/ux_NlZPdyLUgiXPsJX_4unedW5qgPgrYACLcB/s1600/taeyeon_why%2B%25284%2529.jpg.jpg',
                'https://0.soompi.io/wp-content/uploads/2016/06/20195415/Taeyeon-2.jpg',
                'https://soshi.manuth.life/data/soshi/pictures/taeyeon/solo/why-ep/Ay643ou.jpg',
                'https://soshi.manuth.life/data/soshi/pictures/taeyeon/solo/why-ep/ty-pc6_28937404031_o.jpg'];
var count = 0; //記錄圖片張數
var flag; //返回動畫id
var timer;

function showPic()
{
    document.getElementById("display").src = photos[count];
    document.getElementById("source").href = photos[count];
    document.getElementById("source").textContent = photos[count];
    if (count == 1)
        document.getElementById("previous").classList.remove("disabled");
    if (count == photos.length - 2)
        document.getElementById("next").classList.remove("disabled");    
}
function callback() //實現圖片切換
{ 
    document.getElementById("display").src = photos[count];
    count++;
    if (count == photos.length)
        count = 0; 
} 
function change() //動畫開啟
{
    flag = setInterval(callback,5000); 
}
function off() //onmouseover事件發生，動畫暫停
{
    clearInterval(flag);
}
function on() //onmouseout事件發生，動畫繼續
{
    flag = setInterval(callback,5000); 
}
function leftMove() //實現左滑動
{
    if (count < photos.length - 1)
        count++;
        document.getElementById("display").src = "./images/loading.gif";
        timer = setTimeout(showPic, 50);
    if (count == photos.length - 1)
        document.getElementById("next").className = "disabled";
}
function rightMove() //實現右滑動
{
    if (count > 0)
        count --;
        document.getElementById("display").src = "./images/loading.gif";
        timer = setTimeout(showPic, 50);
    if (count <= 0)
        document.getElementById("previous").className = "disabled";
}