import React, { useState } from "react";

export default function SignUp() {
  const [SignUpForm, setSignUpForm] = useState({
    FirstName: "",
    LastName: "",
    career: "",
    Email: "",
    username: "",
    AgeGroup: "",
    Password: "",
    confirmPassword: "",
    isCheck: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(event: any) {
    const { name, value, type, checked } = event.target;
    setSignUpForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function handleSubmission(event: React.FormEvent) {
    event.preventDefault();

    if (SignUpForm.FirstName === "") {
      setErrorMessage("Enter your firstname");
    } else if (SignUpForm.LastName === "") {
      setErrorMessage("Enter your lastname");
    } else if (SignUpForm.Email === "") {
      setErrorMessage("Enter your email address");
    } else if (SignUpForm.username === "") {
      setErrorMessage("Enter your username");
    } else if (SignUpForm.Password === "") {
      setErrorMessage("Enter your Password");
    } else if (SignUpForm.career === "") {
      setErrorMessage("Select your career");
    } else if (SignUpForm.AgeGroup === "") {
      setErrorMessage("Choose your age group");
    } else if (SignUpForm.Password !== SignUpForm.confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else if (SignUpForm.isCheck === false) {
      setErrorMessage("Please select checkbox");
    } else {
      console.log(SignUpForm);
      setErrorMessage("");
    }
  }
  const SignUpData = [
    "Software Engineering",
    "Accounting",
    "Health Care",
    "Business Management",
    "Geology",
  ];
  let options = SignUpData.map((data) => {
    return <option value={data}>{data}</option>;
  });

  return (
    <form onSubmit={handleSubmission}>
      <input
        id="FirstName"
        type="text"
        onChange={handleChange}
        name="FirstName"
        placeholder="Firstname"
      />
      <input
        id="LastName"
        type="text"
        onChange={handleChange}
        name="LastName"
        placeholder="Lastname"
      />
      <input
        id="email"
        type="email"
        onChange={handleChange}
        name="Email"
        placeholder="Email"
      />
      <label> Enter your age group</label>
      <input
        type="radio"
        id="underThirty"
        value="21-30"
        checked={SignUpForm.AgeGroup === "21-30"}
        onChange={handleChange}
        name="AgeGroup"
      />
      <label htmlFor="underThirty">21-30</label>
      <input
        type="radio"
        id="underForty"
        value="31-40"
        checked={SignUpForm.AgeGroup === "31-40"}
        onChange={handleChange}
        name="AgeGroup"
      />
      <label htmlFor="underForty">31-40</label>

      <select
        id="career"
        onChange={handleChange}
        value={SignUpForm.career}
        name="career"
      >
        <option value="">---select career---</option>
        {options}
      </select>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        name="username"
        placeholder="username"
      />
      <input
        id="password"
        type="password"
        onChange={handleChange}
        name="Password"
        placeholder="Password"
      />
      <input
        id="confirmPassword"
        type="password"
        onChange={handleChange}
        name="confirmPassword"
        placeholder="ConfirmPassword"
      />
      <input
        id="consent"
        type="checkbox"
        checked={SignUpForm.isCheck}
        name="isCheck"
        onChange={handleChange}
      />
      <label htmlFor="consent"> I consent to sharing my information</label>
      <button className="bg-sky-500 hover:bg-sky-700">Submit</button>

      <p>{errorMessage}</p>
    </form>
  );
}
