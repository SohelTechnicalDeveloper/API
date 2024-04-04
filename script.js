
       
        var product_list = data.products ;
       show(product_list)

        let html = "";
         
        //  for(let i=0;i<product_list.length;i++)
        //  {
        //     html+=`<li> Title = ${product_list[i].title}<br>  Brand = ${product_list[i].brand}<br>  Price = ${product_list[i].price }<br> Rating : ${product_list[i].rating} <br> `
        //         document.getElementById('productList').innerHTML = html;
        //   }
         //html = product_list.map( item => `<li id="Product"> Id = ${item.id} <br> Title = ${item.title} <br>  Brand = ${item.brand}<br>  Price = ${item.price}<br> Rating : ${item.rating} <br> Category = ${item.category} <img src="${item.thumbnail}">`)
      
         function show(products) 
         {

            let html= products.map((item)=>{
               
                 return `<li> Brand =  ${item.brand} <br> Categroy = ${item.category}, <br> Price = ${item.price} <br> Rating : ${item.rating} <br>   <img src="${item.thumbnail}",  </li>`
              
            })
          
            document.getElementById('productList').innerHTML = html;
         }
      
          
      
      
             
          var searchInput = document.querySelector('#input');
             searchInput.addEventListener("keyup", function() 
             {
               let html = product_list.filter((item)=>
                {
                  
                  if(item.brand.toLowerCase().includes(this.value.toLowerCase()))
                  {
                    return true;
                  }
                  if(item.category.toLowerCase().includes(this.value.toLowerCase))
                  {
                     return true;
                  }

                  if(item.title.toLowerCase().includes(this.value.toLowerCase))
                  {
                     return true;
                  }
               })
              
              //  document.getElementById('productList').innerHTML = html;
              show(html)
             })
      
           
      
      
      
      
      
      
      
      // const  searchProductbybrand = (item) =>
      // {
      //     //   html+=`<li> Title = ${product_list[i].title}<br>  Brand = ${product_list[i].brand}<br>  Price = ${product_list[i].price }<br> Rating : ${product_list[i].rating} <br> `
      
      //     if(item.price<500)
      //     {
      //         return true;
      //     }
      // }   
      
      //  html = product_list.filter(searchProductbybrand);
       
      //     console.log(html)
       
      //     html+=`<li> Title = ${product_list[i].title}<br>  Brand = ${product_list[i].brand}<br>  Price = ${product_list[i].price }<br> Rating : ${product_list[i].rating} <br> `
      //     document.getElementById('productList').innerHTML = html;
         
         
      //    const searchProductByPirce =(item)=> 
      //     {
      //         if(item.price < 500)
      //         {
      //             return true
      //         }
            
      //     }
      //     const searchProductbybrand =(item)=>{
               
      //          if(item.brand==="Apple")
      //          {
      //              return true;
      //          }
      //     }
      
      //    let temp= product_list.filter(searchProductbybrand);
      
      //       console.log(temp)
      
      
      // var product_list = data.products;
       
      //  let html ="";
      
      //  html =   product_list.filter( (item) =>{ return item.price< 500 }) .map((item)=>{
      
      //   return `<li> ${item.brand} , ${item.price} , ${item.category} </li>`
      // })
      
      // document.getElementById('productList').innerHTML = html;
      
      
      //  for(let i=0;i<product_list.length;i++)
      //  {
      //     html +=`<li> ${product_list[i].brand} , ${product_list[i].category} , ${product_list[i].price}</li>`
      //  }
      
      //   const searchProductByPirce = item => item.price< 500;
              
      //   product_list = product_list.filter( (item) =>{ 
      //    if(item.price< 500 )
      //      return true;
      // })
      
      
       
      //   document.getElementById('productList').innerHTML =  product_list.filter( (item) =>{ return item.price< 500 }) .map((item)=>{
      
      //     return `<li> ${item.brand} , ${item.price} , ${item.category} </li>`
      //  });
      
      
      
      // const searchProductByPrice = ((item)=>{
         
      //     if(item.price<500)
      //     {
      //        return true; 
      
      //     }
      // });
      
      //  product_list = product_list.filter(searchProductByPrice)
        
      //    users = product_list.map((item)=>{
           
      //        return `<li> ${item.brand},${item.price} </li>`
      //   })
      
      // document.getElementById('productList').innerHTML = users;