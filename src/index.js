import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './starwars-names.json'

const getRandomItem = uniqueRandomArray(starWarsNames)

const random = number => !number
  ? getRandomItem()
  : Array(number)
     .fill()
     .map(getRandomItem)

module.exports = {
  all: starWarsNames,
  random
}
