import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BookmanDataSource} from '../datasources';
import {BookStatus, BookStatusRelations} from '../models';

export class BookStatusRepository extends DefaultCrudRepository<
  BookStatus,
  typeof BookStatus.prototype.bookId,
  BookStatusRelations
> {
  constructor(
    @inject('datasources.bookman') dataSource: BookmanDataSource,
  ) {
    super(BookStatus, dataSource);
  }
}
