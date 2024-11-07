import React from "react";
import Category from "./Category";

export default function BlogCategories({
  onCategorySelect,
}: {
  onCategorySelect: (category: string) => void;
}) {
  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Artificial Intelligence" },
    { id: 3, name: "Blockchain Technology" },
    { id: 4, name: "Cybersecurity" },
    { id: 5, name: "Biotechnology" },
    { id: 6, name: "Renewable Energy" },
  ];

  return (
    <div className="container mx-auto px-6 py-5 md:py-14 md:px-0 text-sm lg:text-lg">
      <div className="flex overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal space-x-4 md:space-x-0 md:gap-4 scrollbar-hide md:justify-start lg:justify-between md:flex-wrap">
        {categories.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            onClick={() => onCategorySelect(category.name)}
          />
        ))}
      </div>
    </div>
  );
}
