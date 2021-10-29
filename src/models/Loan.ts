import { BookId } from '../models/Book'
import { CardId } from '../models/LibraryCard'

export interface Loan {
	bookId: BookId;
	cardId: CardId;
}
