import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './starwars-names.json'
export { starWarsNames as all}

const getRandomItem = uniqueRandomArray(starWarsNames)

export let random = number => !number
  ? getRandomItem()
  : Array(number)
     .fill()
     .map(getRandomItem)
