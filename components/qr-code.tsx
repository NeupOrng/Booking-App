import { useContext, useState } from "react";

interface QRCodeProps {
    qrcodeUrl: string;
}

export default function QRCode({ qrcodeUrl }: QRCodeProps) {
  const [qrCodeUrlState, setQrCodeUrlState] = useState<string>(qrcodeUrl);
  return (
    <div className="relative w-full h-full">
      <img
        src={qrCodeUrlState}
        alt="QR Code"
        className="max-w-full object-cover"
      />
    </div>
  );
}
