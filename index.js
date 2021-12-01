/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
const state={
    items:
    [
        {
            id:1,
            name: "beetroot",
            price: 0.35,
            amount: 0,
          
          
        },
        {
            id:2,
            name: "carrot",
            price: 0.35,
            amount: 0
        },
        {
            id:3,
            name: "apple",
            price: 0.35,
            amount: 0
          
        },
        {
            id:4,
            name: "apricot",
            price: 0.35,
            amount: 0
          
        },
        {
            id:5,
            name: "avocado",
            price: 0.35,
            amount: 0
          
        },
        {
            id:6,
            name: "bananas",
            price: 0.35,
            amount: 0, 
          
        },
        {
            id:7,
            name: "bell-pepper",
            price: 0.35,
            amount: 0
          
        },
        {
            id:8,
            name: "berry",
            price: 0.35,
            amount: 0
          
        },
        {
            id:9,
            name: "blueberry",
            price: 0.35,
            amount: 0
          
        },
        {
            id:10,
            name: "eggplant",
            price: 0.35,
            amount: 0
          
        },
    ]
}
 




function createProductForStore(item){

const   itemListUl= document.querySelector('header .item-list')
console.log(itemListUl)



const liElementOfStore= document.createElement('li')

const iconsOfStore= document.createElement ('div')
iconsOfStore.setAttribute('class', 'store--item-icon ')
 
const imagesOfStore= document.createElement ('img')
imagesOfStore.setAttribute ('src',`assets/icons/${item.id<10?'00':'0'}${item.id}-${item.name}.svg`)
imagesOfStore.setAttribute ('alt',`${item.name}`)


iconsOfStore.append(imagesOfStore)

const addTocartButton= document.createElement('button')
addTocartButton.textContent= 'Add to cart'
addTocartButton.addEventListener('click', function(){
    createCard(item)
})

liElementOfStore.append (iconsOfStore, addTocartButton)
itemListUl.append(liElementOfStore)

}

function renderStoreProducts(){
for (const  item of state.items ){
    createProductForStore(item)

}
}
renderStoreProducts()


function createCard(item){

    const   cartItemListUl= document.querySelector('main .item-list')
 console.log(cartItemListUl)
const cartItemListLi= document.createElement('li')

const imagesOfCart= document.createElement ('img')
imagesOfCart.setAttribute ('src',`assets/icons/${item.id<10?'00':'0'}${item.id}-${item.name}.svg`)
imagesOfCart.setAttribute ('alt', 'beetroot')

const textOfCart= document.createElement('p')
textOfCart.textContent=item.name

const cartButtonRemove=document.createElement('button')
cartButtonRemove.setAttribute('class', 'quantity-btn remove-btn center')
cartButtonRemove.textContent='-'

const cartButtonQuantity=document.createElement('span')
cartButtonQuantity.setAttribute('class', 'quantity-text center')
cartButtonQuantity.textContent='1'

const cartButtonAdd=document.createElement('button')
cartButtonAdd.setAttribute('class', 'quantity-btn add-btn center')
cartButtonAdd.textContent='+'
console.log(cartButtonAdd)

cartItemListLi.append(imagesOfCart,textOfCart,cartButtonRemove,cartButtonQuantity,cartButtonAdd)

cartItemListUl.append(cartItemListLi)
}

createCard()


