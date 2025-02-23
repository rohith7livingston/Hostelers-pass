import React from "react";
import Navbar from "../components/Navbar";
import RecentActivity from "./../components/RecentActivity";
import "./../stylesheet/StudentHome.css";

const StudentHome = () => {
 
  return (
    <div>
      <Navbar />
      <div className="description-student">
        <div className="description">
          <h1 style={{ fontWeight: 350 }}>Apply Leave</h1>
          <h1>
            <b>Consider it Done</b>
          </h1>
          <button className="apply-leave">Apply Leave</button>
        </div>
      </div>
      <div className="recent-activity">
        <RecentActivity />
      </div>
    </div>
  );
};

export default StudentHome;
