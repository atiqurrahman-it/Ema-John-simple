import { getShoppingCart } from "../utilities/fakedb"

const cartProductLader=async()=>{
    const loadedProducts=await fetch('products.json')
    const products=await loadedProducts.json()

    // if cart data is in database ,you have to user async await 

    //  localStore theke je product gulo add to cart kora hoiche oi gula id And quantity asteche 
     const storeCart=getShoppingCart()
     const saveToCart=[]
     for(const id in storeCart){ 
        const addedProduct=products.find(product=> product.id===id)
        const quantity=storeCart[id]
        if(addedProduct){
            addedProduct.quantity = quantity;
            saveToCart.push(addedProduct)
        }
      }
      
    //  if you need to tow thinks 
    // way one 
    // return [products,saveToCart]
    // way two 
    // return {products,saveToCart}
    // return {products,cart:saveToCart}

    return saveToCart

}

export default cartProductLader;