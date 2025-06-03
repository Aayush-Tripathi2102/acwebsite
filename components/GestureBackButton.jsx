import Link from "next/link";
import React from "react";

const GestureBackButton = () => {
  return (
    <Link href="/">
      <div className="sm:w-[15vw] w-[30vw] h-[5px] bg-white absolute bottom-0 left-1/2 -translate-x-1/2 z-50 rounded-full" />
    </Link>
  );
};

export default GestureBackButton;
