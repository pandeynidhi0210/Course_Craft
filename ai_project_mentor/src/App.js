import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses  from "./components/Allcourses";
import Conclude from "./components/Conclude";
import {Button,Container,Row,Col} from "reactstrap";
import Header from "./components/Header";
import Menus from"./components/Menus";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
    return (
      <div className="app-container">
        
        <BrowserRouter>
          <ToastContainer />
          <Container>
            <Header />
            <Row>
              <Col md={4}>
                <Menus /> {/* Assuming Menus is a component */}
              </Col>
              <Col md={8}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/conclude" element={<Conclude />} />
                  <Route path="/view-courses" element={<Allcourses />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </BrowserRouter>
      </div>
  );
}

export default App;

