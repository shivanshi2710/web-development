console.log("callback function");

function fun1( text,callback) {
console.log('this  is main function');
callback();
}

const CB = ()=>{
    console.log("callback function 23hjnkhbnrerdb");
}

fun1('hello',()=>{
    console.log("callback function");
})

fun1('hello', CB);