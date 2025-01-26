export interface Category {
  _id: string;           // Unique identifier for the category
  slug: string;          // Unique identifier for the category (e.g., "style")
  title: string;         // Display title for the category (e.g., "Style")
  img: string;           // URL for the category image
  link: string;          // Link to the category page
  categoryColor: string; // Hex color code for the category
  bg: string;            // Background color (e.g., with transparency)
}