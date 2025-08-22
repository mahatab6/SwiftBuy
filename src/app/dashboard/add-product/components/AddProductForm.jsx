"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddProductForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        reset(); 
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
        placeholder="Product Name"
        {...register("name", { required: "Product name is required" })}
        className="w-full px-3 py-2 border rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="number"
        placeholder="Price"
        {...register("price", { required: "Price is required" })}
        className="w-full px-3 py-2 border rounded"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}

      <input
        type="text"
        placeholder="Category"
        {...register("category")}
        className="w-full px-3 py-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}
