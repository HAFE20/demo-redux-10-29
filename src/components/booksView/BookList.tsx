import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { actions } from '../../features/booksReducer'
import { BookId } from '../../models/Book'

const BookList = () => {
	const dispatch = useDispatch()
	const books = useSelector((state: RootState) => state.books)
	const cardId = useSelector((state: RootState) => state.libraryCard).id

	const handleBorrow = (id: BookId): void => {
		dispatch(actions.borrowBook({ bookId: id, cardId }))
	}

	return (
		<section>
			De här böckerna kan du låna:

			<ul>
				{books.map(book => (
					<li key={book.id}>
						{book.title} av {book.author} ({book.stock} kvar)
						{book.stock > 0 ?
							<button onClick={() => handleBorrow(book.id)}> Låna </button>
							: null}
					</li>
				))}
			</ul>
		</section>
	)
}
// Förbättringsförslag: styla <li> elementen till att se ut som cards

export default BookList
