import { combineReducers } from 'redux'
import { booksReducer } from './booksReducer'

const rootReducer = combineReducers({
	// lista med böcker
	books: booksReducer

	// lånekort (inloggad användare typ)
	// lista med lån
	// här lägger vi till reducers, allt eftesom vi behöver dem (precis som vi gör med komponenter)
})



export { rootReducer }
