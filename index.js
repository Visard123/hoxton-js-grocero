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
            name: "beettroot",
            price: 0.35
          
        },
        {
            id:2,
            name: "carrot",
            price: 0.35
          
        },
        {
            id:3,
            name: "apple",
            price: 0.35
          
        },
        {
            id:4,
            name: "apricot",
            price: 0.35
          
        },
        {
            id:5,
            name: "avocado",
            price: 0.35
          
        },
        {
            id:6,
            name: "bananas",
            price: 0.35
          
        },
        {
            id:7,
            name: "bell-pepper",
            price: 0.35
          
        },
        {
            id:8,
            name: "berry",
            price: 0.35
          
        },
        {
            id:9,
            name: "blueberry",
            price: 0.35
          
        },
        {
            id:10,
            name: "eggplant",
            price: 0.35
          
        },
    ]
}







function storeProducts(){

const   itemListUl= document.querySelector('header.item-list')


const liElementOfStore= document.createElement('li')

const iconsOfStore= document.createElement ('div')
iconsOfStore.setAttribute('class', 'store--item-icon ')
 
const imagesOfStore= document.createElement ('img')
imagesOfStore.setAttribute ('src','/assets/icons/001-beetroot.svg')
imagesOfStore.setAttribute ('alt', 'beetroot')


iconsOfStore.append(imagesOfStore)

const addTocartButton= document.createElement('button')
addTocartButton.textContent= 'Add to cart'

liElementOfStore.append (iconsOfStore, addTocartButton)
itemListUl.append(liElementOfStore)

}
storeProducts()


function createCard(){

    const   cartItemListUl= document.querySelector('main .item-list')

const cartItemListLi= document.createElement('li')

const imagesOfCart= document.createElement ('img')
imagesOfCart.setAttribute ('src','/assets/icons/001-beetroot.svg')
imagesOfCart.setAttribute ('alt', 'beetroot')

const textOfCart= document.createElement('p')
textOfCart.textContent=" beetroot"

const cartButtonRemove=document.createElement('button')
cartButtonRemove.setAttribute('class', 'quantity-btn remove-btn center')
cartButtonRemove.textContent='-'

const cartButtonQuantity=document.createElement('span')
cartButtonQuantity.setAttribute('class', 'quantity-text center')
cartButtonQuantity.textContent='1'

const cartButtonAdd=document.createElement('button')
cartButtonAdd.setAttribute('class', 'quantity-btn add-btn center')
cartButtonAdd.textContent='+'

cartItemListLi.append(imagesOfCart,textOfCart,cartButtonRemove,cartButtonQuantity.cartButtonAdd)

cartItemListUl.append(cartItemListLi)
}

createCard()


