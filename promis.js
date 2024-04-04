let products = new Promise((resolve,reject)=>{
     
      resolve()
})


let api = fetch('https://dummyjson.com/products/')

  api.then((result)=>{
      
    let data = result.json();
   
        // console.log(data);
        data.then((Alldata)=>{

        const  productslist = Alldata.products
        
          console.log(productslist)

          let html = ""
          
           html = productslist.map((item)=>{
                
              return `<li> ${item.title} , ${item.brand} , ${item.category} <br> <br> Description : ${item.description} <br> </li>`;
                
          }).join(" ")

          
          document.getElementById('productList').innerHTML = html;
          
          
          
          
          //  using forloop
          
          // for(let i=0;i<productslist.length;i++)
          // {
          //      html += `<li> ${productslist[i].title}, ${productslist[i].brand} </li>` 
          // }


        }).catch((rejectData)=>{
             
             console.log(rejectData)
        })

  }).catch((reject)=>{
     
      console.log("api reject this ",reject);
  })
     console.log(api)




   
  



// let promise = new Promise((resolve,reject)=>{
//      const x = 'sohelkhan';
//      const y = 'sohelk han'
//       if(x===y)
//       {
//          resolve()
//       }
//       else(
//          reject()
//       )
// });

// promise.then((result)=>{
     
//     console.log("result")
     
// }).catch((reject)=>{
      
//      console.log("reject")
// })



// let user = fetch('https://dummyjson.com/products/')
//  user.then((data)=>{
     
//       let result = data.json()
//        console.log(result);
       
//    result.then((data1)=>{
         
//         console.log(data1);
           
//        }).catch((rej)=>{
         
//           console.log("api failed ",rej);
//        })
//  }).catch((rej)=>{
     
//       console.log("not completed ", rej);
//  })

// console.log(user);



// function doTask(taskName){

//      return new Promise((resolve,reject)=>{
        
//            console.log('doing.....',taskName);
//          setTimeout(() =>{

//             //console.log('completed....',taskName);

//             resolve('completed  ...... '+taskName);
//             // reject(taskName,'task not completed ');
            
//          },3000);

//      });
    
// }
//  doTask('venue selection').then((res)=>{
             
//     console.log(res)

//      doTask('card printing....').then((res)=>{
         
//         console.log(res)
        

//         doTask('card disturbation....').then(()=>{
        
//              console.log(res)
             
              
//         }).catch((err)=>{
             
//               console.log('reject ',err)
//         })
          
//      }).catch((err)=>{
         
//            console.log('reject ', err)
//      })
// }).catch((err)=>{
     
//        console.log('reject',err)
//    })

// function doTask(taskName,nexTask){
      
//        console.log("doing .....",taskName)
//         setTimeout(()=>{
             
//               console.log('completed....',taskName);
//               if(nexTask)
//               {
//                   nexTask();
//               }
//         },3000);
// }

//  doTask("Venue selection",()=>{
     
//       doTask('Card printing',()=>{
         
//           doTask('Card distribution')
//       })
//  })







// function varifyUser(userId){

//       return new Promise((res,rej)=>{
//         if(userId === "sohelkhanp619@gmail.com")
//           {
//              res("Success")
//          }
//          else
//          {
             
//               rej('Invalid user');
//          }

//       });
    
// }

//  let user = varifyUser("sohelkhanp619@gmail.com")
// console.log(user)









// let promise = new Promise((resolve,reject)=>{
     
//     console.log(" I am  promise ")

//       resolve('Sucess');
     
// });
// console.log(promise);

// let promise1 = new Promise((resolve,reject)=>{
     
//      console.log("I am valid and non valid user");
//      reject('This user is invalid');
// })

// console.log(promise1);