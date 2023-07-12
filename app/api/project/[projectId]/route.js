import fsPromises from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(req) {
  const filePath = path.join(process.cwd(), "/projects.json");
  try {
    // const id = req.params.projectId;
    const id = req.url.trim().slice(req.url.lastIndexOf("/") + 1);
    if (!id || id === "") throw new Error("Bad Request");
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    const mainData = objectData.find((o) => o.id == id);

    return NextResponse.json({ ...mainData });
  } catch (error) {
    return new NextResponse(error.message, { status: 400 });
  }
}
