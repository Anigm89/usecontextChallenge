import { Link } from 'react-router-dom';

function Profile(){
    return(
        <>
            <h1>Estás en Profile  </h1>
            <Link to={'/myjob'}>MyJob</Link>    
            <Link to={'/'}>home</Link>
        </>
    )
}

export default Profile;