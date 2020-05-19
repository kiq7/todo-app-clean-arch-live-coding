import { ItemRepository } from "src/domain/interfaces/item-repository"
import { Item } from "../../domain/item.entity"
import { AddItem } from "./add-item"

const stub = <T extends any>(): T => {
  const typeAssertion = {} as T

  for(const prop in typeAssertion) {
    if(typeAssertion.hasOwnProperty(prop)) {
      typeAssertion[prop] = undefined
    }
  }

  return typeAssertion
}

describe('AddItem', () => {
  let repository: ItemRepository

  beforeAll(() => {
    repository = stub<ItemRepository>()
  })

  describe('given the correct params', () => {
    beforeEach(() => {
      repository.save = jest.fn()
    })

    it('should calls repository with correct params', async () => {
      const useCase = new AddItem(repository)
      const title = 'Drink coffe'
      await useCase.execute({ title })

      expect(repository.save).toHaveBeenCalled()
    })
  })
})
