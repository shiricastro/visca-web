var mainContainer = document.querySelector('.main_container');
function menuEvent(){
    var header = document.querySelector('.header');
    header.classList.toggle('open');
}
function changeView(){      
    mainContainer.classList.add('pass');    
    setTimeout(function(){mainContainer.classList.toggle('type_cube'); mainContainer.classList.remove('pass');},300);  
}

var flag=true;
var list = document.querySelector('.list_container');
var items = list.childNodes;
var itemsArr = [];
for (var i in items) {
    if (items[i].nodeType == 1) { 
        itemsArr.push(items[i]);
    }
}
const originArr = [...itemsArr];
function sortView(){
    if(flag){
        itemsArr.sort(function(a, b) {
            return a.getAttribute('data-name') == b.getAttribute('data-name')
                    ? 0
                    : (a.getAttribute('data-name') > b.getAttribute('data-name') ? 1 : -1);
          });  
        flag = false;      
    }
    var finialArr = mainContainer.classList.contains('type_sort') ? originArr : itemsArr;
    for (i = 0; i < finialArr.length; ++i) {
      list.appendChild(finialArr[i]);
    }  
    mainContainer.classList.toggle('type_sort'); 
}