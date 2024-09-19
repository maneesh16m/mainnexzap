import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems,  MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'

import { FaBars, FaTimes } from 'react-icons/fa';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import nexlogo from '../../images/nexlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <img src={nexlogo} alt="hi" className='w-[40px] h-[40px]'/>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href='#products'>Products</NavLink>
          <NavLink href='#services'>Services</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
          <NavLink href="https://www.linkedin.com/company/104412613/admin/dashboard/" target="_blank"><LinkedInIcon/></NavLink>
        </NavItems>
        {/* <ButtonContainer>
          
        </ButtonContainer> */}
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#home" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#products' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#services' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <MobileLink href="https://www.linkedin.com/company/nexzap/about/?viewAsMember=true" target="_blank">LinkedIn</MobileLink>
          </MobileMenu>
        }
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
//           <img src={nexlogo} alt="hi" className='w-[40px] h-[40px]' />
//         </NavLogo>

//         {/* Hamburger or X icon based on isOpen state */}
//         <MobileIcon onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </MobileIcon>

//         <NavItems>
//           <NavLink href="#home">Home</NavLink>
//           <NavLink href='#products'>Products</NavLink>
//           <NavLink href='#services'>Services</NavLink>
//           <NavLink href='#contact'>Contact</NavLink>
//           <NavLink href="https://www.linkedin.com/company/104412613/admin/dashboard/" target="_blank">
//             <LinkedInIcon />
//           </NavLink>
//         </NavItems>

//         {
//           isOpen && (
//             <MobileMenu isOpen={isOpen}>
//               <MobileLink href="#home" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
//               <MobileLink href='#products' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
//               <MobileLink href='#services' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
//               <MobileLink href='#contact' onClick={() => setIsOpen(!isOpen)}>Contact</MobileLink>
//               <MobileLink href="https://www.linkedin.com/company/nexzap/about/?viewAsMember=true" target="_blank">
//                 LinkedIn
//               </MobileLink>
//             </MobileMenu>
//           )
//         }
//       </NavbarContainer>
//     </Nav>
//   );
// }

// export default Navbar;
