import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-teal-800 text-white px-6 pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Kominfo Kota Madiun */}
        <div>
          <Typography variant="h5" className="font-bold mb-4">
            Kominfo Kota Madiun
          </Typography>
          <Typography className="text-sm">
            Jl. Perintis Kemerdekaan No. 32
            <br />Kel. Kartoharjo, Kecamatan Kartoharjo,
            <br />Kota Madiun, Jawa Timur.
          </Typography>
          <Typography className="text-sm mt-4">
            Jam Pelayanan:
            <br />Senin - Kamis (07.00 - 15.30)
            <br />Jumat (06.30 - 14.30)
          </Typography>
        </div>

        {/* Jelajahi */}
        <div>
          <Typography variant="h5" className="font-bold mb-4">
            Jelajahi
          </Typography>
          <ul className="space-y-2 text-sm">
            <li>> Sipdok Kota Madiun</li>
            <li>> Beasiswa Kota Madiun</li>
            <li>> Awak Sigap Kota Madiun</li>
            <li>> Pecel Tumpang Kota Madiun</li>
            <li>> Sicaker Kota Madiun</li>
            <li>> Madiun Single Submission</li>
          </ul>
        </div>

        {/* Agenda Madiun */}
        <div>
          <Typography variant="h5" className="font-bold mb-4">
            Agenda Madiun
          </Typography>
          <ul className="space-y-2 text-sm">
            <li>> Agenda Kota Madiun</li>
            <li>> Agenda Walikota Madiun</li>
            <li>> Agenda Wakil Walikota Madiun</li>
            <li>> Agenda Sekretariat Daerah</li>
          </ul>
        </div>

        {/* Berita Madiun */}
        <div>
          <Typography variant="h5" className="font-bold mb-4">
            Berita Madiun
          </Typography>
          <ul className="space-y-2 text-sm">
            <li>> Madiun Today</li>
            <li>> Analisa Berita</li>
            <li>> Madiun Kota</li>
            <li>> 93 FM Suara Madiun</li>
            <li>> Seputar Kota Madiun</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <Typography className="text-center md:text-left">
          &copy; {CURRENT_YEAR} Diskominfo Kota Madiun. All rights reserved.
        </Typography>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
