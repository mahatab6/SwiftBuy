
import Link from "next/link";
import React from "react";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
 

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className=" p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <LoginForm/>
        <div className="text-center mt-4 text-gray-700">
          <p>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-500 font-semibold hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
