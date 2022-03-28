let opreation=prompt(`please enter one of the following operation: +, -, *, /`);
let first_num_string= prompt(`please enter the first number`);
let second_num_string= prompt(`please enter the first number`);


let first_num_number= Number(first_num_string);
let second_num_number= Number(first_num_string);

switch (opreation) {
    case "+":{
        let result=first_num_number + second_num_number;
        console.log(result);
        alert(result);
        document.getElementById(`result`).innerHTML=String(result);
        break;
    }
    case "-":{
        let result=first_num_number - second_num_number;
        console.log(result);
        alert(result);
        document.getElementById(`result`).innerHTML=String(result);
        
    }
    case "*":{
        let result=first_num_number * second_num_number;
        console.log(result);
        alert(result);
        document.getElementById(`result`).innerHTML=String(result);
    }
    case "/":{
        let result=first_num_number / second_num_number;
        console.log(result);
        alert(result);
        document.getElementById(`result`).innerHTML=String(result);
    }
    default:
        break;
}