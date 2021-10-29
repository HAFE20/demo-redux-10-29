import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { actions } from '../../features/booksReducer'
import { BookId } from '../../models/Book'

const LoanList = () => {
	const dispatch = useDispatch()
	const books = useSelector((state: RootState) => state.books)
	const loans = useSelector((state: RootState) => state.loans)

	const borrowedBooks = loans.map(loan => books.find(book => book.id === loan.bookId))

	const handleReturnBook = (bookId: BookId) => dispatch(actions.returnBook(bookId))

	return (
		<section>
		Dessa böcker är utlånade:

		<ul>
		{borrowedBooks.map((maybeBook, index) => maybeBook ? (
			<li key={maybeBook.id + index}>
				{maybeBook.title}
				<button onClick={() => handleReturnBook(maybeBook.id)}> Lämna tillbaka </button>
			</li>
		) : null)}
		</ul>
		</section>
	)
}
// Nästa version: visa vem boken är utlånad till också.

export default LoanList
