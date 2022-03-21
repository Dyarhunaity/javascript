
let x= prompt(`number 1`);
let y= prompt(`number 2`);
let z= prompt(`number 3`);

let x_num=number(x);
let y_num=number(y);
let z_num=number(z);

if((x_num%3==0) || (y_num%3==0) || (z_num%3==0)){
    console.log(`fizz`);
}else{
    console.log(`nothing to print 3`);
}

if( (x_num%5==0) || (y_num%5==0) || (z_num%5==0)){
    console.log(`buz`);
}else{
    console.log(`nothing to print 5`);
}

if(((x_num%3==0)&&(x_num%5==0)) || ((y_num%3==0) && (y_num%5==0)) || ((z_num%3==0) && (z_num%5==0))){
    console.log(`fizz buzz`);
}else{
    console.log(`nothing to print 5 or 3`);
}
