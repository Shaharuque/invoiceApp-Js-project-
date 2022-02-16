

document.getElementById('detail-submit-btn').addEventListener('click',function(){
  const buyerDetails=document.getElementById('buyer-details-input')
  const buyerInfo=document.getElementById("buyer-info")
  buyerInfo.innerText=buyerDetails.value;
  //clear buyerDetails input field
  buyerDetails.value=""
})
//task: item Details get korey seita ekta invoice table a show korano
//'add-details-btn' btn click hanadler

document.getElementById('add-details-btn').addEventListener('click',function(){
  const productName=document.getElementById('item-name-input')
  const productPrice=document.getElementById('item-price-input')
  const productQuantity=document.getElementById('item-quantity-input')
  //console.log(productQuantity.value)

  //tbody tey info add 
  const infoTable=document.getElementById('info-table')
  // console.log(infoTable)

  //creating table html tag
  const tr=document.createElement('tr') //<tr></tr> HTML element create
  const th=document.createElement('td')
  const td1=document.createElement('td')
  const td2=document.createElement('td')
  const td3=document.createElement('td')
  //appoint class to 'td3'
  td3.classList.add('total-price') //td3 tey class add kora hoisey all the td3 can be accessed by the assigned class name

  th.innerText=productName.value
  td1.innerText=productPrice.value
  td2.innerText=productQuantity.value
  //td3 tey total price thakbey
  const totalPrice=parseFloat(productPrice.value)*parseFloat(productQuantity.value)
  td3.innerText=totalPrice

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3); //<td class="item-total">35</td>

  //tr/row k table(infoTable) a append kora lagbey
  infoTable.appendChild(tr)

  calculatefinalTotal()
  // // console.log(subTotalOfAll)
})

function calculatefinalTotal(){
  const subtotal=subTotal()
  // console.log(subtotal)
  const subtotalText=document.getElementById('sub-total')
  subtotalText.innerText=subtotal
  
  const tax=subtotal/20;
  const taxText=document.getElementById('tax')
  taxText.innerText=tax.toFixed(2)

  const grandTotal=subtotal+tax;
  const grandTotalText=document.getElementById('grand-total')
  grandTotalText.innerText=grandTotal

  //bottom grand-total
  const grandTotalLast=document.getElementById('grand-total-2')
  grandTotalLast.innerText=grandTotal

  
}

function subTotal(){
  const totalPrice=document.getElementsByClassName('total-price') //same class name a sob element target kortey parbey
  // console.log(totalPrice) //collection of same className element returns
  let subTotal=0
  for(let i=0;i<totalPrice.length;i++){
    const element=totalPrice[i]
    const perRowTotal=parseFloat(element.innerText)
    subTotal+=perRowTotal
  }
  return subTotal
}

function printinvoice(){
  alert('Invoice is printing')
}