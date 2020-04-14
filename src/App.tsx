import React, { Fragment } from 'react'
import Boo from './components/Boo'
import Foo from './components/Foo'
import 'styles/App.sass'
import img from 'assets/images/electron-logo.svg'

const App = () =>  {
	return (
		<Fragment>
			<img src={img}/>
			<h1>Electron - React - Redux</h1>
			<Boo />
			<Foo />
		</Fragment>
	)
}

export default App
