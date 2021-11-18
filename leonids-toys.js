
//price
//name
// instock-yes or no
//number of toys
//units sold
//id




// put objects in arrays

const toys=[
    {
        id:1,
        price:19.99,
        color:"brown",
        name: "Woody action figure",
        inStock:true,
        unitsSold:21,
        amountLeft:31,
        weight:1.2
    
    },
{
    id:2,
    price:29.99,
    color:"grey",
    name: "Skyrim",
    inStock:false,
    unitsSold:55,
    amountLeft:0,
    weight:2
}

]


const newToy={
    
    price:29.99,
    color:"green",
    name: "plusie",
    inStock:false,
    unitsSold:55,
    amountLeft:0,
    weight:2

}
// create a function with an argument
const addToyToInventory=(toyObject)=>{

//step 1: get maximum id in the current array.
    //get the last item in an array
  const toyIndex=toys.length-1
  // get the last object in an array
const lastToy=toys[toyIndex]

// step 2: get the id property of the object and increase the current max it by 1
const newIdForToy=lastToy.id+1
//step 3:add the id property to the toy object
toyObject.id=newIdForToy
// step 4:push the toy object to the array
toys.push(toyObject)

}

addToyToInventory(newToy)



// filtered the array if the price is greater than 19.00


for (const toy of toys){

       
    
    if(toy.price>=19.00){
        console.log(` The ${toy.color} ${toy.name} costs ${toy.price} id: ${toy.id}`);
    }
}
