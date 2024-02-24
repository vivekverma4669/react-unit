// import React from "react";
import MobileInfo from "./Components/mobileInfo/MobileInfo";
import Courses from "./Components/courses/Courses";
import Users from "./Components//users/Users";


import styles from "./App.module.css";

function App() {
  return(
    <div className={styles.container}>
      <h1 className={styles.heading}>
        This app contains different components like MobileInfo, Courses, Users.
      </h1>
      <MobileInfo/>
      <Courses/>
      <Users/>
    </div>
  );
}

export default App;
