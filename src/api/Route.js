import { connectDB } from "@/utils/db";
import Enquiry from "@/models/enquiry";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Connect to MongoDB
        await connectDB();

        // Extract data from request body
        const { name, email, message } = req.body;

        // Check if required fields are present
        if (!name || !email || !message) {
            return new NextResponse("Name, email, and message are required", { status: 400 });
        }

        // Create the enquiry
        const enquiry = new Enquiry({
            name,
            email,
            message,
        });
        await enquiry.save();

        return NextResponse.json(enquiry);
    } catch (error) {
        console.log('Error at /api/enquiry POST', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}