import { /*createAction,*/ createReducer } from '@reduxjs/toolkit'
import { Loan } from '../models/Loan'
import { actions } from './booksReducer'

// Actions på listan med lån:
// "borrow book" och "return book" finns redan i booksReducer!

const initialState: Loan[] = []

const loansReducer = createReducer(initialState, {
	[actions.borrowBook.toString()]: (state, action) => {
		return [ ...state, action.payload ]
	},
	[actions.returnBook.toString()]: (state, action) => {
		const copy: Loan[] = [ ...state ]
		const index = copy.findIndex(loan => loan.bookId === action.payload)
		copy.splice(index, 1)
		return copy
	}
})

export { loansReducer }
