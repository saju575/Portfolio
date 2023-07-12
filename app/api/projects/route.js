import fsPromises from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
export async function GET() {
  const filePath = path.join(process.cwd(), "/projects.json");
  try {
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    // const dataResponse = await fetch("/projects.json");
    // const data = await dataResponse.json();
    return NextResponse.json(objectData);
  } catch (error) {
    console.log(error);
    return new NextResponse("Bad Request", { status: 400 });
  }
}
