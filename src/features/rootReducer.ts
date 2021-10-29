import { combineReducers } from 'redux'
import { booksReducer } from './booksReducer'
import { loansReducer } from './loansReducer'
import { cardReducer } from './libraryCardReducer'

const rootReducer = combineReducers({
	// lista med böcker
	books: booksReducer,

	// lånekort (inloggad användare typ)
	libraryCard: cardReducer,

	// lista med lån
	loans: loansReducer

	// här lägger vi till reducers, allt eftesom vi behöver dem (precis som vi gör med komponenter)
})



export { rootReducer }
