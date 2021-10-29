import { createAction, createReducer } from '@reduxjs/toolkit'
import { Book, BookId } from '../models/Book'
import { Loan } from '../models/Loan'

// Actions på böcker:
const borrowBook = createAction<Loan>('borrow book')
const returnBook = createAction<BookId>('return book')
// strängarna är ID för boken som lånas eller återlämnas
const actions = { borrowBook, returnBook }

// Initial state - vanligtvis så hämtar vi datan från ett API
const initialState: Book[] = [
	{
		id: 'a1',
		title: "The judge's list",
		author: 'John Grisham',
		stock: 3
	},
	{
		id: 'a2',
		title: 'The Lincoln highway',
		author: 'Amor Towles',
		stock: 1
	},
	{
		id: 'a3',
		title: 'The wish',
		author: 'Nicholas Sparks',
		stock: 5
	},
	{
		id: 'a4',
		title: 'State of terror',
		author: 'Hillary Rodham Clinton, Louise Penny',
		stock: 3
	}
]

// Övning: ta reda på hur man kan ange typen för ett action-objekt
const booksReducer = createReducer(initialState, {
	[borrowBook.toString()]: (state, action) => {
		const id: BookId = action.payload.bookId
		return state.map(book => {
			// Längre, kanske tydligare
			if( book.id !== id ) {
				return book
			} else {
				return { ...book, stock: book.stock - 1 }
			}
			// Mer kompakt alternativ
			// return book.id === id ? { ...book, stock: book.stock - 1 } : book
		})
	},

	[returnBook.toString()]: (state, action) => {
		const id: BookId = action.payload
		return state.map(book => {
			// Längre, kanske tydligare
			if( book.id !== id ) {
				return book
			} else {
				return { ...book, stock: book.stock + 1 }
			}
		})
	}
})


export { actions, booksReducer }
