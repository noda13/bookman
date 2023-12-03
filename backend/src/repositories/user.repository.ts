import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BookmanDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.bookman') dataSource: BookmanDataSource,
  ) {
    super(User, dataSource);
  }
}
