import React from "react";
import ItemCard from "./ItemCard";

const TopProducts = () => {
  const items = [
    {
      title: "Satin Sundress",
      price: "49.90",
      colors: ["#996515", "#F5B503"],
      imagePath: "yellow_dress.jpeg",
    },
    {
      title: "Gold Loop Earrings",
      price: "12.90",
      colors: ["#F0B303", "#000000"],
      imagePath: "earrings.jpeg",
    },
    {
      title: "Mini pleated skirt",
      price: "28.90",
      colors: ["#48474C", "#F0B303"],
      imagePath: "skirt.png",
    },
    {
      title: "Baby Wears",
      price: "45.90",
      colors: ["#996515", "#F5B503"],
      imagePath: "set.jpeg",
    },
    {
      title: "Men Wears",
      price: "35.90",
      colors: ["#48474C", "#F5B503"],
      imagePath: "set_2.jpeg",
    },
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-4">
      {items.map((item, idx) => {
        return <ItemCard key={idx} item={item} />;
      })}
    </div>
  );
};

export default TopProducts;
