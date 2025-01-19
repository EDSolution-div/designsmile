let menu = document.getElementById("bar");
let item = document.getElementById("item");

item.style.top = '-35em';
menu.onclick = function () {
    /* body... */
    if (item.style.top == '-35em'){
        item.style.top = '0';
    }
    else {
        item.style.top = '-35em';
    }
}