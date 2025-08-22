"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function LoginForm() {
    const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const onSubmit = async(data) => {
    try {
        const result = await signIn("credentials",{email: data?.email, password: data?.password, redirect:false})
        if(result.ok){
            router.push('/');
            toast.success("loging success");
            reset();
        }

    } catch (error) {
        toast.error("login failed")
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Login
      </button>
    </form>
  );
}
