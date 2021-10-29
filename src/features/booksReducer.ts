import { createAction, createReducer } from '@reduxjs/toolkit'
import { Book } from '../models/Book'

// Actions på böcker:
// - låna en bok
// - lämna tillbaka en bok
const actions = {}

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

const booksReducer = createReducer(initialState, {
	// Actions här
})


export { actions, booksReducer }
