'use strict';
let locform = document.getElementById("mobForm");
let pargloc =  document.getElementById("cityResult")




function getvalue(loccation)
{
     this.loccation = loccation;
     
     outputlocation(loccation);

}

async function outputlocation(x)
{
    let respone = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.146180d54ef1b81b7922cf956cba402d&q=${x}&format=json`)
    let data = await respone.json()
   
   
   let createname = document.createElement("span");
   pargloc.appendChild(createname)
   createname.innerHTML= `Location Name: ${data[0].display_name} <br>
   lot: ${data[0].lat}
   lon: ${data[0].lon}
   <br>`
   let imgsrc = data[0].icon
   console.log(imgsrc);
   document.getElementById("imgg").src = `${imgsrc}`
    
    console.log(data);


}

locform.addEventListener("submit" , getfromform ) 
function getfromform(event) 
{
    event.preventDefault();

    let loccation = event.target.locName.value ; 
    console.log(loccation);
    new getvalue(loccation)



}
// getfromform();






let foorm = document.getElementById("mobForm");
let tablebody = document.getElementById("bodyTa");
let salesarr = [];




function storeinlocalstorage()
{
    let strng = JSON.stringify(salesarr[salesarr.length-1])
    localStorage.setItem( salesarr[salesarr.length-1].name ,strng )
}

function fromlocalstoarge ()
{
    let keyy = salesarr[salesarr.length-1].name ;
    let localstoargeitem = localStorage.getItem(keyy);
    /// i have to check if toobject is emepty and if false enter the data into the array
    let toobject = JSON.parse(localstoargeitem);
    if(toobject !== null)
    {
        salesarr = toobject;
    }
  

    // 
    return toobject;
}



function isitnew(x)
{
    if (x>=100)
    return "new";
    else
    return "used";
}

function salesconstr(name , ptype ,price, isnew)
{
    this.name = name ; 
    this.ptype = ptype;
    this.price = price ;
    this.isnew = isnew;
    salesarr.push(this);
    storeinlocalstorage()
    showdataontble()
    // console.log(salesarr);
}

foorm.addEventListener("submit", getdatafrominput)
function getdatafrominput(event)
{
    event.preventDefault();
    
 let name = event.target.useName.value; 
 let ptype = event.target.typeNameD.value;
 let price = Math.ceil(Math.random() * (200 - 50) + 50);
    let isnew = isitnew(price);
 
 new salesconstr(name,ptype,price,isnew)


//  console.log(name );
//  console.log(ptype);
//  console.log(price);
//  console.log(isnew);

 
}
getdatafrominput();


function showdataontble()
{
    let  getfromlocalstoarge = fromlocalstoarge();
    console.log(getfromlocalstoarge);


    let tablerow = document.createElement("tr");
    tablebody.appendChild(tablerow);

    let tabledt1 = document.createElement("td");
    tabledt1.innerText = getfromlocalstoarge.name;
    console.log(tabledt1);
    let tabledt2 = document.createElement("td");
    tabledt2.innerText = getfromlocalstoarge.ptype;
    
    let tabledt3 = document.createElement("td");
    tabledt3.innerText = getfromlocalstoarge.price;
   
    let tabledt4 = document.createElement("td");
    tabledt4.innerText = getfromlocalstoarge.isnew;
    tablerow.append(tabledt1,tabledt2,tabledt3,tabledt4)
    
    
    
}