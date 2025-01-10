import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
        <p className="text-xs text-gray-500">Copyright Ⓒ 2024 All rights reserved. 本專案建置於 Cloudflare Pages，開源於
          <Link 
          href="https://github.com/x-dr/telegraph-Image"
          className="text-blue-300  hover:text-red-900 ml-1"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub Telegraph-Image</Link> </p>
      </div>
    </footer>
  );
}
