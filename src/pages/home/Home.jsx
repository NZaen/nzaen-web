import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center flex-col lg:flex-row">
          <div className="indicator">
            <span className="indicator-item badge badge-primary p-10 text-5xl font-b">
              Hello!
            </span>
            <img
              src="/src/assets/images/mypic.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="max-w-md">
            <h1 className="text-7xl font-bold">I'm Zaen</h1>
            <h2 className=" p-10 py-6 text-2xl">
              Your friendly neighbourhood Computer Science freshgrad based in
              Petaling Jaya
            </h2>
            <button className="btn btn-primary ">
              <Link to="/projects">Check out my projects</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen text-neutral-content" style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}>
            <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content flex">
       
          <div className=""> <h1 className="text-5xl font-bold pb-5  ">I can help you with</h1>
           

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-primary m-5"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
                Web Development
              </div>
              <div className="collapse-content">
                <ul>
                  <li>React.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow  bg-primary bg-opacity-40 m-5"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
                Software Engineering
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>Object Oriented Programming</li>
                </ul>
              </div>
            </div>


            <div
              tabIndex={0}
              className="collapse collapse-arrow  bg-primary   m-5"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
                General
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Windows</li>
                  <li>Linux</li>
                  <li>Microsoft Office</li>
                  <li>Microsoft PowerBI</li>
                  <li>Canva</li>
                </ul>
              </div>
            </div>
           

            <div
              tabIndex={0}
              className="collapse collapse-arrow  bg-primary bg-opacity-40  m-5"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">Others</div>
              <div className="collapse-content">
              <ul>
                  <li>Problem Solving</li>
                  <li>Experience Collaborating in a Team</li>
                  <li>Willing to Travel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

     
       
     
    </div>
  );
}

export default Home;
