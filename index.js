function wakeDog(dogName, dogBreed) {
  let line = `Wake ${dogName} the ${dogBreed}`;
  console.log(`${line}`);
  return line;
}

function leashDog(dogName, dogBreed) {
  let line = `Leash ${dogName} the ${dogBreed}`;
  console.log(`${line}`);
  return line;
}

function walkToPark(dogName, dogBreed) {
  let line = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(`${line}`);
  return line;
}

function throwFrisbee(dogName, dogBreed) {
  let line = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(`${line}`);
  return line;
}

function walkHome(dogName, dogBreed) {
  let line = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(`${line}`);
  return line;
}

function unleashDog(dogName, dogBreed) {
  let line = `Unleash ${dogName} the ${dogBreed}`;
  console.log(`${line}`);
  return line;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let activity = []
  var i
  for (i = 0; i < routine.length; i++) {
    activity.push(routine[i](dogName, dogBreed)); 
  }
  return activity;
}