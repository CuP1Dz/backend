import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";
import { ToDo } from "../../../models/todoModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectToDatabase();
    const tasks = await ToDo.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tasks" });
  }
}