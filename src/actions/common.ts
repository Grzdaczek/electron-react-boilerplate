export enum COMMON_ACTION {
	SET_AGE = 'COMMON/SET_AGE',
	SET_NAME = 'COMMON/SET_NAME'
}

interface IStringMap<T> { [key: string]: T }
type IAnyFunction = (...args: any[]) => any
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>
const makeAction = <T extends COMMON_ACTION, P>(type: T, ) => (payload: P) => ({ type, payload })

export const setName = makeAction<COMMON_ACTION.SET_NAME, string>(COMMON_ACTION.SET_NAME)
export const setAge = makeAction<COMMON_ACTION.SET_AGE, number>(COMMON_ACTION.SET_AGE)

const actions = {
	setAge,
	setName
}

export type ICommonAction = IActionUnion<typeof actions>
export default actions
