import React from "react";

const InfoCard = (props) => {
  const { title, text } = props;
  return (
    <div className="w-100 sombra p-3">
      <h2 className="fs-6 font-weight-bold mt-4 mb-1 text-center">
        {title}
      </h2>
      <p className="fw-normal">
        {text}
      </p>
    </div>
  );
};

export default InfoCard;
