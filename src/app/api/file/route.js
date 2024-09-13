

import { NextResponse, NextRequest } from "next/server";

export async function POST (req) {
    const formData = await req.formData();
    const file = formData.get("file");
    const reader = file.stream().getReader();
    const chunks = [];
    let done, value;
    while ({ done, value } = await reader.read(), !done) {
        chunks.push(value);
    }
    const buffer = new Uint8Array(chunks);
    const fileData = Buffer.from(buffer).toString("base64");
    console.log(fileData);
    return NextResponse.json({ fileData }); 

   

}
