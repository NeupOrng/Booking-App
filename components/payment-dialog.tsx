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

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PaymentDialog({
  open,
  onOpenChange,
}: PaymentDialogProps) {
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
            <div className="w-[200px] h-[200px]">
              <QRCode />
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mb-6">
            Please pay through this QR code and send the receipt to our Telegram
            support.
          </p>

          <a
            href="https://t.me/eventbooksupport"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0088cc] text-white px-4 py-2 rounded-md hover:bg-[#0077b5] transition-colors"
          >
            <BrandTelegram className="h-5 w-5" />
            Contact us on Telegram
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
