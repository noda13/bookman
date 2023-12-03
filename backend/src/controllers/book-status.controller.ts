import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {BookStatus} from '../models';
import {BookStatusRepository} from '../repositories';

export class BookStatusController {
  constructor(
    @repository(BookStatusRepository)
    public bookStatusRepository : BookStatusRepository,
  ) {}

  @post('/book-statuses')
  @response(200, {
    description: 'BookStatus model instance',
    content: {'application/json': {schema: getModelSchemaRef(BookStatus)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookStatus, {
            title: 'NewBookStatus',
            
          }),
        },
      },
    })
    bookStatus: BookStatus,
  ): Promise<BookStatus> {
    return this.bookStatusRepository.create(bookStatus);
  }

  @get('/book-statuses/count')
  @response(200, {
    description: 'BookStatus model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BookStatus) where?: Where<BookStatus>,
  ): Promise<Count> {
    return this.bookStatusRepository.count(where);
  }

  @get('/book-statuses')
  @response(200, {
    description: 'Array of BookStatus model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BookStatus, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BookStatus) filter?: Filter<BookStatus>,
  ): Promise<BookStatus[]> {
    return this.bookStatusRepository.find(filter);
  }

  @patch('/book-statuses')
  @response(200, {
    description: 'BookStatus PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookStatus, {partial: true}),
        },
      },
    })
    bookStatus: BookStatus,
    @param.where(BookStatus) where?: Where<BookStatus>,
  ): Promise<Count> {
    return this.bookStatusRepository.updateAll(bookStatus, where);
  }

  @get('/book-statuses/{id}')
  @response(200, {
    description: 'BookStatus model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BookStatus, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BookStatus, {exclude: 'where'}) filter?: FilterExcludingWhere<BookStatus>
  ): Promise<BookStatus> {
    return this.bookStatusRepository.findById(id, filter);
  }

  @patch('/book-statuses/{id}')
  @response(204, {
    description: 'BookStatus PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookStatus, {partial: true}),
        },
      },
    })
    bookStatus: BookStatus,
  ): Promise<void> {
    await this.bookStatusRepository.updateById(id, bookStatus);
  }

  @put('/book-statuses/{id}')
  @response(204, {
    description: 'BookStatus PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() bookStatus: BookStatus,
  ): Promise<void> {
    await this.bookStatusRepository.replaceById(id, bookStatus);
  }

  @del('/book-statuses/{id}')
  @response(204, {
    description: 'BookStatus DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.bookStatusRepository.deleteById(id);
  }
}
