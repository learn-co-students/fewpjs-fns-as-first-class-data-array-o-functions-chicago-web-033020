const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function wakeDog(dogName, dogBreed) {
    const ho = `Wake ${dogName} the ${dogBreed}`
    console.log(ho)
    return ho
}

function leashDog(dogName, dogBreed) {
    const ho = `Leash ${dogName} the ${dogBreed}`
    console.log(ho)
    return ho
}

function walkToPark(dogName, dogBreed) {
    const ho = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(ho)
    return ho
}

function throwFrisbee(dogName, dogBreed) {
    const ho = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(ho)
    return ho
}

function walkHome(dogName, dogBreed) {
    const ho = `Walk home with ${dogName} the ${dogBreed}`
    console.log(ho)
    return ho
}

function unleashDog(dogName, dogBreed) {
    const ho = `Unleash ${dogName} the ${dogBreed}`
    console.log(ho)
    return ho
}

function exerciseDog(dogName, dogBreed) {
    const rez = []
    for (let i = 0; i < routine.length; i++) {
        rez.push(routine[i](dogName, dogBreed))
    }
    return rez
}
