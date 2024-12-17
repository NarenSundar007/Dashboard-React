import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import CardTile from "./CardTile";
import Footer from "./Footer";
import SmallTile from "./SmallTile";
import Member1 from "./Member1";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactMe from "./ContactMe";
import Spacer from "./Spacer";



function App() {
  return (
    <div className="app">
      {/* Fixed Navbar */}
      <header>
        <NavBar />
      </header>

      {/* Sidebar and Content Container */}
      <div className="layout">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="main-content">
          <h1 className="Heading1">Intel-IoT Dashboard</h1>
          <p style={{textAlign: "center"}}>Checkout the latest announcements of the upcoming Events!</p>
          <div className="Container-card" ><CardTile />
          <CardTile />
          <CardTile /></div>
          <Spacer/>
          <Spacer/>
          <div id="about"></div>
          <Spacer/>
          <Spacer/>
          <hr className="featurette-divider"></hr>
          <SmallTile  />
          <div id="members"></div>
          <hr className="featurette-divider"></hr>
          <Spacer/>
          <Spacer/>
          <h2 id='members' className="Heading2" style={{textAlign: 'center'}}>Members of our Club</h2>
          <div className="Container-card "><Member1 /></div>
          <div id="contact"></div>
          <Spacer/>
          <ContactMe />
          
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
