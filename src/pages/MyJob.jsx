import { Link } from 'react-router-dom';

function MyJob(){
    return(
        <>
            <h1>Esta es la página MyJob  </h1>
            <Link to={'/profile'}>Profile</Link>    
            <Link to={'/'}>home</Link>
        </>
    )
}

export default MyJob;