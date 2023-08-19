import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import Back from '../components/Back';
import { Link } from "react-router-dom";

function EditProfile() {
  const user = useSelector((state) => state.user.user);
  const [selectedGender, setSelectedGender] = useState("Select Gender");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (!user) {
    return (
      <>
        <div className='cenb'>
          <img src="https://i.pinimg.com/originals/e5/07/d7/e507d704d4b6fdcb17116762fcd99acd.gif" className="loginimg2" alt="login" />
          <Link to="/Login"  className="contents">
            <button type="button" className="btn backgroundcolor btn-lg btn-block">Login or Signup</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="m-3">
      <div className="d-flex justify-content-center align-items-center">
        <div className="rounded-circle">
          <img
            src={user.picture}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
      <div className="m-3 mt-4">
        <input
          type="text"
          className="form-control border shadow-sm"
          id="formGroupExampleInput"
          value={user.given_name}
        />
      </div>

      <div className="m-3">
        <input
          type="email"
          className="form-control border shadow-sm"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={user.email}
        />
      </div>
      <div className="m-3">
        <input
          type="tel"
          className="form-control border shadow-sm"
          id="mobile number"
          placeholder="Your mobile number"
        />
      </div>
      <div className="m-3">
        <DropdownButton
          id="genderDropdown"
          variant="light"
          className="custom-dropdown-button"
          title={selectedGender}
        >
          <Dropdown.Item onClick={() => handleGenderSelect("Male")}>
            Male
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleGenderSelect("Female")}>
            Female
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleGenderSelect("Other")}>
            Other
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="m-3">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select your Date of Birth"
          className="form-control border shadow-sm"
        />
      </div>
      <div className="m-3">
        <button
          type="button"
          className="btn w100 shadow border btn-lg background btn-block"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default EditProfile;