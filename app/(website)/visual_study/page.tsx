import HospitalityWorkspaces from "@/app/Components/Shared/HospitalityWorkspaces";
import ScandinavianHeritage from "@/app/Components/Shared/ScandinavianHeritage";
import ScandinavianLiving from "@/app/Components/Shared/ScandinavianLiving";
import VisualStories from "@/app/Components/Shared/VisualStories";
import Image from "next/image";
import { title } from "process";

const studies = [
  {
    img: "/Scandinavian_Heritage/1.png",
    title: "Sculptural centerpiece in modern home office",
    text: "A serene office senting featuring a sofisitated sculptural wall it and stetcred rug with concentic looped patterns.",
  },
  {
    img: "/Scandinavian_Heritage/2.png",
    title: "Bold and warm abstract shapes in seating area",
    text: "A warm and modern living room with overlapping circular wall art and a rug in bold, fiery colors, creating a dynamic and cozy atmosphere.",
  },
  {
    img: "/Scandinavian_Heritage/3.png",
    title: "Script pattern in serene living room",
    text: "A peaceful living room and memantem ruge absneed with oft-white flowing as tite, creating a calming the elegant atmosphere.",
  },
  {
    img: "/Scandinavian_Heritage/4.png",
    title: "Soft tonal gradients in tranquel bedroom",
    text: "A tranqut! bedroom som rug, and the tonal gradients in the rug. blending peacefully with the neutral decor.",
  },
];

export default function Page() {
  return (
    <section className="w-full  bg-craft-charcoal ">
      <VisualStories />
      <div className="max-w-7xl mx-auto px-6">

        <ScandinavianHeritage />

        <ScandinavianLiving />

        <HospitalityWorkspaces />

      </div>
    </section>
  );
}