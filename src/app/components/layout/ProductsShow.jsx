import Image from "next/image";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function ProductsShow() {
  const data = [
    {
      id: 1,
      chairName: "Comfy Classic Armchair",
      image: "https://i.ibb.co/BVmG16dc/1.png",
      shortDescription:
        "A cozy armchair perfect for reading or relaxing in style.",
      category: "Living Room",
      tags: ["comfortable", "classic", "armchair"],
      additionalInformation: "Material: Fabric, Frame: Wood, Color: Beige",
      price: 120,
    },
    {
      id: 2,
      chairName: "Modern Lounge Chair",
      image: "https://i.ibb.co/BHkPq5H7/2.png",
      shortDescription: "Sleek lounge chair with a contemporary design.",
      category: "Living Room",
      tags: ["modern", "lounge", "stylish"],
      additionalInformation: "Material: Leather, Frame: Metal, Color: Black",
      price: 220,
    },
    {
      id: 3,
      chairName: "Foldable Dining Chair",
      image: "https://i.ibb.co/szJjK9j/13.png",
      shortDescription: "Space-saving foldable chair for any dining area.",
      category: "Dining Room",
      tags: ["foldable", "practical", "dining"],
      additionalInformation: "Material: Metal & Fabric, Color: White",
      price: 45,
    },
    {
      id: 4,
      chairName: "Recliner Sofa Chair",
      image: "https://i.ibb.co/mrvBMH73/12.png",
      shortDescription: "Relax and unwind with this plush recliner chair.",
      category: "Living Room",
      tags: ["recliner", "sofa", "comfortable"],
      additionalInformation: "Material: Faux Leather, Color: Dark Brown",
      price: 350,
    },
    {
      id: 5,
      chairName: "Minimalist Side Chair",
      image: "https://i.ibb.co/fG4gmhRv/11.png",
      shortDescription: "Simple and elegant side chair for any modern home.",
      category: "Bedroom",
      tags: ["minimalist", "side", "modern"],
      additionalInformation: "Material: Plastic & Metal, Color: White",
      price: 60,
    },
    {
      id: 6,
      chairName: "Classic Rocking Chair",
      image: "https://i.ibb.co/zWMXgBbf/10.png",
      shortDescription:
        "Perfect for relaxing, reading, or rocking with a baby.",
      category: "Living Room",
      tags: ["rocking", "classic", "wooden"],
      additionalInformation: "Material: Solid Wood, Color: Natural Wood",
      price: 150,
    },
    {
      id: 7,
      chairName: "Luxury Executive Chair",
      image: "https://i.ibb.co/xKp7sSwB/9.png",
      shortDescription:
        "High-end office chair for executives with maximum comfort.",
      category: "Office",
      tags: ["executive", "luxury", "office"],
      additionalInformation: "Material: Leather, Frame: Steel, Color: Black",
      price: 400,
    },
    {
      id: 8,
      chairName: "Kids Study Chair",
      image: "https://i.ibb.co/5Wb2dsJk/8.png",
      shortDescription: "Ergonomic chair designed for children’s study needs.",
      category: "Kids Room",
      tags: ["kids", "study", "adjustable"],
      additionalInformation: "Material: Plastic & Metal, Color: Blue",
      price: 55,
    },
    {
      id: 9,
      chairName: "Outdoor Patio Chair",
      image: "https://i.ibb.co/zwtFKQ7/7.png",
      shortDescription:
        "Durable and stylish chair for outdoor patios and gardens.",
      category: "Outdoor",
      tags: ["outdoor", "patio", "weather-resistant"],
      additionalInformation: "Material: Rattan & Metal, Color: Brown",
      price: 130,
    },
    {
      id: 10,
      chairName: "Swivel Gaming Chair",
      image: "https://i.ibb.co/6RZhjd91/6.png",
      shortDescription:
        "Comfortable gaming chair with adjustable height and swivel base.",
      category: "Gaming",
      tags: ["gaming", "swivel", "adjustable"],
      additionalInformation: "Material: Faux Leather, Color: Red & Black",
      price: 250,
    },
    {
      id: 11,
      chairName: "Accent Velvet Chair",
      image: "https://i.ibb.co/wqd56Vm/5.png",
      shortDescription:
        "Elegant velvet chair to add a pop of color to any room.",
      category: "Living Room",
      tags: ["accent", "velvet", "stylish"],
      additionalInformation:
        "Material: Velvet, Frame: Wood, Color: Emerald Green",
      price: 200,
    },
    {
      id: 12,
      chairName: "Stackable Cafe Chair",
      image: "https://i.ibb.co/jkbgS24T/4.png",
      shortDescription:
        "Practical and stylish chair for cafes or small dining areas.",
      category: "Dining Room",
      tags: ["stackable", "cafe", "lightweight"],
      additionalInformation: "Material: Metal & Wood, Color: Black",
      price: 40,
    },
    {
      id: 13,
      chairName: "Bean Bag Chair",
      image: "https://i.ibb.co/Kp1QPpS2/3.png",
      shortDescription: "Soft and comfy bean bag perfect for lounging.",
      category: "Living Room",
      tags: ["beanbag", "comfortable", "casual"],
      additionalInformation: "Material: Fabric, Fill: Beans, Color: Gray",
      price: 70,
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center py-10 md:py-20">
        <h2 className="text-3xl font-bold">Products Collection</h2>
        <p className="text-xl py-5">Best Sellers</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item?.id}
            className="group border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {/* Image */}
            <div className="flex justify-center items-center bg-gray-50 p-4">
              <Image
                src={item?.image}
                alt={item?.chairName}
                width={300}
                height={300}
                className="object-contain h-48 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#239BA7] transition-colors duration-300 cursor-pointer">
                  {item?.chairName}
                </h1>
                <p className="text-sm md:text-base font-semibold text-gray-600">
                  Price: <span className="text-[#239BA7]">${item?.price}</span>
                </p>
              </div>

              {/* Icon */}
              <button className="text-gray-500 hover:text-[#239BA7] transition-colors duration-300">
                <FaCircleArrowRight size={28} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
