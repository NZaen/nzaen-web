import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <div className=" items-center bg-center min-h-screen lg:min-w-ful pt-20 lg:hero">
        <div className="hero-content text-center flex-col lg:flex-row">
          <div className="indicator ">
            <span className="indicator-item indicator-center badge badge-primary p-6 lg:p-10 text-3xl lg:text-5xl font-b sm:hidden shadow-lg">
              Hello!
            </span>
            <span className="indicator-item badge badge-primary p-6 lg:p-10 text-3xl lg:text-5xl font-b invisible sm:visible shadow-lg">
              Hello!
            </span>
            <img
              src="assets/images/mypic.jpg"
              className=" max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="max-w-md">
            <h1 className="text-7xl font-bold">I'm Zaen</h1>
            <h2 className=" p-10 py-6 text-2xl">
              Your friendly neighbourhood Computer Science freshgrad based in
              Petaling Jaya
            </h2>
            <button className="btn btn-primary shadow-lg ">
              <Link to="/projects">Check out my projects</Link>
            </button>
          </div>
        </div>
      </div>


      <div
        className="hero min-h-screen text-neutral-content lg:min-w-full "
        style={{
          backgroundImage:
            "url(assets/images/dinner.jpg)",
            backgroundPosition: "right", // You can adjust this property too
        }}
      >



        
        <div className="hero-overlay bg-opacity-80"></div>

        <div className="hero-content  flex flex-col w-full xl:flex-row xl:items-start">
          <div className="m-5 w-2/3 xl:w-1/4">
            {" "}
            <h1 className="text-5xl font-bold pb-5">Skills</h1>
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-primary m-5 shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
                Web Development
              </div>
              <div className="collapse-content">
                <ul>
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Firebase</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow  bg-primary bg-opacity-40 m-5 shadow-lg"
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
              className="collapse collapse-arrow  bg-primary   m-5 shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">General</div>
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
              className="collapse collapse-arrow  bg-primary bg-opacity-40  m-5 shadow-lg"
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

          <div className="m-5 w-2/3 xl:w-1/4">
            {" "}
            <h1 className="text-5xl font-bold pb-5  ">Education</h1>
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-primary m-5"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
                Foundation in IT
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Multimedia University, Cyberjaya</li>
                  <li>April 2019 - April 2020</li>
                  <li>CGPA 3.27</li>
                </ul>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow  bg-primary bg-opacity-40 m-5 shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
                Bachelor of Computer Science (Hons.)
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Multimedia University, Cyberjaya</li>
                  <li>April 2020 - August 2023</li>
                  <li>CGPA 3.65</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="m-5 w-2/3 xl:w-1/4">
            {" "}
            <h1 className="text-5xl font-bold pb-5  ">Certificates</h1>
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-primary m-5 shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
              Huawei HCIA : AI
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Issued Dec 2021</li>
                  <li>Expires Dec 2024</li>
                  <li>Credential ID</li>
                  <li>010102001495808462</li>
                  <li>931395214</li>
                </ul>
              </div>
            </div>
           

            <div
              tabIndex={0}
              className="collapse collapse-arrow  bg-primary bg-opacity-40 m-5 shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
              MTA: Introduction to Programming Using Java
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Issued Dec 2021</li>
                  <li>Credential ID I088-7741</li>
                </ul>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow  bg-primary  m-5 shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
              MTA: Networking Fundamentals
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Issued Dec 2021</li>
                  <li>Credential ID I097-0585</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="m-5 w-2/3 xl:w-1/4">
            {" "}
            <h1 className="text-5xl font-bold pb-5  ">Experiences</h1>
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-primary m-5 shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold">
                Network Maintenance Intern
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Huawei Technologies, Kuala Lumpur</li>
                  <li>May 2022 – August 2022</li>
                  <div className="ml-2">
                  <li className="m-2">
                    1) Studied maintenance procedure related to the service
                    operation that cause changes to the customer live network
                    device (software/hardware), live network structure and live
                    network configuration
                  </li>
                  <li className="m-2">2) Practiced Network Safety Policies in daily operation.</li>
                  <li className="m-2">
                    3) Assisted Celcom Team with developing a dashboard using
                    Microsoft Power B
                  </li>
                  <li className="m-2">
                   4)  Merged and organized customer information spreadsheets using
                    Microsoft Excel
                  </li>
                  <li className="m-2">
                    5) Got to know internal tools for Huawei dashboard creation as
                    well as implementation with Python and SQL
                  </li>
                  </div>
                  
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
