import React from "react";
import "./App.css";
import Nav from "./Nav";
import Produce from "./img/produce.jpg";
import Deli from "./img/deli2.jpg";
import Meats from "./img/meat1.jpg";
import Dairy from "./img/dairy.jpg";
import Bakery from "./img/bakery.jpg";
import Alcohol from "./img/alcohol.jpg";

function Departments() {
  return (
    <section className="">
      <Nav />
      <h1 className="heading">Departments</h1>
      <section className="departmentHolder">
        <h3 className="left alter size">Produce</h3>
        <p className="left ssize">
          At Lorenzo's Town and Country Market, our goal is to provide our
          customers with a wide selection of high-quality, nutritious and
          delicious farm-fresh produce year round at reasonable prices.
        </p>
        <div className="departmentPic">
          <img src={Produce} alt="produce isle" className="produce"></img>
        </div>

        <h3 className="left alter size">Deli</h3>
        <p className="left ssize">
          We offer a full service deli that serves hot and cold entrees for any
          occasion as well as soups, salads, and sandwiches. Our everyday
          customers rely on our deli to provide them with high quality, great
          tasting food to accommodate their busy schedules. <br /> <br />
          The Specialty Cheese Bar has a huge selection of cheese at better
          prices than most grocery or cheese specialty stores. We have Domestic,
          imported, hand made, raw, goat, sheep, cow, or water buffalo
          cheese--We've got just about any cheese you could ever want.
        </p>
        <div className="departmentPic">
          <img src={Deli} alt="deli section" className="produce"></img>
        </div>

        <h3 className="left alter size">Meats</h3>
        <p className="left ssize">
          We sell USDA Prime and USDA Choice Meats exclusively and have large
          selection of meat items. We will be happy to custom cut meat to your
          specifications.
        </p>
        <div className="departmentPic">
          <img src={Meats} alt="meat department" className="produce"></img>
        </div>

        <h3 className="left alter size">Dairy</h3>
        <p className="left ssize">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="departmentPic">
          <img src={Dairy} alt="dairy isle" className="produce"></img>
        </div>

        <h3 className="left alter size">Bakery</h3>
        <p className="right ssize">
          We have a wide assortment of Bakery items, including fresh-baked
          breads daily and a large variety artisan bread. Specialty cake orders
          are welcome for birthdays or special occasions. Just call in 24 hours
          ahead for your special cake orders.
        </p>
        <div className="departmentPic">
          <img src={Bakery} alt="bakery section" className="produce"></img>
        </div>

        <h3 className="left alter size">Wine and Beer</h3>
        <p className="right ssize">
          Come and check out our wine department. We have an amazing selection
          of local wines as well as imports. We also offer all of the best
          spirits and ice cold beer.
        </p>
        <div className="departmentPic">
          <img src={Alcohol} alt="bakery section" className="produce"></img>
        </div>
      </section>
    </section>
  );
}
export default Departments;
