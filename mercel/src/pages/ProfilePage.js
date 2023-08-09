import React, { useState } from "react";
import { Button, Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import EditProfile from "../components/EditProfile";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../features/user/userSlice";
import {
  BsFillCartCheckFill,
  BsFillHeartFill,
  BsHeadset,
  BsFillPinMapFill,
  BsCart3,
} from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";
import { TbTruckReturn, TbLogout,TbLogin } from "react-icons/tb";
import { RiFileEditLine } from "react-icons/ri";
import { MdLocalOffer, MdKeyboardArrowRight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiUserLocationLine } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the setUser action to clear the user data in the Redux store
    dispatch(setUser(null));

    // Redirect the user to the login page or any other desired page
    navigate("/");
  };
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fluid-container">
      <h3 className="text-secondary ml3">
        Good afternoon<span className="active"> {user?.given_name || ""}</span>
      </h3>
      <div>
        <Dialog
          className="dialogbox"
          open={isOpen}
          onClose={toggleDialog}
          fullWidth
          maxWidth="md"
          PaperProps={{
            style: {
              position: "fixed",
              bottom: 0,
              left: 0,
              margin: 0,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            },
          }}
        >
          <Button className="backbtn" onClick={toggleDialog}>
            <IoChevronBackOutline size={30} className="backbtnicon" />
          </Button>
          <EditProfile />
        </Dialog>
      </div>
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
          <Link to="/Wishlist" >
          <div className="col-9 display">
            <p className="mb">Wishlist</p>
          </div></Link>
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
              <div className="profile-link">
                <div className="col-1 myflex">
                  <CgProfile />
                </div>
                <div className="col-10 font-weight-bold" onClick={toggleDialog}>
                  Edit Profile
                </div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </li>
            <li className="  list-group-item p-3">
              <a href="/home" className="profile-link">
                <div className="col-1 myflex">
                  <BsFillPinMapFill />
                </div>
                <div className="col-10 font-weight-bold">Track Orders</div>
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
                <div className="col-10 font-weight-bold">Manage Address</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/cart" className="profile-link">
                <div className="col-1 myflex">
                  <BsCart3 />
                </div>
                <div className="col-10 font-weight-bold">Cart</div>
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
              <a href="/" className="profile-link">
                <div className="col-1 myflex">
                  <RiFileEditLine />
                </div>
                <div className="col-10 font-weight-bold"> Terms and Conditions</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/" className="profile-link">
                <div className="col-1 myflex">
                  <FaQuestion />
                </div>
                <div className="col-10 font-weight-bold"> FAQs</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li className="  list-group-item p-3">
              <a href="/" className="profile-link">
                <div className="col-1 myflex">
                  <TbTruckReturn />
                </div>
                <div className="col-10 font-weight-bold"> Returns & Cancellations</div>
                <div className="col-1">
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            {user?
            <li
              className="profile-link  list-group-item p-3"
              onClick={handleLogout}
            >
              <div className="col-1 myflex">
                <TbLogout />
              </div>
              <div className="col-10 font-weight-bold"> Logout</div>
              <div className="col-1">
                <MdKeyboardArrowRight />
              </div>
            </li> :
            <li
            className="profile-link  list-group-item p-3">
            <div className="col-1 myflex">
              <TbLogin />
            </div>
            <div className="col-10 font-weight-bold"> Login</div>
            <a href="/Login" className="profile-link">
 <div className="col-1">
              <MdKeyboardArrowRight />
            </div>
            </a>

          </li> 
            
            }
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
