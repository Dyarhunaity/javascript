'use strict';


async function getData(){
  let responce= await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.21eaaf2d36cc8dc7ef40e5787630ef14&q=aqaba&format=json')
  console.log(typeof responce);
  let data=await responce.json()
  console.log(data);

let Dd=data.map(function(v,index) {
    
    return ` <li><h4>latitude</h4> ${v.lat}</li>
     <li><h4>Longitude</h4> ${v.lon}</li>
     <li><h4>display_name</h4> ${v.display_name} </li>  `
    
});

  console.log(Dd);
  
 let g= document.getElementById("ba");
let c= document.createElement("li");
g.appendChild(c).innerHTML=Dd

//   document.write(Dd);
}
getData()

console.log("get data out side the function");
