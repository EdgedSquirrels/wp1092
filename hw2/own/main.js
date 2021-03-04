

var img_src = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy4LT4MLnDDAVSa6B1YNoeyh-UEDYByNIIw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMALJ2DN_lP-cwIBDC6subRtdfeSIDp63pDg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1uZTBlxjOfVEiZsIt9FSo_bkxgEb6_OslQ&usqp=CAU",
    "https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2020/01/31/20200131-052418_U17017_M588719_cd2e.jpg?itok=s0SyFjTD",
];
var img_now = 0;
var element = document.getElementById("display");
element=document.getElementById("display")
element.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy4LT4MLnDDAVSa6B1YNoeyh-UEDYByNIIw&usqp=CAU";
element.alt = "image not found";
element.style = 'background: url("images/loading.gif") center no-repeat'

var source = document.getElementById("source");
source.href = img_src[0];
source.firstChild.innerText = img_src[0];

var next_button = document.getElementById("next");
next_button.addEventListener("click",nxt);

var pre_button = document.getElementById("previous");
pre_button.addEventListener("click",pre);
pre_button.className="disabled";

function nxt(){
    if(img_src.length-1 > img_now){
        img_now++;
        element.src=img_src[img_now];
        pre_button.className = "display";
        element.setAttribute("src",source.href = img_src[img_now]);
        source.href = img_src[img_now];
        source.innerText = img_src[img_now];
        if(img_now==img_src.length-1) next_button.className="disabled";
    }
}
function pre(){
    if(0 < img_now){
        img_now--;
        element.src = img_src[img_now];
        next_button.className="display";
        element.setAttribute("src",source.href = img_src[img_now]);
        source.href = img_src[img_now];
        source.innerText = img_src[img_now];
        if(img_now==0) pre_button.className="disabled";
    }
}