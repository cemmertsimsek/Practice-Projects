import React, { useState } from "react";
import SliderComponent from "../components/home/SliderComponent";
import Sorting from "../components/home/Sorting";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
const Home = () => {

  const [sort, setSort] = useState("")
  const [category, setCategory] = useState("")



  return (
    <div>
      <SliderComponent />
      <Sorting setSort={setSort} />
      <div className="section-products">
        <Categories setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
