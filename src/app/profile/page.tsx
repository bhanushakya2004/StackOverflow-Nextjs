"use client";

import axios from "axios";

import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState("nothing");

  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.get("/api/users/me");
  //     console.log(response.data);
  //     setUserData(response.data.data._id);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //     toast.error("An error occurred while fetching user data.");
  //   } 
  // }

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/api/users/me");
      console.log("User response:", response.data);
      const user = response.data.data;
      if (!user) {
        toast.error("No user data found.");
        return;
      }
      setUserData(user._id);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("An error occurred while fetching user data.");
    }
  };
  

  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-600">Profile Page</h1>
        <p className="text-center text-gray-700">Welcome to your profile!</p>
        <h2>{userData === "nothing"? "Nothing":<Link href={`profile/${userData}`}>
        {userData}
        </Link>}</h2>
        <hr />
        <button
          onClick={fetchUserData}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          fetch Data
        </button>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Logout
        </button>
        <Link
          href="/"
          className="text-sm text-center text-blue-500 hover:underline block"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
