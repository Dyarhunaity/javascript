
let people = [
    {
      name: 'Anna',
      age: 22
    },
    {
      name: 'Tom',
      age: 34
    }, {
      name: 'John',
      age: 12
    },
  ]
  
  let getAverage = arr => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length;
  }
  
  let ages = people.map(person => person.age);
  
  console.log(getAverage(ages));