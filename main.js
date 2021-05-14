menu_list_Array = [Chicken Tandoori pizza, Veg Supreme Pizza, Chesse Burst,Paneer Tikka Pizza, Deleuxe Veg Pixxa, Mix Veg Pizza]
function getmenu () {  
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_Array .sort ();
    for(var 1=0 i<menu_list_Array.lenght;i++>
        htmldata=htmldata+ '<li>' menu_list_Array [i] + '</li>'
    }
        htmldata=htmldata+"</ol>"
        document.getElementById("display_menu").innerHTML = htmldata;

}
function additem() {
var htmldata
varitem=document.getElementById (additem).Value;
menu_list_Array.push(item);
menu_list_Array.sort();
for(var i=0;i<menu_list_Array.lenght;i++>){

    htmldata=htmldata+ '<div class="card">' + '<img src="images/pizzaImg.png"/>' + menu_list_Array[i]
}
htmldata=htmladata+"</section>"
document.getElementById("display_menu").innerHTML = htmldata;
}