import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Container2 from "./check/Container2";
import Container1 from "./check/Container1";
import { Component } from "react";

import Carddetails from "./components/Carddetails";

// import history from "./utils/history";

import Header from "./components/Header";

class Routess extends Component {
    render(){
        return(
            <Router >
                <Header />
                <Routes > 
                    
                <Route path="/" element={<Container1 />} />
                <Route path="/post/:id" element={<Carddetails />} />
                <Route path="/container2" element={<Container2 />} />
                </Routes>
            </Router>
        )
    }
}

export default Routess;