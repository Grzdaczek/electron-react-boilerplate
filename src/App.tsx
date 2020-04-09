import React, { Fragment } from 'react'
import Boo from './components/Boo'
import Foo from './components/Foo'
import './styles/App.sass'
import img from 'src/assets/images/img.jpg'

const App: React.FunctionComponent = () =>  {
	return (
		<Fragment>
			<Boo />
			<Foo />
			<img src={img} />
		</Fragment>
	)
}

export default App
