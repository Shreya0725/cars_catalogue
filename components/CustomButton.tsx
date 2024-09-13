"use client"; // client side component

import { CustomButtonProps } from "@/types";
import React from "react";
import Image from "next/image";
const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  rightIconWidth = 24,
  rightIconHeight = 24,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button" || btnType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}> {title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            className="object-contain"
            width={rightIconWidth}
            height={rightIconHeight}
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
