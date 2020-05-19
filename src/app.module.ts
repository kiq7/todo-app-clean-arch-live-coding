import { Module } from '@nestjs/common';
import { ItemController } from 'src/http/item-controller';
import { AddItem } from 'src/application/usecases/add-item';
import { ItemRepository } from 'src/domain/interfaces/item-repository';
import { ItemInMemoryRepository } from 'src/infra/repository/item-in-memory-repository';
import { FindItem } from 'src/application/usecases/find-item';

@Module({
  imports: [],
  controllers: [ItemController],
  providers: [
    AddItem,
    FindItem,
    { provide: ItemRepository, useClass: ItemInMemoryRepository }
  ],
})
export class AppModule {}
