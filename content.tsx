"use client";

import React from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

export function Content() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <Typography color="blue" variant="h6">
          #Kominfo #KotaMadiun #Digitalisasi
        </Typography>
        <Typography className="my-12 font-normal !text-gray-500">
          Dinas Komunikasi dan Informatika (Diskominfo) Kota Madiun merupakan perangkat daerah yang memiliki peran strategis dalam mewujudkan pemerintahan berbasis elektronik, menyediakan layanan informasi publik yang terpercaya, serta mendukung transformasi digital di Kota Madiun. Komitmen kami adalah menghadirkan layanan komunikasi, informatika, persandian, dan statistik secara prima dan inovatif untuk masyarakat Kota Madiun.
        </Typography>

        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
          Visi dan Misi Diskominfo Kota Madiun
        </Typography>

        <Typography className="my-10 font-normal !text-gray-500">
          <b>Visi:</b> Terwujudnya layanan informasi dan komunikasi yang profesional, transparan, dan berbasis teknologi untuk mendukung Madiun Kota Pintar.<br /><br />
          <b>Misi:</b>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Meningkatkan penyebarluasan informasi publik kepada masyarakat secara cepat, tepat, dan akurat.</li>
            <li>Mengembangkan infrastruktur teknologi informasi dan komunikasi yang handal serta aman.</li>
            <li>Memperkuat kolaborasi antar instansi dalam penyediaan data dan layanan digital.</li>
            <li>Mendorong partisipasi masyarakat dalam pemanfaatan teknologi digital secara bijak.</li>
          </ul>
        </Typography>
        <Image
          width={768}
          height={500}
          src="/image/info-kominfo.jpg"
          alt="Kegiatan Diskominfo Kota Madiun"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography variant="small" className="font-normal !text-gray-500">
          Foto: Dokumentasi Kegiatan Diskominfo Kota Madiun
        </Typography>

        <Typography className="my-12 font-normal !text-gray-500">
          Diskominfo Kota Madiun juga aktif dalam mengedukasi masyarakat terkait literasi digital, menjaga keamanan data pemerintah dan publik, serta menyediakan sarana pengaduan dan aspirasi yang dapat diakses oleh seluruh warga. Dengan semangat inovasi, kami terus bertransformasi menuju pelayanan publik yang lebih modern dan transparan.
        </Typography>

        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
          Layanan dan Program Unggulan
        </Typography>

        <Typography className="my-10 font-normal !text-gray-500">
          Beberapa layanan dan program unggulan Diskominfo Kota Madiun meliputi:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Layanan Informasi Publik dan Media Center</li>
            <li>Pengelolaan Infrastruktur Jaringan dan Internet Kota</li>
            <li>Penyediaan Aplikasi Pemerintah Daerah</li>
            <li>Pengelolaan Data Statistik Sektoral</li>
            <li>Pelatihan Literasi Digital dan Keamanan Informasi</li>
            <li>Pelayanan Pengaduan dan Aspirasi Masyarakat secara Online</li>
          </ul>
          <br />
          Semua upaya ini bertujuan untuk menciptakan Kota Madiun yang informatif, adaptif, dan siap menghadapi tantangan era digital.
        </Typography>
        <div className="container mx-auto px-4 py-20">
          <div className="w-full mb-10 md:flex items-center justify-between">
            <div className="flex mb-5 md:mb-0 items-center gap-3">
              <Button size="sm" color="gray" variant="outlined">
                Layanan
              </Button>
              <Button size="sm" color="gray" variant="outlined">
                Digitalisasi
              </Button>
              <Button size="sm" color="gray" variant="outlined">
                Aspirasi
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 bg-[#35518D] hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-facebook text-lg" />
              </button>
              <button className="w-9 h-9 bg-[#00ACEE] hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-twitter text-lg" />
              </button>
              <button className="w-9 h-9 bg-[#E4405F] hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-instagram text-lg" />
              </button>
            </div>
          </div>
          <div className="md:flex items-center justify-between">
            <div className="mb-4 md:mb-0 md:flex items-center gap-5 max-w-2xl">
              <div className="h-full mb-3 md:mb-0 w-full max-h-[4rem] max-w-[4rem] md:max-w-[6rem] md:max-h-[6rem] rounded-lg ">
                <Image
                  width={768}
                  height={768}
                  src="/image/avatar1.jpg"
                  className="rounded-2xl"
                  alt="Kepala Diskominfo"
                />
              </div>
              <div>
                <Typography
                  variant="h5"
                  className="mb-4 md:mb-0"
                  color="blue-gray"
                >
                  Noor Aflaah
                </Typography>
                <Typography className="w-full md:w-10/12 font-normal !text-gray-500">
                  Kepala Dinas Komunikasi dan Informatika Kota Madiun, berkomitmen mendorong terwujudnya tata kelola pemerintahan yang inovatif dan pelayanan publik berbasis digital.
                </Typography>
              </div>
            </div>
            <Button
              color="gray"
              className="w-1/2 md:w-fit flex-shrink-0"
              size="md"
            >
              Ikuti
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
