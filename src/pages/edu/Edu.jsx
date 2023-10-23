import React from "react";

function Edu() {
  return (
    <div className="min-h-screen">
      <div className="p-10">
        <h1 className="text-4xl font-bold text-center">
          Let me tell you my education history,
        </h1>

        <hr className="m-20"></hr>

        <h1 className="text-3xl font-bold text-center">
          2014 - 2018
        </h1>
         <h1 className="text-3xl font-bold text-center">
          SMK Sultan Abdul Samad
        </h1>

        
        <div className="flex flex-col w-full lg:flex-row">   

        <div className="card card-compact max-w-md bg-base-100 shadow-xl  m-10">
          <figure>
            <img src="/src/assets/images/SPM.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">SPM Cert</h2>
            <p>Not sure what happened with Chem there, but hey, still proud of that A- for Add Math and Physics</p>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div> 
        
        <h2 className="p-10 pb-0 text-xl max-w-4xl">
          So I grew up in Petaling Jaya and went to SMK Sultan Abdull Samad to get
          my secondary education. I had a lot of fun and made a ton of friends. 
          Looking back, my grades were never the best in class but I definitely already had a burning passion for STEM and all things IT, even back then. 
        </h2>

     

        </div>

        <hr className="m-20"></hr>

        <h1 className="text-3xl font-bold text-center">
          2019 
        </h1>
        <h1 className="text-3xl font-bold text-center">
          Foundation in IT, Multimedia University
        </h1>

        <div className="flex flex-col w-full lg:flex-row">   

        <div className="card card-compact max-w-md bg-base-100 shadow-xl  m-10">
          <figure>
            <img src="/src/assets/images/foundation.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Foundation Cert</h2>
            <p>Not bad, not bad</p>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div> 

        <h2 className=" p-10 text-xl max-w-4xl">
          Skip to 2019, I had just finished my graduation, and there I was ready to face the adult world, or at least I thought I was.
          Following my brother's footsteps, and my pre-existing passions for IT, I enrolled in MMU to pursuit a Foundation in IT.
          It certainly took a bit of time to get used to the lifestyle change, but once I did, there was no looking back.
          At last, Foundation was settled and I finally proceeded to pursuit my degree. It was about to get much harder sooner than I thought,
          but it all would be worth it in the end.
        </h2>

        </div>
     

        <h2 className=" p-10 pt-0 text-xl">
          
        </h2>

        <hr className="m-20"></hr>

        <h1 className="text-3xl font-bold text-center">
          2020 - 2023
        </h1>
        <h1 className="text-3xl font-bold text-center">
        Bachelor of Computer Science (Software Engineering), Multimedia University
        </h1>
         
        <h2 className=" p-10 text-xl">
          Completely unexpectedly, COVID struck the country and the government established a country-wide
          lockdown. As a result, I had to adapt to a new online class based learning without the physical
          presense of a lecture and my fellow classmates. Fortunately, despite everything that was going on, academically things continued to go well, and I even got a scholarship Huawei for my good grades. Alongside that, I 
          was also given the opportunity to complete an internship with them at their offices. Towards the end, the country had even recovered well 
          enough from the pandemic for us to return to campus again. Alas, all good things come to an end, and as I finished my
          final trimester, I ended my chapter at MMU with a final CGPA of 3.65
        </h2>

        
      


        <div className="flex flex-col w-full lg:flex-row">   
        <div className="card card-compact max-w-md bg-base-100 shadow-xl  m-10">
          <figure>
            <img src="/src/assets/images/undergrad1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Trim 1-4</h2>
            <p>Better</p>
          </div>
        </div>

        
        <div className="card card-compact max-w-md bg-base-100 shadow-xl  m-10">
          <figure>
            <img src="/src/assets/images/undergrad2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Trim 5-8</h2>
            <p>Much better</p>
          </div>
        </div>
        <div className="card card-compact max-w-md bg-base-100 shadow-xl  m-10">
          <figure>
            <img src="/src/assets/images/finaldegree.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Award of Degree</h2>
            <p>At last</p>
          </div>
        </div>

        

       
        
        </div>

       
     
      </div>
    </div>
  );
}

export default Edu;
