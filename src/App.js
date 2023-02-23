import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { catSlice } from "./catSlice";
const App = () => {
  const cats = useSelector((state) => state.cats.cats);
  const isLoading=useSelector((state=>state.cats.isLoading))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(catSlice.actions.getCatsFetch());
    console.log("effect");
  }, [dispatch]);


  const handleSeeMore = () => {
    dispatch(catSlice.actions.seeMoreFetch());
  };
  const hideItem = () => {
    dispatch(catSlice.actions.getCatsFetch());
  };
  return (
    <ul>
      {cats?.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
      <button type="button" className="btn btn-primary btn-sm" onClick={handleSeeMore} style={{marginRight:"10px"}}>
      See More
      </button>
      <button type="button" className="btn btn-secondary btn-sm" onClick={hideItem}>
      Hide Item
      </button>
    </ul>
    // <div class="grid text-center">
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    //   <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    // </div>
  );
};

export default App;
