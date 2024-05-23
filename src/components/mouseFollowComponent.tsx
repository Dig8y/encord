"use client"
import React, { useState, useEffect } from 'react';

export default function MouseFollowComponent({
  mouseX,
  mouseY,
  activeTabTitle,
  clientRect
}: {
  mouseX: number,
  mouseY: number,
  activeTabTitle: string,
  clientRect: DOMRect

}) {



  console.log("🚀 ~ MouseFollowComponent ~ clientRect:", clientRect.y - mouseY, clientRect.y - mouseX)

  return (
    <>
      <div className="absolute py-2 px-4 bg-red-500 text-white shadow-sm rounded-full" style={{ transform: `translate(${- clientRect.x + mouseX}px, ${- clientRect.y + mouseY}px)` }}>
        {activeTabTitle}
      </div>
    </>
  );
}