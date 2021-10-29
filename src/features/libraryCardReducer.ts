import { /*createAction,*/ createReducer } from '@reduxjs/toolkit'
// import { Book, BookId } from '../models/Book'
import { LibraryCard } from '../models/LibraryCard'

const initialState: LibraryCard = {
	id: '123',
	userName: 'Astrid Lindgren'
}

const cardReducer = createReducer(initialState, {

})

export { cardReducer }
