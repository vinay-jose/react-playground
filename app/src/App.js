import Store from "./components/Store";
import Product from "./components/Product";
import AppPlayGround from './AppPlayGround';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=> {
    return(
        <Router>
            <Routes>
                <Route path ="/" element={<Store/>}/>
                <Route path ="/product/:id" element={<Product/>}/>
                <Route path ="/playground" element={ <AppPlayGround/> }/>
            </Routes>
        </Router>
    )
};

export default App;