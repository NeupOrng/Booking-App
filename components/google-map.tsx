"use client"

import { ExternalLink } from "lucide-react"

interface GoogleMapProps {
  height?: string
  className?: string
}

export default function GoogleMap({ height = "300px", className = "" }: GoogleMapProps) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9086995452444!2d104.9202642753066!3d11.558402644283065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951066fe0d253%3A0xb2d6953a012fb392!2sBlue%20Espresso%20Bar!5e0!3m2!1sen!2skh!4v1744326580657!5m2!1sen!2skh`
  const mapLinkUrl = `https://maps.app.goo.gl/D6kV3hPLjohxt5yB8`

  return (
    <div className={`bg-gray-200 rounded-md overflow-hidden relative group ${className}`} style={{ height }}>
      <iframe
        src={mapUrl}
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location map"
        className="w-full h-full"
      ></iframe>

      {/* Overlay with click instruction */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
        <a
          href={mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-800 px-3 py-2 rounded-md shadow-md flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="text-sm font-medium">Open in Google Maps</span>
        </a>
      </div>
    </div>
  )
}
