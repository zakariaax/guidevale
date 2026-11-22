import { airProducts } from "@/data/products/air";
import { careProducts } from "@/data/products/care";
import { floorProducts } from "@/data/products/floors";
import { homeProducts } from "@/data/products/home";
import { kitchenProducts } from "@/data/products/kitchen";
import { soundProducts } from "@/data/products/sound";

export const products = [
  ...airProducts,
  ...floorProducts,
  ...kitchenProducts,
  ...soundProducts,
  ...homeProducts,
  ...careProducts,
];
