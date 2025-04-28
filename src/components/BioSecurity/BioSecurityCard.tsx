"use client";
import { useState } from "react";
import { BiosecurityModal } from "./BioSecurityModal";

interface Practice {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  consequences: string;
}

interface BiosecurityCardProps {
  practice: Practice;
}

function BiosecurityCard({ practice }: BiosecurityCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl group"
      >
        <div className="bg-[#AC7771] p-4 rounded-full mb-4 flex items-center justify-center w-20 h-20 transition-transform duration-300 group-hover:scale-110">
          {practice.icon}
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-2 leading-snug">
          {practice.title}
        </h4>
        <p className="text-gray-600 text-base leading-relaxed">
          {practice.description}
        </p>
      </div>

      <BiosecurityModal
        open={open}
        onOpenChange={setOpen}
        practice={practice}
      />
    </>
  );
}

export { BiosecurityCard };
