import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export function BlogCardWithImage() {
  return (
    <Card
      shadow={false}
      className="pb-5 p-0 !border-b md:border-none border-blue-gray-100"
    >
      <CardBody className="p-0 ">
        <div className="w-full mb-4 h-[211px] ">
          <Image
            width={768}
            height={768}
            src="/image/blogs/blog-1.png"
            className="w-full h-full rounded-lg"
            alt="Launching Aplikasi"
          />
        </div>
        <Typography variant="h3" className="leading-[45px] mb-4 !text-gray-900">
          Diskominfo Kota Madiun Resmikan Aplikasi Layanan Publik Terintegrasi
        </Typography>
        <Typography className="font-normal mb-4 !text-base text-gray-500 ">
          Dalam upaya mendukung kemudahan akses layanan publik, Diskominfo Kota Madiun meluncurkan aplikasi terintegrasi yang memudahkan masyarakat memperoleh informasi dan mengajukan pengaduan secara online.
        </Typography>
        <div className="flex items-center gap-3">
          <div>
            <Image
              width={256}
              height={256}
              src="/image/avatar3.jpg"
              className="w-12 h-12 rounded-lg"
              alt="Kepala Diskominfo"
            />
          </div>
          <div>
            <Typography className="!font-bold !text-sm text-gray-900">
              Noor Aflaah
            </Typography>
            <Typography className="!font-normal !text-xs text-gray-500 ">
              Kepala Dinas Kominfo Kota Madiun
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default BlogCardWithImage;
