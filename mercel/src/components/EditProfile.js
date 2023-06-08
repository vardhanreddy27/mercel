import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function EditProfile() {
  const [selectedGender, setSelectedGender] = useState("Select Gender");

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="m-3">
      <div className="m-3 d-flex justify-content-center align-items-center">
        <div className="rounded-circle border">
          <img
            src="./profile.png"
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
      <div className="m-3">
        <input
          type="text"
          className="form-control border shadow-sm"
          id="formGroupExampleInput"
          placeholder="Your name"
        />
      </div>

      <div className="m-3">
        <input
          type="email"
          className="form-control border shadow-sm"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Your email id"
        />
      </div>
      <div className="m-3">
        <input
          type="tel"
          className="form-control border shadow-sm"
          id="mobile number"
          placeholder="Your phone number"
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
