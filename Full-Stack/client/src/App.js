import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import Aside from './components/Aside';
import Right from './components/Right';
import Main from './components/Main';

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Aside />
				<Main />
				<Right />
			</div>
		</BrowserRouter>
	);
}

export default App;
