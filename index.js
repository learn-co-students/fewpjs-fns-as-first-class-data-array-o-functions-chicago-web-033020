function wakeDog(dogName, dogBreed) {
  let statement = `Wake ${dogName} the ${dogBreed}`
  console.log(statement)
  return statement
}

function leashDog(dogName, dogBreed) {
  let statement = `Leash ${dogName} the ${dogBreed}`
  console.log(statement)
  return statement
}

function walkToPark(dogName, dogBreed) {
  let statement = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(statement)
  return statement
}

function throwFrisbee(dogName, dogBreed) {
  let statement = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(statement)
  return statement
}

function walkHome(dogName, dogBreed) {
  let statement = `Walk home with ${dogName} the ${dogBreed}`
  console.log(statement)
  return statement
}

function unleashDog(dogName, dogBreed) {
  let statement = `Unleash ${dogName} the ${dogBreed}`
  console.log(statement);
  return statement
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  let newArr = []
  for (let i=0; i < routine.length; i++) {
    newArr.push(routine[i](dogName, dogBreed))
  }
  return newArr
}