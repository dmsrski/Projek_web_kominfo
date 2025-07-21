"use client";
import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Menu utama dan dropdown
const NAV_MENU = ["Beranda", "Berita", "Profil", "Layanan Pengaduan", "FaQ", "Informasi Publik", "Publikasi"];

const BERITA_DROPDOWN = [
  "Berita Kominfo Madiun",
  "Madiun Today",
  "Kabar Warga",
  "Arsip Berita",
  "Radio Suara Madiun",
  "Siaran Pers Madiun",
  "Infografis Madiun",
];

const PROFIL_DROPDOWN = [
  "Tentang",
  "Visi Misi",
  "Struktur Organisasi",
  "Tupoksi Diskominfo Kota Madiun",
  "Standar Pelayanan",
  "Data Pegawai",
  "LHKPN Pejabat Publik Pemerintah Kota Madiun",
];

const INFORMASI_PUBLIK_DROPDOWN = [
  "Daftar Informasi Publik",
  "Informasi Berkala",
  "Informasi Serta Merta",
  "Informasi Setiap Saat",
  "Laporan Layanan Informasi Publik",
];

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography as="a" href="#" className="text-white hover:underline text-sm font-medium">
        {children}
      </Typography>
    </li>
  );
}

function Dropdown({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = React.useState(false);
  let timer: NodeJS.Timeout;

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearTimeout(timer);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timer = setTimeout(() => setOpen(false), 200);
      }}
    >
      <Typography className="text-white cursor-pointer text-sm font-medium">
        {title} ▾
      </Typography>
      {open && (
        <ul className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-md z-50 p-2 space-y-2">
          {items.map((item) => (
            <li key={item}>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#009BFC] rounded-md">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  return (
    <MTNavbar fullWidth className="bg-[#009BFC] px-4 py-3 rounded-none shadow-none fixed z-50 top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop */}
        <ul className="hidden lg:flex gap-8 items-center">
          {NAV_MENU.map((name) => {
            if (name === "Berita") return <Dropdown key="berita" title="Berita" items={BERITA_DROPDOWN} />;
            if (name === "Profil") return <Dropdown key="profil" title="Profil" items={PROFIL_DROPDOWN} />;
            return <NavItem key={name}>{name}</NavItem>;
          })}
        </ul>

        {/* Search Box */}
        <div className="hidden lg:flex items-center bg-white rounded-md px-4 py-2 w-72">
          <input
            type="text"
            placeholder="Saya mencari . . ."
            className="bg-transparent outline-none text-black placeholder-gray-600 text-sm w-full"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-black ml-2" />
        </div>

        {/* Mobile Hamburger */}
        <IconButton variant="text" onClick={handleOpen} className="ml-auto lg:hidden text-white">
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
      </div>

      {/* Mobile */}
      <Collapse open={open}>
        <div className="bg-[#009BFC] px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((name) => {
              if (name === "Berita") {
                return (
                  <li key="mobile-berita">
                    <Typography className="text-white font-semibold mb-2">Berita</Typography>
                    <ul className="ml-4 space-y-1">
                      {BERITA_DROPDOWN.map((item) => (
                        <li key={item}>
                          <a href="#" className="block text-sm text-white hover:underline">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              if (name === "Profil") {
                return (
                  <li key="mobile-profil">
                    <Typography className="text-white font-semibold mb-2">Profil</Typography>
                    <ul className="ml-4 space-y-1">
                      {PROFIL_DROPDOWN.map((item) => (
                        <li key={item}>
                          <a href="#" className="block text-sm text-white hover:underline">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return <NavItem key={name}>{name}</NavItem>;
            })}
          </ul>

          {/* Mobile search */}
          <div className="mt-4 flex items-center bg-white rounded-md px-4 py-2">
            <input
              type="text"
              placeholder="Saya mencari . . ."
              className="bg-transparent outline-none text-black placeholder-gray-600 text-sm w-full"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-black ml-2" />
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
