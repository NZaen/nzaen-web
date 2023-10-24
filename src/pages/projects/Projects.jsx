import React from 'react'

function projects() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="hero min-h-screen bg-base-100 mt-5">
  <div className="hero-content p-10 flex flex-col w-full lg:flex-row lg:items-start ">

 

<div className="card bg-base-100 shadow-xl max-w-md lg:max-w-s m-5" >
  <figure><img src="/assets/images/evaluwayadmin.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Evaluway Admin</h2>
    <div className="card-actions justify-start">
    <div className="badge badge-outline">Final Year Project</div>
    <div className="badge badge-outline">React</div> 
      <div className="badge badge-outline">Firebase</div>
     
    </div>
    <p>Admin portion of Evaluway designed to facilitate
collaborative assessment of various types of media through the creation of
questionnaires for users in order to
generate real time analytics</p>
<p>Note : It is designed for desktop devices</p>
<p>admin@admin.com // admin123</p>


    <div className="card-actions justify-end">

      <button className='btn btn-primary mt-3' onClick={() => openInNewTab("https://evaluway-admin.web.app/")}>Enter Site</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 shadow-xl max-w-md lg:max-w-s m-5" >
  <figure><img src="/assets/images/evaluwayuser.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Evaluway User</h2>
    <div className="card-actions justify-start">
    <div className="badge badge-outline">Final Year Project</div>
    <div className="badge badge-outline">React</div> 
      <div className="badge badge-outline">Firebase</div>
     
    </div>
    <p>User portion of Evaluway designed to answer questionnaires 
      produced by administrators using Evaluway Admin as well as give feedback based on the overall usage of the system</p>
      <p>Note : It is designed for desktop devices</p>
    <p>user1@user.com // user123</p>
    <div className="card-actions justify-end">
      <button className='btn btn-primary mt-3' onClick={() => openInNewTab("https://evaluway-user.web.app/")}>Enter Site</button>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default projects