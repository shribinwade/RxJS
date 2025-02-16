console.log('-----------------------');
console.log('///////Async/Await//////');
console.log('-----------------------');

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve('Data Received')
    },3000)
})

// async keyword with func always return promise
// async function getData(){
//     return 'Data Received'
// }
// getData().then(res=>{
//     console.log(res);
// });

//shortcut
// getData().then(console.log);

// async function getData(){
//     let response = await promise;
//     console.log(response);
// }

// getData();

let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');

let dell= {
    brand: 'Dell',
    hardDisk: '2TB',
    color: 'white'
}

let buyLaptop = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve(dell)
    },3000)
})

let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
                 .then(res => res.json() )
//ex 1 with promise

function fetch1(){
   result1.innerText = 'Featching Data...'
   buyLaptop.then(res => {
    console.log(res);
    result1.innerHTML = JSON.stringify(res);
   })
}


//ex 1 with Async /await

async function fetch2(){
    result2.innerText = 'Featching Data...'
    let data = await buyLaptop;
    console.log(data)
    result2.innerHTML = JSON.stringify(data);
 }

// ex 3 with  fetch api

// promise
// function fetch3(){
//     result1.innerText = 'Featching Data...'
//     buyLaptop2.then(res => {
//      console.log(res);
//      result3.innerHTML = JSON.stringify(res);
//     })
//  }

//async / await
async function fetch3(){
    result3.innerText = 'Featching Data...'
    let data = await buyLaptop2;
    console.log(data)
    result3.innerHTML = JSON.stringify(data);
 }

