import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
            <h1>Bienvenido, esta es la home  </h1>
            <Link to={'/profile'}>Profile</Link>    
            <Link to={'/myjob'}>MiJob</Link>
        </>
    )
}

export default Home;