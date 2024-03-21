import CarouselComponent from "./Carousel";

const About = () => {
  return (
    <>
      <div className="Backg">
        <h1 className="text-center m-5" id="abtfoody">
          Foody me
        </h1>

        <p className="paragraph">
          <span class="highlight">Welcome to Foody-Me,</span> your go-to
          destination for hassle-free food delivery. Our journey began with a
          simple yet ambitious vision: to connect hungry individuals with their
          favorite cuisines from the comfort of their homes. Just like a
          reliable friend who always knows what you're craving, we've curated a
          diverse selection of restaurants and dishes to cater to every palate.
          At Foody-Me, we pride ourselves on not just being a food delivery
          platform, but a culinary experience enhancer. Our dedicated team works
          tirelessly to ensure that your cravings are met with speed, accuracy,
          and utmost care. From sizzling street food to gourmet delicacies, we
          bring the culinary delights of your city to your doorstep. We
          understand that your time is precious, which is why our user-friendly
          interface guarantees a seamless browsing and ordering process. With
          real-time order tracking and timely notifications, you're always in
          the loop about the status of your delivery. Our commitment to data
          security means you can indulge in your favorite meals without a worry.
          Whether you're a food enthusiast exploring new flavors or a busy
          professional seeking convenient dining solutions,
          <span class="highlight">Foody-Me </span>is here to serve you. Join us
          on this delectable journey as we redefine how you experience food
          delivery. Thank you for choosing us to satisfy your cravings, one
          order at a time.
        </p>
      </div>
      <br />
      <br />
      <CarouselComponent />
      <br />
      <div className="breakdiv">Explore More</div>
    </>
  );
};

export default About;

// import React from "react";
// import {ChildClass} from "../childClass";

// class ParentClass extends React.Component
// {
//     constructor(number){
//         super(number)
//         this.state= {studName: "Punam" , marks:50} ;
//     }

//     render(){
//         console.log("I am render");
//         return(
//         <div className="newclass">
//         <h1>I am a new class based component</h1>
//         <ChildClass/>
//         </div>
//     )
// }
// }

// export default ParentClass;
