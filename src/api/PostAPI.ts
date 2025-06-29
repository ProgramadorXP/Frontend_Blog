import api from "../lib/axios";
import { isAxiosError } from "axios";

export async function getMessage() {
  try {
    const response = await api.get("/message");
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error fetching message:", error.message);
      throw error;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred while fetching message.");
    }
  }
}