"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AddProductForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [file, setFile] = useState(null);

  const onSubmit = async (data) => {
    try {
      
      let imageUrl = "";
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        await new Promise((resolve) => {
          reader.onload = () => {
            imageUrl = reader.result;
            resolve(true);
          };
        });
      }

      const productData = {
        chairName: data.chairName,
        image: imageUrl || data.imageUrl, 
        shortDescription: data.shortDescription,
        category: data.category,
        tags: data.tags?.split(",").map(tag => tag.trim()) || [],
        additionalInformation: data.additionalInformation,
        price: Number(data.price),
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        reset();
        setFile(null);
      } else {
        const error = await res.json();
        toast.error(error.message || "Failed to add product");
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        placeholder="Chair Name"
        {...register("chairName", { required: "Chair name is required" })}
        className="w-full px-3 py-2 border rounded"
      />
      {errors.chairName && <p className="text-red-500">{errors.chairName.message}</p>}

      <input
        type="text"
        placeholder="Image URL"
        {...register("imageUrl")}
        className="w-full px-3 py-2 border rounded"
      />

      <input
        type="text"
        placeholder="Short Description"
        {...register("shortDescription")}
        className="w-full px-3 py-2 border rounded"
      />

      <input
        type="text"
        placeholder="Category"
        {...register("category")}
        className="w-full px-3 py-2 border rounded"
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        {...register("tags")}
        className="w-full px-3 py-2 border rounded"
      />

      <input
        type="text"
        placeholder="Additional Information"
        {...register("additionalInformation")}
        className="w-full px-3 py-2 border rounded"
      />

      <input
        type="number"
        placeholder="Price"
        {...register("price", { required: "Price is required" })}
        className="w-full px-3 py-2 border rounded"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Product
      </button>
    </form>
  );
}
