import { expect } from 'chai'

import starWars from './index'

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      const isArrayOfStrings = array =>
        array.every(item => typeof item === 'string')

      expect(starWars.all).to.satisfy(isArrayOfStrings)
    })

    it('should contain \'Luke Skywalker\'', () =>
      expect(starWars.all).to.contain('Luke Skywalker')
    )
  })

  describe('random', () => {
    const expectToContain = arr => name  =>
      expect(arr).to.include(name)
    
    const expectNamesToContain = expectToContain(starWars.all)

    it('should return a random item from the starWars.all', () => {
      const randomItem = starWars.random()
      expectNamesToContain(randomItem)
    })

    it('should return an array of random items if passed a number', () => {
      const randomItems = starWars.random(3)

      expect(randomItems).to.have.length(3)
      randomItems.forEach(expectNamesToContain)
    })
  })
})
