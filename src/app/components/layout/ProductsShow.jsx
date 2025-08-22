import { collectionName, dbConnect } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

export default async function ProductsShow() {
  const { db } = await dbConnect();
  const data = await db.collection(collectionName.products).find().toArray();
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center py-10 md:py-20">
        <h2 className="text-3xl font-bold">Products Collection</h2>
        <p className="text-xl py-5">Best Sellers</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10 md:pb-20">
        {data?.slice(0, 8)?.map((item) => (
          <div
            key={item?._id}
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
            <Link href={`/products/${item?._id}`} className="p-4 flex items-center justify-between">
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
