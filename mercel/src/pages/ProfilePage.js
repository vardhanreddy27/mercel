import React from "react";
import {
  BsFillCartCheckFill,
  BsFillHeartFill,
  BsHeadset,
  BsFillPinMapFill,
  BsCart3,
} from "react-icons/bs";
import { TbTruckReturn, TbLogout } from "react-icons/tb";
import { RiFileEditLine } from "react-icons/ri";
import { MdLocalOffer, MdKeyboardArrowRight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiUserLocationLine } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
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
          <div className="col-8 display mytextalign">
            <p className="mb">Orders</p>
          </div>
        </div>
        <div className="col-5 right btn border btn-lg btn-block ">
          <div className="col-3 display">
            <BsFillHeartFill className="icons" />
          </div>
          <div className="col-9 display">
            <p className="mb">Wishlist</p>
          </div>
        </div>
      </div>
      <div className="row display-profile mt-1">
        <div className="col-5 left btn border btn-lg btn-block ">
          <div className="col-3 display">
            <MdLocalOffer className="icons" />
          </div>
          <div className="col-9 display">
            <p className="mb">Coupons</p>
          </div>
        </div>

        <div className="col-5 right btn border btn-lg btn-block ">
          <div className="col-3 display">
            <BsHeadset className="icons" />
          </div>
          <div className="col-9 display">
            <p className="mb">Support</p>
          </div>
        </div>
      </div>
      <h3 className="mt-3 ml5"> Account Settings</h3>
      <div className="row p-3">
        <div className="col-md-6 nomargin offset-md-3">
          <ul className="list-group">
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <CgProfile />
                </div>
                <div className="col-10">Edit Profile</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <BsFillPinMapFill />
                </div>
                <div className="col-10">Track Orders</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <RiUserLocationLine />
                </div>
                <div className="col-10">Manage Address</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <BsCart3 />
                </div>
                <div className="col-10">Cart</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="mt-3 ml5"> Privacy & Information</h3>

      <div className="row p-3">
        <div className="col-md-6 nomargin offset-md-3">
          <ul className="list-group">
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <RiFileEditLine />
                </div>
                <div className="col-10"> Terms and Conditions</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <FaQuestion />
                </div>
                <div className="col-10"> FAQs</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <TbTruckReturn />
                </div>
                <div className="col-10"> Returns & Cancellations</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <TbLogout />
                </div>
                <div className="col-10"> Logout</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <br />
            <br />
            <br />
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
