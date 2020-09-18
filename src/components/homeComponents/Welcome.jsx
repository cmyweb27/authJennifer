import React from "react";

function Welcome() {
  return (
    <div className="chef-welcome">
      <div className="container">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh
          augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
          Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
        </p>
        <a href="#" className="btn btn-default-red">
          <i className="fa fa-file-text-o"></i> Read More
        </a>
      </div>
      {/* <!-- end .container --> */}
    </div>
  );
}

export default Welcome;
