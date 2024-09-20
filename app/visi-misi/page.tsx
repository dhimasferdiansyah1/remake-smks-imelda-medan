// pages/visi-misi.js (or app/visi-misi/page.js in App Router)

"use client";
import Image from "next/image";

export default function VisiMisiPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 pt-8">
          Visi & Misi SMKS Imelda Medan
        </h1>

        {/* Visi Section */}
        <div className="bg-white p-8 rounded-3xl shadow-sm mb-2">
          <h2 className="text-2xl font-semibold text-[#25478d] mb-4">Visi</h2>
          <p className="text-gray-700">
            Menghasilkan tamatan SMK yang handal, profesional, dan kompeten di
            bidangnya untuk memenuhi kebutuhan dunia kerja di tingkat Nasional
            maupun Internasional
          </p>
        </div>

        {/* Misi Section */}
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-semibold text-[#25478d] mb-4">Misi</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Mengembangkan iklim belajar yang berakar pada norma, agama, budaya
              dan karakter Bangsa
            </li>
            <li>
              Mengembangkan Pendidikan yang berlandasan mutu, profesional dan
              berorientasi masa depan
            </li>
            <li>
              Mencetak tamatan berkompetensi yang memiliki daya saing dalam
              bidangnya
            </li>
            <li>Menjalin kemitraan dengan dunia Industri</li>
            <li>
              Meningkatkan kualitas belajar mengajar secara berkelanjutan dengan
              cara penambahan peralatan dan fasilitasi praktek untuk mencapai
              sekolah berstandar Nasional dan Internasional
            </li>
            <li>
              Menjalankan system manajemen yang bertanggung jawab dan mengacu
              kepada tugas pokok dan fungsi masing-masing personal serta
              memelihara hubungan baik antar semua personal.
            </li>
          </ul>
        </div>

        {/* Optional: Add an image related to the school's vision and mission */}

        <div className="mt-12">
          <Image
            src="/visi-misi.jpg"
            alt="SMKS Imelda Medan Vision and Mission"
            width={800}
            height={400}
            className="w-full rounded-3xl shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
