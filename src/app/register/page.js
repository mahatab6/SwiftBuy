"use client";
import Link from "next/link";
import React from "react";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className=" p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <RegisterForm/>
        <div className="text-center mt-4 text-gray-700">
            <p>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-500 font-semibold hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
}
