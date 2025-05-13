import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbconfig";

connect();

export async function GET(request: NextRequest) {
  try {

    const userId = await getDataFromToken(request)

    const user = await User.findOne({_id:userId}).select("-password");
    return NextResponse.json({ 
        message : "User data fetched successfully",
        data:user
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
