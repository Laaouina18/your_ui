import React from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Categories from "../pages/categories";
import Register from "../pages/register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Header=()=>{



return (
	<div>
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
		<Route path="/register" element={<Register />} />
		<Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>

	</div>
)




}
export default Header;