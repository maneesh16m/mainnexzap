import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Products  from "./components/NexzapProducts/index.js";
import NexzapServices from "./components/NexzapServices/index.js";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";
import Wallet from "./pages/Wallet";
import Privatebot from "./pages/Privatebot";
import Tagflo from "./pages/Tagflo";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
`

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Body>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Wrapper>
                  <Products />
                </Wrapper>
                <NexzapServices openModal={openModal} setOpenModal={setOpenModal} />
                <Wrapper>
                  <Contact />
                </Wrapper>
              </>
            } />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/privatebot" element={<Privatebot />} />
            <Route path="/tagflo" element={<Tagflo />} />
          </Routes>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;