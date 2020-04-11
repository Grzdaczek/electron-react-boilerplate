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
		<div>
			<h2>Btw. His name is {props.name}, and he's {props.age} yers old.</h2>
		</div>
	)
}

export default compose( connect(mapStateToProps, mapDispatchToProps)(Nav) )
