function solve() {
   let shoppingDiv = document.getElementsByClassName('shopping-cart')[0];
   let cart = [];
   let textArea = document.querySelector('div.shopping-cart>textarea');
   shoppingDiv.addEventListener('click', function (e) {
      if (e.target.nodeName == 'BUTTON' && e.target.classList == 'add-product') {
         let productDiv = e.target.parentNode.parentNode;
         let productPrice = Array.from(productDiv.children).filter(a => a.className == 'product-line-price')[0].textContent;
         productPrice = Number(productPrice);
         let productDetails = Array.from(productDiv.children).filter(a => a.className == 'product-details')[0];
         let productName = Array.from(productDetails.children).filter(a => a.className == 'product-title')[0].textContent;
         let isFound = false;
         for (const product of cart) {
            if (product.productName == productName) {
               product.count++;
               isFound = true;
               break;
            }
         }
         if (!isFound) {
            cart.push({ productName, productPrice, count: 1 });
         }
         let output = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
         textArea.textContent += output;
         textArea.textContent.trim();
      } else if (e.target.nodeName == 'BUTTON' && e.target.classList == 'checkout') {
         let totalPrice = 0;
         let list = [];
         for (const product of cart) {
            totalPrice += product.productPrice * product.count;
            list.push(product.productName);
         }
         textArea.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`
         let allButtons = Array.from(document.getElementsByTagName('button'));
         allButtons.forEach(button => {
            button.disabled = true;
         });
      }
   });
}