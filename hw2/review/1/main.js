var urls = ["https://truth.bahamut.com.tw/s01/201810/790a9031ec36a98af10b58ef26c5cf72.JPG",
			"https://i.imgur.com/aR2F9Zo.jpg",
			"https://i.imgur.com/6vZduIj.jpg",
			"https://i.imgur.com/zaVupFI.jpg",
			"https://i.imgur.com/rufBggg.jpg",
			"https://i.imgur.com/lDW0IwB.jpg",
			"https://i.imgur.com/b3DZQij.jpg",
			"https://i.imgur.com/MNxo5QB.jpg",
			"https://i.imgur.com/5wzwqBb.jpg",
			"https://i.imgur.com/tgbU3Im.jpg",
			"https://i.imgur.com/Hwp48Sh.jpg",
			"https://i.imgur.com/UwaTAY6.jpg",
			"https://i.imgur.com/Ak8O4cy.jpg",
			"https://i.imgur.com/pUEKVFx.jpg",
			"https://i.imgur.com/vRMYLL7.jpg",
			"https://i.kym-cdn.com/photos/images/original/001/107/354/b2d.png",
			"https://i.imgur.com/O0hCYL5.jpg",
			"https://i.imgur.com/SMFduGe.jpg",
			"https://i.imgur.com/IjMkJpI.jpg",
			"https://i.imgur.com/ROna5Q2.jpg",
			"https://i.imgur.com/dPsSbru.jpg",
			"https://i.imgur.com/AX6kEO5.jpg",
			"https://i.imgur.com/LkoeC0u.jpg",
			"https://i.imgur.com/WZMiDep.jpg",
			"https://i.imgur.com/XLepJXV.jpg",
			"https://i.imgur.com/C3HOOUx.jpg",
			"https://i.imgur.com/a1b2PTn.jpg",
			"https://i.imgur.com/vrAy6F4.jpg",
			"https://i.imgur.com/OX91b2H.jpg",
			"https://i.imgur.com/W1Gvv6j.jpg",
			"https://i.imgur.com/6Lzz0pS.jpg"]
var index = 0;
var display = document.getElementById("display");
var source = document.getElementById("source");
var backButt = document.getElementById("back");
var nextButt = document.getElementById("next");
updateImg();
checkButt();
function clickBack() {
	if(index > 0){
		index--;
		updateImg();
		checkButt();
	}
}
function clickNext() {
	if(index < urls.length - 1){
		index++;
		updateImg();
		checkButt();
	}
}
window.addEventListener('keydown', function(e){  
	var keyID = e.code;
	if(keyID === 'ArrowLeft'){
		clickBack();
	}
	if(keyID === 'ArrowRight'){
		clickNext();
	}
}, false);

function updateImg(){
	document.getElementsByClassName("image-viewer__display")[0].style.background = "url('images/c8763.gif') center no-repeat";
	display.style.opacity = 0;
	display.src = urls[index];
	source.href = urls[index];
	source.textContent = urls[index];
	if(display.complete){
		document.getElementsByClassName("image-viewer__display")[0].style.backgroundImage = "";
		display.style.opacity = 1;
	}else{
		display.onload = function(){
			document.getElementsByClassName("image-viewer__display")[0].style.backgroundImage = "";
			display.style.opacity = 1;
		};
	}
	document.getElementById("show-now").textContent = (index + 1) + " / " + urls.length
}
function checkButt(){
	if(index == 0){
		backButt.classList.add("disabled");
	}else{
		backButt.classList.remove("disabled");
	}
	if(index == urls.length - 1){
		nextButt.classList.add("disabled");
	}else{
		nextButt.classList.remove("disabled");
	}
}

var page = document.getElementById("page");
page.min = 1;
page.max = urls.length;
function jumpTo(e){
	if(e.code === 'Enter'){
		if(page.value != parseInt(page.value)){
			alert("Please enter an integer.");
		}else if(parseInt(page.value) < parseInt(page.min) | parseInt(page.value) > parseInt(page.max)){
			alert("Please enter a number between " + page.min + " and " + page.max + ".");
		}else{
			index = page.value - 1;
			updateImg();
			checkButt();
		}
	}
}