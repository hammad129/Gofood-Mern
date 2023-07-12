import React from "react";
import { Link } from "react-router-dom";
export default function Card(props) {
  let option = props.options;
  let priceOption = Object.keys(option);
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeigh: "360px" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">product descriptiionn</p>
          <Link to="/" className="btn btn-primary">
            Go somewhere
          </Link>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded ">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded">
              {priceOption.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
