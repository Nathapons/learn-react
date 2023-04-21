import Logo from '../image/logo.png';

function Header() {
    return (
        <nav>
            <img src={Logo} alt='logo' />
            <a href='/'>หน้าแรก</a>
        </nav>
    )
}

export default Header;