"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AddProductForm from "./components/AddProductForm";


export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); 
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; 
  }

  if (status === "authenticated") {
    return (
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
        <AddProductForm/>
      </div>
    );
  }

  return null; 
}
