import React, { Component } from "react";

export default class CertificationsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 450"
        width="100%"
        height="100%"
        style={{ maxWidth: "500px", height: "auto" }}
      >
        <defs>
          <linearGradient id="certGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.imageHighlight || "#0071C5"} stopOpacity="0.85" />
            <stop offset="100%" stopColor={theme.headerColor || "#003366"} stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFDF00" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="2" dy="5" stdDeviation="6" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Floating background decorative particles */}
        <circle cx="90" cy="80" r="14" fill={theme.imageHighlight} opacity="0.25" />
        <circle cx="510" cy="90" r="18" fill="#FFA500" opacity="0.3" />
        <circle cx="530" cy="340" r="10" fill={theme.imageHighlight} opacity="0.2" />
        <circle cx="80" cy="370" r="16" fill="#00FFA3" opacity="0.25" />
        <polygon points="120,240 128,255 112,255" fill={theme.imageHighlight} opacity="0.35" />
        <polygon points="480,210 490,225 470,225" fill="#FFA500" opacity="0.35" />

        {/* Background Accent Card */}
        <rect
          x="110"
          y="70"
          width="360"
          height="280"
          rx="18"
          fill={theme.secondaryText || "#868e96"}
          opacity="0.1"
          transform="rotate(-5 290 210)"
        />

        {/* Main Certificate Card */}
        <g filter="url(#shadow)">
          <rect
            x="120"
            y="60"
            width="360"
            height="270"
            rx="16"
            fill={theme.body === "#000000" || theme.body === "#171c28" ? "#1e2638" : "#ffffff"}
            stroke={theme.imageHighlight || "#0071C5"}
            strokeWidth="3"
          />
          {/* Inner certificate border */}
          <rect
            x="135"
            y="75"
            width="330"
            height="240"
            rx="10"
            fill="none"
            stroke={theme.headerColor || "#d9dbdf"}
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />

          {/* Certificate header bar */}
          <path
            d="M 135 85 Q 300 95 465 85 L 465 110 Q 300 120 135 110 Z"
            fill="url(#certGrad)"
            opacity="0.85"
          />

          {/* Lines simulating certificate text */}
          <rect x="180" y="140" width="240" height="12" rx="6" fill={theme.text} opacity="0.75" />
          <rect x="220" y="165" width="160" height="8" rx="4" fill={theme.secondaryText} opacity="0.6" />
          <rect x="170" y="190" width="260" height="7" rx="3.5" fill={theme.secondaryText} opacity="0.45" />
          <rect x="190" y="208" width="220" height="7" rx="3.5" fill={theme.secondaryText} opacity="0.45" />

          {/* Signatures and stamps */}
          <line x1="170" y1="275" x2="240" y2="275" stroke={theme.text} strokeWidth="2" opacity="0.6" />
          <path d="M 180 270 Q 195 255 210 270 T 235 265" fill="none" stroke={theme.imageHighlight} strokeWidth="1.5" opacity="0.8" />
          <line x1="360" y1="275" x2="430" y2="275" stroke={theme.text} strokeWidth="2" opacity="0.6" />
          <path d="M 370 270 Q 385 255 400 270 T 425 265" fill="none" stroke={theme.imageHighlight} strokeWidth="1.5" opacity="0.8" />

          {/* Golden Seal Medal on Certificate */}
          <circle cx="300" cy="265" r="28" fill="url(#goldGrad)" filter="url(#shadow)" />
          <circle cx="300" cy="265" r="23" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 2" />
          <polygon points="300,248 305,258 316,260 308,268 310,279 300,273 290,279 292,268 284,260 295,258" fill="#ffffff" />
          {/* Ribbons */}
          <path d="M 288 287 L 275 325 L 290 315 L 300 325 Z" fill="#D9822B" />
          <path d="M 312 287 L 325 325 L 310 315 L 300 325 Z" fill="#D9822B" />
        </g>

        {/* Floating Shield Badge 1 (Left) */}
        <g filter="url(#shadow)" transform="translate(60, 200)">
          <path
            d="M 50 10 Q 75 0 95 10 Q 95 60 50 90 Q 5 60 5 10 Q 25 0 50 10 Z"
            fill="url(#certGrad)"
          />
          <path
            d="M 50 18 Q 70 10 85 18 Q 85 58 50 82 Q 15 58 15 18 Q 30 10 50 18 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            opacity="0.7"
          />
          {/* Checkmark */}
          <path
            d="M 32 45 L 44 57 L 68 33"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Floating Hexagon / Verified Badge 2 (Right) */}
        <g filter="url(#shadow)" transform="translate(420, 190)">
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="url(#goldGrad)"
          />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#ffffff" strokeWidth="2" />
          {/* Star */}
          <polygon
            points="50,30 55,42 68,44 58,54 61,67 50,60 39,67 42,54 32,44 45,42"
            fill="#ffffff"
          />
        </g>

        {/* Pedestal Base Shadow */}
        <ellipse cx="300" cy="405" rx="220" ry="18" fill="gray" opacity="0.18" />
      </svg>
    );
  }
}
