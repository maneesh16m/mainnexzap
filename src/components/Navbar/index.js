import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
 // Import the logo


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (isHomePage) {
      scrollTo(id);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <img src="/images/nexlogo.png" alt="logo" style={{ width: '50px', height: 'auto' }} />
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink as={Link} to="/" onClick={(e) => handleClick(e, 'home')}>Home</NavLink>
          <NavLink href="#products" onClick={(e) => handleClick(e, 'products')}>Products</NavLink>
          <NavLink href="#services" onClick={(e) => handleClick(e, 'services')}>Services</NavLink>
          <NavLink href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink as={Link} to="/" onClick={(e) => handleClick(e, 'home')}>Home</MobileLink>
            <MobileLink href="#products" onClick={(e) => handleClick(e, 'products')}>Products</MobileLink>
            <MobileLink href="#services" onClick={(e) => handleClick(e, 'services')}>Services</MobileLink>
            <MobileLink href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar



// import React from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Import the "X" icon from FontAwesome
// import { useTheme } from '@mui/material'; // Assuming you're using Material UI theme
// import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Assuming you're using this LinkedIn icon

// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const theme = useTheme();

//   return (
//     <Nav>
//       <NavbarContainer>
//         <NavLogo to='/'>
//           <img src={nexlogo} alt="hi" className='w-[40px] h-[40px]'/>
//         </NavLogo>
//         <MobileIcon onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </MobileIcon>

//         <NavItems>
//           <NavLink href="#home">Home</NavLink>
//           <NavLink href='#products'>Products</NavLink>
//           <NavLink href='#services'>Services</NavLink>
//           <NavLink href='#contact'>Contact</NavLink>
//           <NavLink href="https://www.linkedin.com/company/104412613/admin/dashboard/" target="_blank"><LinkedInIcon/></NavLink>
//         </NavItems>
//         {/* <ButtonContainer>
          
//         </ButtonContainer> */}
//         {
//           isOpen &&
//           <MobileMenu isOpen={isOpen}>
//             <MobileLink href="#home" onClick={() => {
//               setIsOpen(!isOpen)
//             }}>About</MobileLink>
//             <MobileLink href='#products' onClick={() => {
//               setIsOpen(!isOpen)
//             }}>Skills</MobileLink>
//             <MobileLink href='#services' onClick={() => {
//               setIsOpen(!isOpen)
//             }}>Projects</MobileLink>
//             <MobileLink href='#contact' onClick={() => {
//               setIsOpen(!isOpen)
//             }}>Contact</MobileLink>
//             <MobileLink href="https://www.linkedin.com/company/nexzap/about/?viewAsMember=true" target="_blank">LinkedIn</MobileLink>
//           </MobileMenu>
//         }
//       </NavbarContainer>
//     </Nav>
//   );
// }

// export default Navbar;
