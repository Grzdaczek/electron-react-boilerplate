import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import commonActions from '../actions/common'
import { IState } from '../store'

const Nav: React.FunctionComponent = () => {
	
	const dispatch = useDispatch()
	const age = useSelector((state: IState) => state.common.age)
	const name = useSelector((state: IState) => state.common.name)
	const setAge = (payload: number) => dispatch(commonActions.setAge(payload))
	const setName = (payload: string) => dispatch(commonActions.setName(payload))

	return (
		<div>
			<label>name: </label>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
			<br />
			<label>age: </label>
			<input type='number' value={age} onChange={(e) => setAge(Number(e.target.value))}/>
		</div>
)
}

export default Nav
