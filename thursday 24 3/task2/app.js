 
let persons=[
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];






  function firstName(p){
    let x=[];
    for(let i=0; i< p.length; ++i){
         x[i]=p[i].name.first;
    }
    return x;
};

console.log(firstName(persons));
