import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={require('../Images/Logo/Logo1.png')} />
            </div>

            <div className="links">
                <ul>
                    <Link to={'/'}><li>الرئيسية</li></Link>
                    <Link to={'#'}><li>من نحن</li></Link>
                </ul>

                <div className="profile">
                    <img src={require('../Images/Icons/user.png')} />
                </div>
            </div>
        </header>
    )
}

export default Header;