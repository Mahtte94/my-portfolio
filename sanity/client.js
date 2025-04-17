import { createClient } from "next-sanity";


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-04-17", // Add todays date
  useCdn: false,
});