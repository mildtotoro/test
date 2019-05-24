import React, { Fragment } from 'react';
import img from '../assets/images/profile.JPG';

// const findXYZ = (amount = 7) => {
//   let result = [];
//   let number = 3;
//   for (let i = 0; i <= amount; i++) {
//     number = number + (2*i);
//     result.push(number);
//   }

//   return result.map(n => {
//     return n+","
//   })
// }

function profile() {
  return <Fragment>
    {/* {findXYZ()} */}
    <div className="container">
      <div className="row ">
        <div className="col-12 col-sm-4">
          <img className="img-fluid rounded-circle p-5 py-sm-4 px-sm-0 py-md-5 p-lg-5" src={img} alt="" />
        </div>
        <div className="col-12 col-sm-8 py-1 py-sm-4 py-md-5">
          <h2 className="">Pimrampha Mahikhod</h2>
          <h4 className="pb-3 lora">Front End Developer</h4>
          <div className="h5">
            <div className="pb-2"><span className="pr-3"><i class="far fa-envelope"></i></span> pimrampha.m@gmail.com</div>
            <div className="pb-2"><span className="pr-3"><i class="fab fa-github"></i></span> <a target="_blank" href="https://github.com/mildtotoro">github.com/mildtotoro</a></div>
            <div className=""><span className="pr-4"><i class="fas fa-mobile-alt"></i></span> 087 546 3412</div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-5 bg-secondary">
    </div>

    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="h1 pb-3">Work Experience</div>
          <div className="h4 font-italic lora ">Lullalab <span className="text-muted h6">(05/2017 - 03/2019)</span></div>
          <span className="h6 text-dark font-italic">Front End Developer</span>
          <p>
            Create each web by using React, Vue.js, Scss, Laraval, Phalcon, Bootstrap, Ant Design, call api to display data and Provide the required information to correct pattern send to backend and test
          </p>
          <div className="h4 font-italic lora pt-2">We are InnoSense <span className="text-muted h6">(03/2016 - 02/2017)</span></div>
          <span className="h6 text-dark font-italic">Wordpress Front end Developer</span>
          <p>
            Use Wordpress Theme such as Uncode, Jupiter, Burst and Newspaper to create web pages based on design and add all the information include use the plugin that is required for each web site, such as wooCommerce, contact form 7, Slider Revolution, Yoast SEO.
          </p>
          <div className="h4 font-italic lora pt-2">Softdebut <span className="text-muted h6">(05/2015 - 01/2016)</span></div>
          <span className="h6 text-dark font-italic">Front End Developer</span>
          <p>
            Create the webs by use Kentico. Add all the information. Add various widgets.
          </p>
        </div>
      </div>
    </div>

    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="h1 pb-3">Education</div>
          <div className="h4 font-italic lora ">Bachelor of science (Applied Computer Science)</div>
          <span className="h6 text-dark font-italic">King Mongkut’s University Of Technology Thonburi</span>
          <div className="h4 font-italic lora pt-3">Science - Math</div>
          <span className="h6 text-dark font-italic">Chinorot Wittayalai School</span>
        </div>
      </div>
    </div>

    <div className=" py-5 bg-secondary">
      <div className="container">
        <div className="h1 pb-3">Skill</div>
        <div class="btn btn-primary text-light btn-sm mr-2">React</div>
        <div class="btn btn-primary text-light btn-sm mr-2">Vue.js</div>
        <div class="btn btn-primary text-light btn-sm mr-2">Scss</div>
        <div class="btn btn-primary text-light btn-sm mr-2">Laravel</div>
        <div class="btn btn-primary text-light btn-sm mr-2">Node.js</div>
        <div class="btn btn-primary text-light btn-sm mr-2">HTML/CSS</div>
        <div class="btn btn-primary text-light btn-sm">jQuery</div>
      </div>
    </div>

    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="h1 pb-3">Activities</div>
          <p>
            SPIDER Camp-Bravo by School of Information Technology (Join) (2014)
          </p>
          <p>
            Sci-camps by The Science Faculty's Student Association (Staff)
          </p>
          <p>
            The Bubble Programming Contest #1 at Computer Engineering (Join)
          </p>
          <p>
            Tue-pun-ruk camp by Tue Club (Staff)
          </p>
        </div>
      </div>
    </div>
  </Fragment>
}

export default profile;