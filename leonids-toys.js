
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
//get the id property object in the array
const maxToyId=lastToy.id
// step 2: increase the current max it by 1
const newIdForToy=maxToyId+1
//step 3:add the id property to the toy object
toyObject.id=newIdForToy
// step 4:push the toy object to the array
toys.push(toyObject)

}

addToyToInventory(newToy)

//add a toy object without a function using push
/*
const newToy={
    id:4,
    color:"Black",
    price:299.99,
    name: "PlayStation 4",
    inStock:true,
    unitsSold:35,
    amountLeft:12,
    weight:3.00
}

const newToy2={
    id:5,
    color:"Red and Blue",
    price:399.99,
    name: "Switch",
    inStock:true,
    unitsSold:45,
    amountLeft:9,
    weight:2.00
}

const newToy3={
    
    color:"green",
    price:10.99,
    name: "plusie",
    inStock:true,
    unitsSold:13,
    amountLeft:10,
    weight:.50
}
toys.push(newToy,newToy2,newToy3)
const findId=2
if (toy.id ===findId){
    console.log(toy.id)
}
*/

for (const toy of toys){

    
    toy.price=toy.price*.5
    console.log(` The ${toy.color} ${toy.name} costs ${toy.price} id ${toy.id}`);
    
}
