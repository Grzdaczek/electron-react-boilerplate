import { createStore, combineReducers } from 'redux'
import { commonReducer } from './reducers/common'

const reducer = combineReducers({
	common: commonReducer
})

const enhancer =
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION__()

export type IState = ReturnType<typeof reducer>
export const store = createStore(reducer, enhancer)
