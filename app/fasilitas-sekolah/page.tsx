const fasilitas = [
  "BENGKEL TEKNIK BISNIS SEPEDA MOTOR YANG BEKERJASAMA DENGAN PT.AHHAS HONDA DAN PT.INDAKO TRADING COY",
  "BENGKEL LISTRIK",
  "BENGKEL OTOMOTIF",
  "LAB KOMPUTER",
  "LAB MULTIMEDIA",
  "LAB PERKANTORAN DAN AKUNTANSI",
  "LAPANGAN OLAHRAGA",
  "LAPANGAN FUTSAL DAN BASKET",
  "RUANG BELAJAR YANG NYAMAN",
  "RUANG AULA SERBAGUNA",
  "AKSES SUMBER LISTRIK YANG MUDAH",
  "FREE WIFI",
];

export default function FasilitasSekolahPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium text-center mb-12 text-gray-800 mt-8">
          Fasilitas Sekolah
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fasilitas.map((item, index) => (
            <div
              key={index}
              className="bg-white border p-6 rounded-3xl shadow-sm flex items-center transition duration-300 hover:opacity-80"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
