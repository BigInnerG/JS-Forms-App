import { Link } from 'react-router-dom';

function NavBar(){

    return(

        <>
        <nav>
            <Link to='/'>Home</Link> | 
            <Link to='/simpleform'>Simple Form</Link> |
            <Link to='/loginform'> Login Form</Link> |
            <Link to='/registerform'> Register Form</Link> |
            <Link to='/multiform'> MultiForm</Link> |
        </nav>
        </>

    );

}
export default NavBar;