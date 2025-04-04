"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BrandTelegram } from "@/components/icons";
import QRCode from "@/components/qr-code";
import { useState } from "react";
import { Download } from "lucide-react"

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  qrcodeUrl: string;
  telegramUrl: string;
}

export default function PaymentDialog({
  open,
  onOpenChange,
  qrcodeUrl,
  telegramUrl
}: PaymentDialogProps) {
    const [qrCodeUrlState, setQrCodeUrlState] = useState<string>(qrcodeUrl);
    const [telegramUrlState, setTelegramUrlState] = useState<string>(telegramUrl);
    const handleDownloadQRCode = async () => {
        // Create a temporary anchor element
        try {
            const blob = await (await fetch(qrCodeUrlState)).blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "qrcode.png"; // Specify the file name
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url); 
        } catch (error) {       
            console.error("Error downloading QR code:", error);
        }
      }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Payment Required</DialogTitle>
          <DialogDescription className="text-center">
            Please complete your payment to confirm your booking
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-4">
          {/* QR Code */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border">
            <div className="w-[300px] h-[500px] overflow-hidden">
              <QRCode qrcodeUrl={qrCodeUrlState} />
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mb-6">
            Please pay through this QR code and send the receipt to our Telegram
            support.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownloadQRCode}
              className="text-sm flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              QR Code
            </button>

            <a
              href={telegramUrlState}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center justify-center gap-2 bg-[#0088cc] text-white px-4 py-2 rounded-md hover:bg-[#0077b5] transition-colors"
            >
              <BrandTelegram className="h-5 w-5" />
              Telegram
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
