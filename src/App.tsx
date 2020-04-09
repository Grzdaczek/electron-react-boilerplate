import React, { Fragment } from 'react'
import Boo from './components/Boo'
import Foo from './components/Foo'
import './styles/App.sass'

const App: React.FunctionComponent = () =>  {
	return (
		<Fragment>
			<Boo />
			<Foo />
		</Fragment>
	)
}

export default App
