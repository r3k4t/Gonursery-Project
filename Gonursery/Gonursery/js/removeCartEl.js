// Coded By Rahat Khan Tusar
// To Remove Cart Element

let removebtn=document.getElementsByClassName('shoping__cart__item__close');
for(i=0;i<removebtn.length;i++){
    removebtn[i].addEventListener('click', removebtns)

}
function removebtns(removeCartElement){
    let e = event.target;
    let parents = e.parentElement.parentElement.remove()
    // console.log(parents)
}


