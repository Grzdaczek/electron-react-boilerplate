import React, { Dispatch } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setName, ICommonAction, setAge } from '../actions/common'
import { IState } from '../store'

interface INavProps extends IStateProps, IDispatchProps {

}

interface IStateProps {
	name: string,
	age: number
}

interface IDispatchProps {
	onSetName(e: React.ChangeEvent<HTMLInputElement>) :void
	onSetAge(e: React.ChangeEvent<HTMLInputElement>) :void
}

const mapStateToProps = (state: IState): IStateProps => ({
	name: state.common.name,
	age: state.common.age
})

const mapDispatchToProps = (dispatch: Dispatch<ICommonAction>): IDispatchProps => ({
	onSetName: (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setName(e.target.value))
	},
	onSetAge: (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setAge( Number(e.target.value) ))
	}
})

const Nav: React.FunctionComponent<INavProps> = (props) => {
	return (
		<nav>
			<table>
				<tbody>
					<tr>
						<td>name:</td>
						<td>{props.name}</td>
					</tr>				
					<tr>
						<td>age:</td>
						<td>{props.age}</td>
					</tr>
				</tbody>
			</table>
			<input type='text' value={props.name} onChange={props.onSetName}/>
			<input type='number' value={props.age} onChange={props.onSetAge}/>
		</nav>
	)
}

export default compose( connect(mapStateToProps, mapDispatchToProps)(Nav) )
