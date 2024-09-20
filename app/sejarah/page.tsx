"use client";

export default function SejarahPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800  pt-8">
          Sejarah SMKS Imelda Medan
        </h1>

        {/* Founding and Vision */}
        <div className="bg-white p-8 rounded-3xl shadow-sm mb-4">
          <p className="text-gray-700">
            SMKS Imelda Medan didirikan pada tahun 2012 dengan visi yang kuat:
          </p>
          <blockquote className="mt-4 border-l-4 border-[#25478d] pl-4 italic text-gray-700">
            “Menghasilkan tamatan SMK yang handal, profesional, dan kompeten di
            bidangnya untuk memenuhi kebutuhan dunia kerja di tingkat Nasional
            maupun Internasional.”
          </blockquote>
        </div>

        {/* Jurusan (Majors) */}
        <div className="bg-white p-8 rounded-3xl shadow-sm mb-4">
          <h2 className="text-2xl font-semibold text-[#25478d] mb-4">
            Program Studi (Jurusan)
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Teknik Komputer dan Jaringan</li>
            <li>Teknik Instalasi Tenaga Listrik</li>
            <li>Teknik Sepeda Motor</li>
            <li>Teknik Kendaraan Ringan</li>
            <li>Multimedia/ Desain Komunikasi Visual</li>
            <li>Manajemen Perkantoran</li>
            <li>Akuntansi</li>
          </ul>
        </div>

        {/* Ekstrakurikuler (Extracurricular Activities) and Achievements */}
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-semibold text-[#25478d] mb-4">
            Ekstrakurikuler dan Prestasi
          </h2>
          <p className="text-gray-700">
            SMKS Imelda Medan memiliki berbagai kegiatan ekstrakurikuler yang
            aktif dan berprestasi. Salah satu yang menonjol adalah PASKIBRA
            (PASMELDAN).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
            Prestasi Terbaru PASMELDAN:
          </h3>
          <p className="text-gray-700">
            Dalam Perlombaan LENTERA CLASS TWO di SMA Kemala Bhayangkari 1 Medan
            Se-Sumatera Utara, PASMELDAN berhasil meraih:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Juara Utama 2 LKBB</li>
            <li>Juara Bina 1 Formasi</li>
            <li>Juara 1 Team Terfavorit</li>
            <li>Pelatih Terbaik III</li>
          </ul>
          <p className="text-gray-700 mt-4">Serta:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Juara Umum Piala Bergilir Purna Pasbhari</li>
            <li>Juara Umum Piala Tetap Team Terfavorit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
