import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/home/Home'
import Menu from './components/menu/Menu'
import ContextLoginManager from './ContextLoginManager'
import ContextProductManager from './ContextProductManager'

import PrivateRoute from './components/private-router/PrivateRouter'
import Create from './containers/create/Create'
import Remove from './containers/remove/Remove'
import Edit from './containers/edit/Edit'
import Listado from './components/listado/Listado'
import Login from './containers/login/Login'
import Detail from './containers/detail/Detail'

function App() {
	return (
		<ContextLoginManager>
			<ContextProductManager>
				<div className="container">
					<Router>
						<Menu />

						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/listado">
								<Listado />
							</Route>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/detail/:id">
								<Detail />
							</Route>

							<PrivateRoute path="/create" exact component={Create} />
							<PrivateRoute path="/remove/:id" exact component={Remove} />
							<PrivateRoute path="/edit/:id" exact component={Edit} />
							{/* <PrivateRoute path="/detail/:id" exact component={Detail} /> */}
						</Switch>
					</Router>
				</div>
			</ContextProductManager>
		</ContextLoginManager>
	)
}

export default App
