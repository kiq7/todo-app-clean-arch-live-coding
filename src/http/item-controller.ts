import { Controller, Req, Post, Res, Body, Get, Param } from "@nestjs/common";
import { AddItem, AddItemRequest } from "src/application/usecases/add-item";
import { Request, Response } from 'express'
import { FindItem } from "src/application/usecases/find-item";
import { ItemRepository } from "src/domain/interfaces/item-repository";

@Controller('items')
export class ItemController {
  constructor(
    private readonly addItem: AddItem,
    private readonly findItem: FindItem,
    private readonly repo: ItemRepository
  ) {}

  @Post()
  async post(
    @Res() response: Response,
    @Body() body: AddItemRequest
    ) {
    const item = await this.addItem.execute({ title: body.title})
    return response.status(201).json({ statusCode: 201, data: item })
  }

  @Get(':id')
  async get(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id: string
  ) {
    const item = await this.findItem.execute(id)

    return response.status(200).json({ statusCode: 200, data: { ...item }})
  }

  @Get()
  async getAll (
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const items = await this.repo.findAll()

    return response.status(200).json({ statusCode: 200, data: items})
  }
}
