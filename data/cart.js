export const cart =[];

export function addTocart(productId) {
  let matchingItem;

    cart.forEach((cartItem) =>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    })

    if(matchingItem){
      matchingItem.quantity +=1;
    } else {
      cart.push({
      productid: productId,
      quantity: 1
    });
    }
}