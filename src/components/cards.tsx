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
    title: "Effortless Setup🛠️ ",
  
    description:    "Sign in,create your shop ,add pictures and display your products in minutes  .",
    link: "/"
  },
  {
    title: "Massive Audience📈",
    description:
      "Connect with thousands of buyers close to you and from different cumpuses for free.",
      link: "/"

  },
  {
    title: "Safe Transactions 💰",
    description:
      "Swipe handles all our payments  so you focus on selling and customers to buying.",
      link: "/"

  },
  {
    title: "Fast Communications📩 ",
    description:
      "Inbuilt chat allows instant communication with customers for efficient business.",
      link: "/"

  },
 
];
