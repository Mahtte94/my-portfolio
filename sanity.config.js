import {visionTool} from "@sanity/vision"
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";




export default defineConfig({
  name: "default",
  title: "My Portfolio",

  basePath: "/studio", // `basePath` must match the route of your Studio
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your actual Sanity project ID
  dataset: "production", 

// structureTool structures your content in the studio
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});