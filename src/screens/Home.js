import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    fetch("http://localhost:5000/api/foodData", {
      method: "POST", // Specify the desired HTTP method
      // Additional options can be specified here, such as headers and body
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the retrieved data
        console.log(data[0], data[1]);
        setFoodItem(data[0]);
        setFoodCat(data[1]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem
                  .filter((item) => item.CategoryName === data.CategoryName)
                  .map((filterItems) => {
                    return (
                      <div
                        key={filterItems._id}
                        className="col-12 col-md-6 col-lg-3"
                      >
                        <Card
                          foodName={filterItems.name}
                          options={filterItems.options[0]}
                          ImgSrc={filterItems.img}
                        ></Card>
                      </div>
                    );
                  })}
              </div>
            );
          })
        ) : (
          <div> " "</div>
        )}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
