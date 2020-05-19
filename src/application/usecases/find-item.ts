import { Injectable } from "@nestjs/common";
import { ItemRepository } from "src/domain/interfaces/item-repository";
import { Item } from "src/domain/item.entity";

@Injectable()
export class FindItem {
  constructor(
    private readonly itemRepository: ItemRepository
  ) { }

  async execute(id: string): Promise<Item> {
    return this.itemRepository.findById(id)
  }
}
