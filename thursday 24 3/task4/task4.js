
    let person1 = {
    name: "Jeremy",
    age: 24,
    };
  
    let person2 = {
    name: "Chase",
    age: 15,
    };
  
  function older(person) {
  
    if (person.age >= 16) {
  return person.name + " is older ";
    }
  
    else {
  return person.name + " is not older ";
    }
  }
  
  console.log(older(person1));

  console.log(older(person2));