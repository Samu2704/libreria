document.addEventListener("DOMContentLoaded", async () => {
console.log("carica pagina")
const params= new URLSearchParams(location.search)
console.log(params)
let asin= params.get("asin")
console.log(asin)
fetch("https://striveschool-api.herokuapp.com/books/" + asin)
.then(Response =>{
    return Response.json()
})
.then(data =>{
console.log(data)
let contenitore="<div 'cards container row col-lg-3 col-sm-6 me-5'"
contenitore+= "<div><img src='"+data.img+"'/></div>"
contenitore+= "<div class='titolo'>" +data.title+ "</div>"
contenitore+= "<div  class='titolo'>" +data.price+ "</div>"
contenitore+= "</div>"

document.getElementById("schedaLibro").innerHTML+=contenitore
})
})
 