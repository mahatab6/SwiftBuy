import { collectionName, dbConnect } from '@/lib/db';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ProductPage({ params }) {
    const p = await params;
    const {db} = await dbConnect();
    const data = await db.collection(collectionName.products).findOne({_id: new ObjectId(p?.id)});

  return (
    <div className="w-11/12 md:w-8/12 mx-auto py-10">
      {/* Image */}
      <div className="flex justify-center items-center bg-gray-50 rounded-xl p-6 shadow-md">
        <Image
          src={data?.image}
          alt={data?.chairName}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        <h1 className="text-3xl font-bold ">
          {data?.chairName}
        </h1>
        <p className="text-lg ">{data?.shortDescription}</p>

        <p className="text-lg">
          <span className="font-bold">Category:</span> {data?.category}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {data?.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#239BA7]/20 text-[#239BA7] rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="text-lg ">
          <span className="font-bold">Additional Info:</span>{" "}
          {data?.additionalInformation}
        </p>

        <p className="text-2xl font-bold text-[#239BA7]">
          ${data?.price}
        </p>

        {/* Button */}
        <button className="mt-4 px-6 py-3 bg-[#239BA7] text-white rounded-xl hover:cursor-pointer font-semibold hover:bg-[#1a7a85] transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
