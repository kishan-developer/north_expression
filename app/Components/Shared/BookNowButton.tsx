"use client";

import { useState } from "react";
import CustomOrderModal from "./CustomOrderModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Redux_Toolkit/modalSlice";

export default function BookConsultation() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <a
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 px-12 py-3 rounded-full text-lg font-medium tracking-wide bg-[#5d4037] text-white hover:bg-[#3e2723] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Contact Now
      </a>

      <CustomOrderModal open={open} setOpen={setOpen} />
    </>
  );
}
