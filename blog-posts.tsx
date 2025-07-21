"use client";

import React from "react";
import Image from "next/image";

import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";

import BlogCardWithImage from "@/components/blog-card-with-image";
import SimpleBlogCard from "@/components/simple-blog-card";

// Daftar konten singkat (sidebar)
const SIMPLE_CONTENT = [
  {
    title: "Penguatan Literasi Digital",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    subtitle: "Diskominfo gelar pelatihan literasi digital untuk pelajar.",
    name: "Oleh Tim Diskominfo",
  },
  {
    title: "Kolaborasi Smart City",
    icon: PlayCircleIcon,
    subtitle: "Kolaborasi antar OPD dalam mendukung Madiun Kota Pintar.",
    name: "Oleh Bagus Wicaksono",
  },
  {
    title: "Layanan Aduan Masyarakat",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    subtitle: "Laporan pengaduan masyarakat kini lebih mudah secara online.",
    name: "Oleh Tim Redaksi",
  },
];

export function BlogPost() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 py-20">
      <Button color="gray" className="mb-3" size="sm">
        BERITA KOMINFO
      </Button>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Berita & Infografis Terbaru Diskominfo Kota Madiun
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 mb-8 w-full text-center font-normal !text-gray-500 max-w-4xl"
      >
        Ikuti kabar terbaru, program, dan inovasi Dinas Komunikasi dan Informatika Kota Madiun dalam mendukung transformasi digital, keterbukaan informasi publik, dan pelayanan masyarakat berbasis teknologi.
      </Typography>
      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Kolom berita utama 1 */}
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  Diskominfo Launching Aplikasi Layanan Publik Terintegrasi
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Pemerintah Kota Madiun melalui Diskominfo resmi meluncurkan aplikasi layanan publik terintegrasi untuk memudahkan masyarakat dalam mengakses informasi dan pengaduan secara online.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/image/avatar2.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="author"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Wahyu Dwi Anggoro
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Kepala Diskominfo
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b md:border-none border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  Seminar Literasi Digital Bagi Generasi Muda
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Diskominfo Kota Madiun mengadakan seminar literasi digital untuk pelajar dan mahasiswa, bertujuan membangun masyarakat yang cakap teknologi dan anti-hoaks.
                </Typography>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/image/avatar1.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="author"
                    />
                  </div>
                  <div>
                    <Typography className="!font-bold !text-sm text-gray-900">
                      Tim Literasi Diskominfo
                    </Typography>
                    <Typography className="!font-normal !text-xs text-gray-500">
                      Kontributor
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* Kolom blog card dengan gambar */}
        <div>
          <BlogCardWithImage />
        </div>
        {/* Kolom berita utama 2 */}
        <div className="md:border-l px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-6">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <div className="w-full mb-4 h-[149px] ">
                  <Image
                    width={768}
                    height={768}
                    src="/image/blogs/blog-2.png"
                    className="w-10/12 md:w-full object-cover h-full rounded-lg"
                    alt="infografis"
                  />
                </div>
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-6 !text-gray-900"
                >
                  Infografis: Statistik Layanan Informasi Publik 2025
                </Typography>
                <Typography className="!font-bold !text-sm text-gray-700">
                  oleh Tim Statistik Kominfo
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b md:border-none border-blue-gray-100 mb-6">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <div className="w-full mb-4 h-[149px]">
                  <Image
                    width={768}
                    height={768}
                    src="/image/blogs/blog-3.png"
                    className="w-10/12 md:w-full object-cover h-full rounded-lg"
                    alt="kegiatan"
                  />
                </div>
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-6 !text-gray-900"
                >
                  Kegiatan Sosialisasi Keamanan Data untuk UMKM
                </Typography>
                <Typography className="!font-bold !text-sm text-gray-700">
                  oleh Dwi Purnomo
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* Sidebar simple blog card */}
        <div className="col-span-1 grid grid-cols-2 md:grid-cols-1 md:border-l px-3 md:pr-36 border-blue-gray-100">
          {SIMPLE_CONTENT.map((props, idx) => (
            <div
              key={idx}
              className={`${
                SIMPLE_CONTENT.length - 1 !== idx
                  ? "md:border-b"
                  : "md:border-none"
              } border-blue-gray-100 mb-6 `}
            >
              <SimpleBlogCard key={idx} {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
