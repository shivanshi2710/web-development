console.log('promise file');

const pr = new Promise((resolve, reject) =>{
    let x=50;
    if(x===50)
        resolve('x is 50');
    else
    reject('x is not 50');

})
// pr.then((res) =>{
//     console.log('promise resolved',res);
// }).catch((err)=>{
//     console.log('promise rejected',err);
// })
const pr2 = new Promise((resolve, reject) =>{
    let x=70;
    if(x===70)
        resolve('x is 70');
    else
    reject('x is not 70');

})
// const pr3 = Promise.all([pr,pr2])
// pr3.then((res) =>{
//    console.log('promise resolved',res);
// }).catch((error) =>{
//     console.log('promise rejected',error);
// })

const pr4 = new Promise((resolve, reject) =>{  
     let x = 10;
    setTimeout(() =>{
        if(x===10)
            resolve('x is 10');
        else
            reject('x is not 10');
    },5000)
})
pr4.then((msg)=>{
    console.log('promise resolved',msg);
}).catch((error)=>{
    console.log('promise rejected',error);
})

// promise is for handling asynchronous opertaions
// promise returns promise
//promise is either resolve or rejected
// Then is used for resolve and Catch is used for reject
