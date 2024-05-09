"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function TabsComponent() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-4 ml-10">
      <li>
        <Link
          href="/"
          className={`ease-in-out duration-500 font-bold pb-2 text-custom-blue hover:border-blue-600 border-b-2 ${
            pathname == "/" ? "border-custom-blue" : "border-transparent"
          }`}
        >
          Daftar Kegiatan
        </Link>
      </li>
      <li>
        <Link
          href="/settings"
          className={`ease-in-out duration-500 font-bold pb-2 text-custom-blue hover:border-blue-600 border-b-2 ${
            pathname == "/settings"
              ? "border-custom-blue"
              : "border-transparent"
          }`}
        >
          Pengaturan
        </Link>
      </li>
    </ul>
  );
}
