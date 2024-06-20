//exercice Annalyn's Infiltration
export function canExecuteFastAttack(knightIsAwake) {
 return !knightIsAwake
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake
}


export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
 return( (prisonerIsAwake&& !knightIsAwake && !archerIsAwake)   
  || (!archerIsAwake && petDogIsPresent)
  )

}

//exercices_2 lucians Lasagne  
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;
/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
   return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
remainingMinutesInOven(30);
/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return  numberOfLayers * PREPARATION_MINUTES_PER_LAYER
}
/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
 return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}

// Poetry Club Door Policy

export function frontDoorResponse(line) {
  return line[0]
}
export function frontDoorPassword(word) {

 return (word[0].toUpperCase() + word.slice(1).toLowerCase()); 
}
export function backDoorResponse(line) {
  return line.trim().slice(-1);
}
export function backDoorPassword(word) {
 return (word[0].toUpperCase() + word.slice(1).toLowerCase()) + ', please';
}


