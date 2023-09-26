import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { Link } from "react-router-dom";
import DashBoardItem from "./DashBoardItem";

const Dashboard = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">My Wallets</h1>
            <br />
            <div className="btn-group">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Create New
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/createwallet">Wallet</Dropdown.Item>
                  <Dropdown.Item href="/createtransaction">
                    Transaction
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <br />
            <div className="card text-center">
              <div className="card-header bg-success text-white">
                <h4>Current Balance (Total)</h4>
                <h1>Rs. 27000</h1>
              </div>
            </div>
            <hr />
            <DashBoardItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
