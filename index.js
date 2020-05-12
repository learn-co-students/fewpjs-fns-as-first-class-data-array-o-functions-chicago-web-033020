function wakeDog(name, breed){
    return `Wake ${name} the ${breed}`
}

function leashDog(name, breed){
    return `Leash ${name} the ${breed}`
}

function walkToPark(name, breed){
    return `Walk to the park with ${name} the ${breed}`
}

function throwFrisbee(name, breed){
    return `Throw the frisbee for ${name} the ${breed}`
}

function walkHome(name, breed){
    return `Walk home with ${name} the ${breed}`
}

function unleashDog(name, breed){
    return `Unleash ${name} the ${breed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed){


    // return routine.forEach(task => task(name, breed))
    // above results in error. 

    // let i = 0
    // while (i < routine.length){
    //     let independentFunction = routine[i];
    //     independentFunction(name, breed);
    //     i++;
    // }
    //above results in error.

    return routine.map(task => task(name, breed))
    //why does the above work but the other two attemps fail? 
}
    