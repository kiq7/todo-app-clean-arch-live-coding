import { Item } from "src/domain/item.entity";

export abstract class ItemRepository {
  abstract save(item: Item): Promise<Item>
  abstract findById(id: string): Promise<Item | undefined>
  abstract findAll(): Promise<Item[]>
}
