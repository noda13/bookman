import {Entity, model, property} from '@loopback/repository';

@model()
export class BookStatus extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  bookId: string;

  @property({
    type: 'date',
  })
  purchaseDate?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isPaper?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  isEbook?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  isRead?: boolean;

  @property({
    type: 'string',
  })
  buyerId?: string;

  @property({
    type: 'number',
  })
  purchasePrice?: number;


  constructor(data?: Partial<BookStatus>) {
    super(data);
  }
}

export interface BookStatusRelations {
  // describe navigational properties here
}

export type BookStatusWithRelations = BookStatus & BookStatusRelations;
