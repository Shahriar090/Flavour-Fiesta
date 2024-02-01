import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/shared/SectionTitle";
import RenderItem from "./RenderItem";
import { useQuery } from "@tanstack/react-query";
const Items = () => {
  // get items function
  const getItems = async () => {
    return await fetch("items.json").then((res) => res.json());
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    throw new Error("Error Fetching Data");
  }
  return (
    <div>
      <section>
        <SectionTitle
          heading={"We Serve"}
          subHeading={"Choose Your Food"}
        ></SectionTitle>
      </section>
      {/* main content section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.map((singleItem) => (
            <RenderItem
              key={singleItem.id}
              singleItem={singleItem}
            ></RenderItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Items;
