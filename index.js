function animal(id, name, age, breed){
  this.id = id,
  this.name = name,
  this.age = age,
  this.breed = breed;

}

let giz = new animal(1, "Gizmo", 3, "Chihuahua" )
let lil = new animal(2, "Lily", 3, "Pitbull" )
let rox = new animal(3, "Roxy", 12, "Pitbull" )
let diesel = new animal(4, "Diesel", 1, "American Bully")

let pets = [giz, lil, rox, diesel]

pets.map(animal => {
  Object.keys(animal).map(key => {
    console.log(key, animal[key])
  })
})