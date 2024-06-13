import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';

function RoutesApp(){
    return(
        <Router>
            <header>
                <div className='content'>
                    <nav>
                        <Link to={'/'}>Home</Link>    
                        <Link to={'/profile'}>Profile</Link>    
                        <Link to={'/myjob'}>MiJob</Link>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/myjob'  element={<MyJob />} />
            </Routes>
        </Router>
    )
}
export default RoutesApp;
