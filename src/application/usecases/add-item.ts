import { Item } from "../../domain/item.entity";
import { ItemRepository } from "../../domain/interfaces/item-repository";
import { Injectable } from "@nestjs/common";
import { isString } from "util";

export type AddItemRequest = {
  title: string
}

@Injectable()
export class AddItem {
  constructor(
    private readonly itemRepository: ItemRepository
  ) { }

  async execute({ title }: AddItemRequest): Promise<Item> {
    const item = new Item({ title })
    return this.itemRepository.save(item)
  }
}
