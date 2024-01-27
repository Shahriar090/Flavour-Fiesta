import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-4 lg:py-8">
      <h2 className="text-2xl lg:text-4xl font-mono font-semibold text-black">
        {heading}
      </h2>
      <p className="font-mono text-lg lg:text-xl text-black">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
