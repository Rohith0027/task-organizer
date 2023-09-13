import './App.css';
import Header from './components/header/Header';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import Dashboard from './pages/dashboard/Dashboard';
import RequireAuth from './utils/RequireAuth';
import { useSelector } from 'react-redux';
import EditTask from './components/taskmanager/EditTask';

function App() {
	const { auth } = useSelector((state) => ({ ...state }));
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='https://task-organizer-0808.onrender.com/signin'
						element={!auth.currentUser ? <Signin /> : <Dashboard />}
					/>
					<Route
						path='https://task-organizer-0808.onrender.com/signup'
						element={!auth.currentUser ? <Signup /> : <Dashboard />}
					/>
					<Route
						path='https://task-organizer-0808.onrender.com/taskmanager'
						element={
							<RequireAuth>
								<TaskManager />
							</RequireAuth>
						}
					/>
					<Route
						path='https://task-organizer-0808.onrender.com/dashboard'
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
					/>
					<Route path='https://task-organizer-0808.onrender.com/edittask/:id' element={<EditTask />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
