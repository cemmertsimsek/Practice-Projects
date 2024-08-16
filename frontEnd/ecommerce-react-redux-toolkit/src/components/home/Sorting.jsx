import React from "react";

const Sorting = ({setSort}) => {
  return (
    <div className="sort">
      <select onChange={e => setSort(e.target.value)} name="" id="">
        <option value="inc">Fiyata Göre Artan</option>
        <option value="dec">Fiyata Göre Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
