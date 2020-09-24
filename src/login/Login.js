import React from "react";
import Navbar from "../Navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

export default function Login() {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="Password" />
      <CoolButton isSmall isOutlined isSuccess>
        Submit
      </CoolButton>
    </div>
  );
}
