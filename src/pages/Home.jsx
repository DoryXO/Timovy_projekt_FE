// import React from 'react';

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Navbar />
      </div>

      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home view of your application.</p>
      </div>
    </div>
  );
};

export default Home;