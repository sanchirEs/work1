import { writeFileSync } from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file || typeof file.name !== "string") {
      return new Response(JSON.stringify({ error: "Invalid image file" }), {
        status: 400,
      });
    }

    // Path to save the uploaded file
    const filePath = path.join(process.cwd(), "public/uploads", file.name);

    // Convert file to Buffer and save it
    const buffer = Buffer.from(await file.arrayBuffer());
    writeFileSync(filePath, buffer);

    // Return the public URL of the uploaded image
    const publicUrl = `/uploads/${file.name}`;
    return new Response(JSON.stringify({ url: publicUrl }), { status: 200 });
  } catch (error) {
    console.error("Image upload error:", error);
    return new Response(JSON.stringify({ error: "Failed to upload image" }), {
      status: 500,
    });
  }
}
