import { ItemRepository } from "src/domain/interfaces/item-repository";
import { Item } from "src/domain/item.entity";

export class ItemInMemoryRepository implements ItemRepository {
  private items: Item[] = []

  save(item: Item): Promise<Item> {
    this.items.push(item)

    return Promise.resolve(item)
  }

  findById(id: string): Promise<Item> {
    return Promise.resolve(this.items.find(item => item.id === id))
  }

  findAll(): Promise<Item[]> {
    return Promise.resolve(this.items)
  }
}
