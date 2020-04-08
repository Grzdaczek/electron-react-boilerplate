import { ICommonAction, COMMON_ACTION } from '../actions/common'

export interface IState {
	age: number
	name: string
}

const initState: IState = {
	age: 128307,
	name: 'Marko'
}

export const commonReducer = (state: IState = initState, action: ICommonAction): IState => {
	switch(action.type) {
		case COMMON_ACTION.SET_AGE: {
			return {...state, age: action.payload}
		}
		case COMMON_ACTION.SET_NAME: {
			return {...state, name: action.payload}
		}
		default: return state
	}
}
