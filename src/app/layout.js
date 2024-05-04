'use client'
import { useState, useEffect } from "react";
import "./index.css";
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
