"use client";
import { RegisterApi } from '@/app/api/register/route';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function RegisterForm() {

    const route = useRouter();
    const { register,handleSubmit, formState: { errors },} = useForm();
    const onSubmit = async (data) =>{
        try {
          const result = await RegisterApi(data);
          if(result?.insertedId){
            toast.success("This is a success message!")
            route.push('/')
          }
        } catch (error) {
          toast.error("User already exists with this email")
        }
    };


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="name"
              placeholder="name"
              {...register("name", { required: "Enter your name" })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
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
            Create
          </button>
        </form>
    </div>
  )
}
