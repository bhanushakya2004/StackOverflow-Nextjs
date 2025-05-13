import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        
        const response = NextResponse.json({ message: "Logout successful", success: true });

        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0), // Set the expiration date to the past
        });
        return response;

    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        
    }
}