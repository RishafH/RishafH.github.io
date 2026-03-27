import React from "react";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "2rem 0", borderTop: "1px solid #333" }}>
      <p>&copy; {new Date().getFullYear()} Mohammed Rishaf. All rights reserved.</p>
    </footer>
  );
}

