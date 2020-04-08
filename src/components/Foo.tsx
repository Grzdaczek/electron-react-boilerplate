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
		<nav>
			<table>
				<tbody>
					<tr>
						<td>name:</td>
						<td>{name}</td>
					</tr>				
					<tr>
						<td>age:</td>
						<td>{age}</td>
					</tr>
				</tbody>
			</table>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
			<input type='number' value={age} onChange={(e) => setAge(Number(e.target.value))}/>
		</nav>
	)
}

export default Nav
