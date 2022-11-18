import React from "react";

const infoData = ["Men", "Clothing", "Tops", "Adidas", "Adidas Black T-Shirt"];
function SectionNav() {
  return (
    <nav className="section__nav">
      {infoData.map((info, index) => (
        <>
          <h5
            key={index}
            className="section__title"
            style={{
              textDecoration:
                (index + 1) / infoData.length === 1 ? "none" : "underline",
            }}
          >
            {info}
          </h5>
          <span
            style={{
              display: (index + 1) / infoData.length === 1 ? "none" : "block",
              padding: "0 4px",
            }}
          >
            {" "}
            /
          </span>
        </>
      ))}
    </nav>
  );
}

export default SectionNav;
