import React from "react";
import {
  BsFillCartCheckFill,
  BsFillHeartFill,
  BsHeadset,
} from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";

const ProfilePage = () => {
  return (
    <div className="fluid-container">
      <h3 className="text-secondary ml3">
        Good afternoon<span className="active"> USER</span>
      </h3>
      <div className="row display-profile mt-4 pb-2">
        <div className="col-5 left btn border btn-lg btn-block ">
          <div className="col-3 display">
            <BsFillCartCheckFill className="icons" />
          </div>
          <div className="col-1 display"></div>
          <div className="col-8 display mytextalign">Orders</div>
        </div>
        <div className="col-5 right btn border btn-lg btn-block ">
          <div className="col-3 display">
            <BsFillHeartFill className="icons" />
          </div>
          <div className="col-9 display"> Wishlist</div>
        </div>
      </div>
      <div className="row display-profile mt-1">
        <div className="col-5 left btn border btn-lg btn-block ">
          <div className="col-3 display">
            <MdLocalOffer className="icons" />
          </div>
          <div className="col-9 display"> Coupons</div>
        </div>

        <div className="col-5 right btn border btn-lg btn-block ">
          <div className="col-3 display">
            <BsHeadset className="icons" />
          </div>
          <div className="col-9 display"> Support</div>
        </div>
      </div>
      <h3 className="mt-3 ml5"> Account Settings</h3>
      <div className="row p-3">
        <div className="col-md-6 nomargin offset-md-3">
          <ul className="list-group">
            <li className="list-group-item">
              <a href="/home" className="profile-link">
                Edit Profile
              </a>
            </li>
            <li className="list-group-item">
              <a href="/home" className="profile-link">
                Track Orders
              </a>
            </li>
            <li className="list-group-item">
              <a href="/home" className="profile-link">
                Manage Address
              </a>
            </li>
            <li className="list-group-item">
              <a href="/home" className="profile-link">
                cart
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="mt-3 ml5"> Privacy & Information</h3>

      <div className="row p-3 mb-2">
        <div className="col-md-6 nomargin offset-md-3">
          <ul className="list-group">
            <li className="list-group-item">
              <a href="/home" className="profile-link">
                Terms and Conditions
              </a>
            </li>
            <li className="list-group-item">
              <a href="/home" className="profile-link">
                FAQs
              </a>
            </li>
            <li className="list-group-item">
              <a href="/home" className="profile-link">
                Returns & Cancellations
              </a>
            </li>
            <li className="list-group-item">
              <a href="/home" className="profile-link">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
