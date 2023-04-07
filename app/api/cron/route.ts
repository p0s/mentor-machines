import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {

        // Create a single supabase client for interacting with your database
        const supabase = createClient(
            "https://vduqyasswizvyfkfagto.supabase.co",
            process.env.SUPABASE_KEY as string
        );

        const { data, error } = await supabase
            .storage
            .emptyBucket('videos')


        // console.log("response", response);
        return NextResponse.json(data);
    } catch (error) {
        console.log("error", error);
    }
}
