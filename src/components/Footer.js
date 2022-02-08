import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>Copyright {year}- Fernando Bouchet</span>
    </footer>
  );
}
