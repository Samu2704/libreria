var tuttiLibri= []
fetch("https://striveschool-api.herokuapp.com/books")
 .then((response) =>{
//console.log(response)
response.json().then((data)=>{
//console.log(data)
tuttiLibri=data
data.forEach(element => {
    //console.log(element)
   let contenitoreDiv =""

   contenitoreDiv +="<div id='cart'class='cards container row col-lg-3 col-sm-6 me-5'>"
   contenitoreDiv +="<div><button onclick='aggiungiCarrello()' class= bottone'>Aggiungi Carrello</button></div>"
   contenitoreDiv +="<div><button onclick='elimina()' id=('cancel') class= 'delete'>elimina</button></div>"
   contenitoreDiv +="<div><a href='./dettagli.html?asin="+element.asin+"&price="+element.price+"'>more info</a></div>"
   contenitoreDiv +="<div class='titolo'>" +element.title+ "</div>"
   contenitoreDiv +="<div><img src='"+element.img+"'/></div>" 
   contenitoreDiv +="</div>"
   
   let libri= document.querySelector(".libri")
  libri.innerHTML += contenitoreDiv
  
})
})
 })
 

 /*let btn=querySelector(".bottone")
 let carrello=querySelector(".carrello")
 btn.forEach(singoloElement=>{
  singoloElement.addEventListner('onclick', aggiungiCarrello() {
  let titoloCard = document.querySelector('.titolo').innerText
  carrello.appendChild().titoloCard
  

  })
 })*/

 /*let btn = document.querySelector('.bottone');
 let cardTitle = document.querySelector('.titolo');
 let car = document.querySelector('.carrello');

 btn.addEventListener('click', aggiungiCarrello(){
     
     let titleText = cardTitle.textContent

     let newCartItem = document.createElement('p')
     newCartItem.textContent = titleText

     car.appendChild(newCartItem)
 })*/

 



function filtraLibri(){
  let libri= document.querySelector(".libri")
  libri.innerHTML=""
  }

  let valoreRicerca=document.getElementById("ricerca").value
  valoreRicerca=valoreRicerca.titoloUpperCase

  tuttiLibri.forEach(element =>{
   let titoloUpperCase=element.title.titoloUpperCase()
   let include=titoloUpperCase.includes(valoreRicerca)
   if(include===true){
    let contenitoreDiv =""

    contenitoreDiv="<div"
    contenitoreDiv +="<div>" +element.title+ "</div>"
    contenitoreDiv +="<div><img src='"+element.img+"'/></div>" 
    contenitoreDiv +="</div>"

   
   }
   
  })
  
 /*let btn= document.getElementById("cart")
let cart=document.getElementById("cancel")
btn.addEventListener("onclick", function())*/
