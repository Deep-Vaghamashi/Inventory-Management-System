import { Link,Outlet } from 'react-router-dom';
import Logo from './Kichoplast.jpg'

const Layout = ()=>{
return(
    <>
    <div className='main container-fluid'>
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" width='30px' style={{borderRadius:'25%'}} className="d-inline-block align-text-top"/>
                    Kichoplast
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="https://www.meesho.com/GALAXYMANUFACTURERS?_ms=3.0.3">Shopping</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Help</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div className='row justify-content-center'>
            <div className='col-10'>
                <Outlet/>
            </div>
        </div>
    </div>
    </>
)};
export default Layout;

