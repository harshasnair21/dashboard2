import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Chart from "../../components/chart";
import List from "../../components/table/";
import "./index.scss";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="item"
                className="image"
              />
              <div className="details">
                <h1 className="itemName">Harsha</h1>
                <div className="itemDetail">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">harshas.nair21@gmail.com</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">+91 7559067997</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Address </span>
                  <span className="itemValue">
                    Lakshmisree (Ho) Calicut, Kerala
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
