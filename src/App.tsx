import React, { Fragment } from 'react'
import Boo from './components/Boo'
import Foo from './components/Foo'
// import './styles/App.sass'
// import img from 'src/assets/images/electron-logo.svg'

const App: React.FunctionComponent = () =>  {
	return (
		<Fragment>
			{/* <img src={img}/> */}
			<h1>Electron - React - Redux</h1>
			<Boo />
			<Foo />
		</Fragment>
	)
}

export default App
