import './App.css';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import splashImage from "./splash.png"
import StoreListing from './components/StoreListing';

const Splash = styled.div`
  width: 100vw;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${splashImage});
  background-colo: #dfeed6;
  position: absolute;
  left: 0;
  top: 40px;
  right: 0;
  z-index: -1;
`

const StyedStoreListing = styled(StoreListing)`
position: relative;
top: 600px;
`

function App() {
  return (
    <>
      <TopBar/>
      <StyedStoreListing/>
      <Splash/>
    </>
  );
}

export default App;
