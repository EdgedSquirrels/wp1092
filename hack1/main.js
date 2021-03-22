// TODO:
comment_num = document.getElementById("comment-num");
var comment_count = 1;

cancel_button = document.getElementById("cancel-button");
comment_button = document.getElementById("comment-button");
comment_button_group = document.getElementById("comment-button-group");
comment_input = document.getElementById("comment-input");
function focused(){
    comment_button_group.style.display='flex';
}

function cancel(){
    comment_input.value='';
    comment_button_group.style.display='none';
}
function change(){
    if (isvalid(comment_input.value)){
        comment_button.style.background= '#065fd4';
    }
    else{
        comment_button.style.background= '#cccccc';
    }
}
function isvalid( str ){//判斷是否空字串 or 只有空白
    if ( str == "" ) return false;
    for(ch of str){
        if(ch != ' ') return true;
    }
    return false;
}
function submited(){
    if(!isvalid(comment_input.value)) return;
    let newDiv = document.createElement('div');
    newDiv.className = "comment"
    newDiv.innerHTML=
    '<img class="comment-img" src="images/user-icon.jpg"/>\n\
    <div class="comment-right">\n\
        <div>\n\
            <span class="comment-name">Toby Chen</span>\n\
            <span class="comment-time">現在</span\n>\
        </div>\n\
        <p class="comment-text">I am Toby Chen. This is a comment.</p>\n\
    </div>'
    let newText = newDiv.getElementsByTagName('p')[0];
    newText.innerText = comment_input.value;
    document.getElementById("comment-group").appendChild(newDiv);
    comment_input.value='';
    comment_button.style.background= '#cccccc';
    comment_count++;
    comment_num.innerHTML=`${comment_count}則留言`;
    //alert(`${comment_count}則留言`);
}
/*
<div id="comment-group">
    <div class="comment">
        <img class="comment-img" src="images/user-icon.jpg"/>
        <div class="comment-right">
            <div>
                <span class="comment-name">Toby Chen</span>
                <span class="comment-time">現在</span>
            </div>
            <p class="comment-text">I am Toby Chen. This is a comment.</p>
        </div>
    </div>
<div>
*/


comment_input.addEventListener('click',focused);
comment_button.addEventListener('click',submited);
cancel_button.addEventListener('click',cancel);
comment_input.addEventListener('input',change);




