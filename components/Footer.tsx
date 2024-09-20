import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

// ... Previous components (Clock, InformationBadge) remain unchanged ...

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">SMKS Imelda Medan</h3>
            <p className="text-gray-400">
              Membentuk Generasi Unggul dan Berakhlak Mulia
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Sejarah
                </Link>
              </li>
              <li>
                <Link
                  href="/visi-misi"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Visi Misi
                </Link>
              </li>
              <li>
                <Link
                  href="/tenaga-pendidik"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Tenaga Pendidik
                </Link>
              </li>
              <li>
                <Link
                  href="/fasilitas-sekolah"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Fasilitas Sekolah
                </Link>
              </li>
              <li>
                <Link
                  href="/jurusan"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Jurusan
                </Link>
              </li>
              <li>
                <Link
                  href="/kurikulum"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Kurikulum
                </Link>
              </li>
              <li>
                <Link
                  href="/kelender-akademik"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Kalender Akademik
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a
                  href="mailto:info@smksimelda.sch.id"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  info@smksimelda.sch.id
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Jl. Bilal No. 24, Medan</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SMKS Imelda Medan. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
