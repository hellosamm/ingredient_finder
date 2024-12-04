import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import Search from "../components/Search";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  </Router>
);
