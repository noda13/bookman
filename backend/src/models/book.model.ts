import {Entity, model, property} from '@loopback/repository';

@model()
export class Book extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  authors?: string[];

  @property({
    type: 'string',
  })
  publisher?: string;

  @property({
    type: 'date',
  })
  publishedDate?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
  })
  pageCount?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  categories?: string[];

  @property({
    type: 'number',
  })
  averageRating?: number;

  @property({
    type: 'number',
  })
  ratingsCount?: number;

  @property({
    type: 'string',
  })
  language?: string;


  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
