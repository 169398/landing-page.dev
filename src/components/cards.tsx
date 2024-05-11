import { link } from "fs";
import { Cards } from "./ui/card";
import { Vortex } from "./ui/vortex";

export function CardUi() {
  return (
    <div className="max-w-5xl mx-auto px-8">


      <Cards items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Effortless Setup⏰  ",
  
    description:    " Sign up, create your shop, add pics, and sell - all in minutes!  .",
    link: "/"
  },
  {
    title: "Massive Audience📈",
    description:
      "Reach thousands of buyers on your campus and beyond easily.",
      link: "/"

  },
  {
    title: "Safe Transactions 💰",
    description:
      "Swipe handles payments, so you focus on selling..",
      link: "/"

  },
  {
    title: "Fast Communications📩 ",
    description:
      "Built-in chat allows instant messaging with customers..",
      link: "/"

  },
 
];
