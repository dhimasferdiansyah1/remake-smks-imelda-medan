const jurusanData = [
  {
    nama: "Teknik Komputer Jaringan",
    singkatan: "TKJ",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at justo vitae est fringilla efficitur. Sed vel magna non magna tincidunt semper vitae sed sapien.",
    // You can add an image path for each jurusan if you want
    // image: "/path/to/tkj-image.jpg",
  },
  {
    nama: "Teknik Instalasi Tenaga Listrik",
    singkatan: "TITL",
    deskripsi:
      "Sed a eros et mi fermentum vestibulum ac vitae mi. Mauris volutpat, sapien vitae luctus elementum, urna sapien varius urna, eget scelerisque augue risus non lorem.",
    // image: "/path/to/titl-image.jpg",
  },
  {
    nama: "Teknik Bisnis Sepeda Motor",
    singkatan: "TBSM",
    deskripsi:
      "Cras vitae dolor id eros rhoncus interdum et sed mi. Nam vel lorem vel sapien ullamcorper feugiat non at lacus. ",
    // image: "/path/to/tbsm-image.jpg",
  },
  {
    nama: "Teknik Kendaraan Ringan",
    singkatan: "TKR",
    deskripsi:
      "Donec a dui et nulla ullamcorper vulputate eu eget purus. Aenean varius velit vel odio feugiat, ac consequat lorem faucibus.",
    // image: "/path/to/tkr-image.jpg",
  },
  {
    nama: "Multimedia/ Desain Komunikasi Visual",
    singkatan: "DKV",
    deskripsi:
      "Sed lacinia, urna quis faucibus aliquet, diam nibh vulputate mi, vitae efficitur nunc urna nec tellus.",
    // image: "/path/to/dkv-image.jpg",
  },
  {
    nama: "Manajemen Perkantoran",
    singkatan: "MP",
    deskripsi:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod, eros id egestas finibus, quam enim rutrum leo, ut viverra sem purus sed quam.",
    // image: "/path/to/mp-image.jpg",
  },
  {
    nama: "Akuntansi",
    singkatan: "AKL",
    deskripsi:
      "Integer ultrices, velit vitae interdum aliquam, tortor odio eleifend sem, a bibendum nunc mauris et nisl. ",
    // image: "/path/to/akl-image.jpg",
  },
];

export default function JurusanPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800 mt-8">
          Program Studi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jurusanData.map((jurusan) => (
            <div
              key={jurusan.singkatan}
              className="bg-white rounded-3xl border shadow-sm p-6 transition duration-300 hover:opacity-80"
            >
              <h2 className="text-lg text-zinc-700 mb-4">
                {jurusan.nama} ({jurusan.singkatan})
              </h2>
              {/* <p className="text-gray-700">{jurusan.deskripsi}</p> */}
              {/* Optional: Display image if available */}
              {/* {jurusan.image && (
                <div className="mt-4">
                  <Image
                    src={jurusan.image}
                    alt={jurusan.nama}
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
