import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Categories = ({setCategory}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector((state) => state.categories)

  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <div className="categories">
    <h4>Categories</h4>
    {categories?.map((category, index) => (
      <div onClick={() => setCategory(category)} key={index} className="categories-tabs">{category}</div>
    ))}
  </div>;
};

export default Categories;
