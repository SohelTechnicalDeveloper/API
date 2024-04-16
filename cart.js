var productList = [];

async function getAllProducts()
{
    let products =  await fetch('https://dummyjson.com/products');
     
     productList = await products.json();
    productList = productList.products
    
    showProducts();

}
getAllProducts()

function showProducts() 
{    

   let html = '<div class="row row-item">'

    for ( i=0; i<productList.length; i++) 
           
     {
        html += `
        <div class="col-sm-3">
            <div class="single-item">
            
            <div class="image">
                <img src="${productList[i].thumbnail}" class="product-image" alt="image">
            </div>
            <div class="product-price"> ${productList[i].brand}</div>
            <div class="product-price">$ ${productList[i].price}</div>
            
            <span id='divpr${productList[i].id}'>

            <button id="pr${productList[i].id}" class="add-to-cart btn btn-primary">Add To Cart</button>

            </span> 
         
            </div>
        </div>  

      `
      if((i+1)%4==0)
      {
          html+= `</div> <div class="row row-item">`
      }
      
   }
    html+='</div>'
    
    document.getElementById('productList').innerHTML = html;
    
    setEventlistenerOnCart()
    updateCart()
      
}

function setEventlistenerOnCart()
{
      let addToCart = document.getElementsByClassName('add-to-cart')
      for (let i = 0; i < addToCart.length; i++) {
       
        addToCart[i].addEventListener('click',function(){
           
            let cartItem = {};
            if(localStorage.getItem('cart')!==null)
            {
               cartItem =  JSON.parse(localStorage.getItem('cart'))
            }
              
            // console.log(this.id)
            let idStr = this.id.toString();
            if(cartItem[idStr]===undefined)
            {
               cartItem[idStr] = 1
            }
            else
            {
               cartItem[idStr] = cartItem[idStr] +1
            }
            localStorage.setItem('cart',JSON.stringify(cartItem));
             updateCart();
        })
        
      }
}
function updateCart(){

  if(localStorage.getItem('cart')!==null)
  {
      let cartItem = JSON.parse(localStorage.getItem('cart'));
      let count =0;
      for (let  item in cartItem) {
            
      count = count + cartItem[item];
      
      document.getElementById("div"+item).innerHTML = `
      
      <button class ="btn btn-primary" onclick ='updateQuantity("-" , "${item}")' > - </button>
      
      <span class='item-count'> ${cartItem[item]} </span>
      
      <button class ="btn btn-primary" onclick='updateQuantity("+" , "${item}")' > + </button>
      
      `
   }
   document.getElementById("cart-item-count").innerHTML = count;
  }
  
}

 function updateQuantity(optr,id)
 {

  let cartItem = JSON.parse(localStorage.getItem('cart'))
   if(optr==="+")
   {
     cartItem[id]=cartItem[id]+1
   }
   else{
      
    if(cartItem[id]===1)
      {
         delete cartItem[id];
         document.getElementById('div'+id).innerHTML = `
         <button id="${id}" class="add-to-cart btn btn-primary"> Add To Cart </button> `
         setEventlistenerOnCart();

      }
      else
      {
         cartItem[id]=cartItem[id]-1;      
      }

   }
   
   localStorage.setItem('cart',JSON.stringify(cartItem));
   updateCart();
   showCartItem()
    
     
}

function searchProduct(id) 
{
  return productList.filter((item)=>{
       
        return item.id===id;
   })
   
}

function showCartItem() 
{
  let cartItem = JSON.parse(localStorage.getItem('cart'));

      if(cartItem!==null)
      {
         let html =""
         for(let item in cartItem)
         {
             let id = item.replace("pr","")
             let product = searchProduct(parseInt(id))
             
                if (product.length > 0) 
                {
                  html+=`
                  <div class="row">
                  <div class="col-sm-2">
                    <img src="${product[0].thumbnail}" class="cart-image" alt="">
                  </div>
                  <div class="col-sm-4">
                    <h5>${product[0].title.toUpperCase()}</h5>
                    <h6>${product[0].category.toUpperCase()}</h6>
                  </div>
                  <div class="col-sm-2">
                    <button class="btn btn-primary" onclick='updateQuantity("-","${item}")'>-</button>
                    <span class="item-count">${cartItem[item]}</span>
                    <button class="btn btn-primary" onclick='updateQuantity("+","${item}")'>+</button>
                  </div>
                    
                     <div class="col-sm-2">${product[0].price}</div>
                     <div class="col-sm-2">${product[0].price * cartItem[item]}</div>
                </div>

                   `
                }

                document.getElementById('cart-item-list').innerHTML =html;
         }   
         
         

      }
   
   
}