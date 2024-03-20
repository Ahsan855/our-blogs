import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex-col md:flex justify-between border-l-[1px] border-gray-300 px-5 md:px-20 border-t-[1px] w-full md:w-4/5 ms-auto items-center py-5">
      <p className="text-sm">
        © 2020, WritePress | All rights reserved | Design by AliThemes
      </p>
      <ul className="flex flex-wrap gap-5  pt-5 text-sm cursor-pointer">
        <li>
          <Link href="/treams">Trems And Conditions</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/gallery">Gellary</Link>
        </li>
        <li>
          <Link href="/category">ALL Categorys</Link>
        </li>
        <li>
          <Link href="/search">Categoris</Link>
        </li>
        <li>
          <Link href="/keywords">Keyword</Link>
        </li>
        <li>
          <Link href="/tag">Tags</Link>
        </li>
      </ul>
    </div>
  );
}
