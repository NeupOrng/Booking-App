import { useContext, useState } from "react";
import { RegistrationFormContext } from "./registration-form";

export default function QRCode() {
  const registrationFormContext = useContext(RegistrationFormContext);
  return (
    <div className="relative w-full h-full">
        qrcode { registrationFormContext }
      <img
        src={registrationFormContext}
        alt="QR Code"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
