"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Calendar,
  ChevronRight,
  X,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    setShowBadge(true);
    const timer = setTimeout(() => setShowBadge(false), 99990000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-white min-h-screen pt-14">
      <div className="flex w-full justify-center mt-4">
        {showBadge && (
          <InformationBadge
            message="Dalam pengembangan, website ini belum berfungsi penuh"
            onClose={() => setShowBadge(false)}
          />
        )}
      </div>
      {/* Hero Section */}
      <section className="pt-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center py-14">
          {/* Real-time clock */}
          <Clock />
          <h1 className="text-2xl md:text-6xl font-bold mb-4 text-gray-900">
            Selamat Datang di SMKS Imelda Medan
          </h1>
          <p className="text-xl md:text-xl mb-8 text-gray-600">
            Membentuk Generasi Unggul dan Berakhlak Mulia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pendaftaran"
              className="justify-center bg-gradient-to-r from-[#25478d] to-[#1c58d0] hover:opacity-90 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 text-lg"
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/pendaftaran"
              className="justify-center bg-gradient-to-r from-[#258d4d] to-[#1cd061] hover:opacity-90 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 text-lg"
            >
              Ada Pertanyaan ?
              <HelpCircle className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="relative mt-12 w-full overflow-hidden rounded-3xl">
          <Image
            src="/smks-imelda-landingpage-bg.jpeg"
            alt="SMKS Imelda Medan"
            width={1280}
            height={720}
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Mengapa Memilih SMKS Imelda Medan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<BookOpen className="w-12 h-12 text-[#25478d]" />}
              title="Kurikulum Terkini"
              description="Kami menerapkan kurikulum terbaru yang sesuai dengan kebutuhan industri."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-[#25478d]" />}
              title="Tenaga Pengajar Berkualitas"
              description="Guru-guru kami adalah profesional berpengalaman di bidangnya."
            />
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-[#25478d]" />}
              title="Kegiatan Ekstrakurikuler"
              description="Berbagai kegiatan untuk mengembangkan bakat dan minat siswa."
            />
          </div>
        </div>
      </section>

      {/* School Stats Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Mari Menjadi Bagian Dari Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              label="Tahun Berdiri"
              value="25"
              icon={<Calendar className="w-6 h-6 text-[#25478d]" />}
            />
            <StatCard
              label="Total Alumni"
              value="5000+"
              icon={<Users className="w-6 h-6 text-[#25478d]" />}
            />
            <StatCard
              label="Guru & Staff"
              value="150"
              icon={<Users className="w-6 h-6 text-[#25478d]" />}
            />
            <StatCard
              label="Siswa Aktif"
              value="1200"
              icon={<Users className="w-6 h-6 text-[#25478d]" />}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-l from-slate-100 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Berita Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard
              image="/news-sample.jpg"
              title="Prestasi Gemilang Siswa SMKS Imelda Medan"
              date="12 Juni 2024"
              excerpt="Siswa kami berhasil meraih juara pertama dalam kompetisi robotik tingkat nasional."
            />
            <NewsCard
              image="/news-sample.jpg"
              title="Kunjungan Industri ke PT Teknologi Maju"
              date="5 Juni 2024"
              excerpt="Siswa jurusan TKJ melakukan kunjungan industri untuk memperluas wawasan tentang dunia kerja."
            />
            <NewsCard
              image="/news-sample.jpg"
              title="Workshop Kewirausahaan untuk Siswa"
              date="1 Juni 2024"
              excerpt="SMKS Imelda Medan mengadakan workshop kewirausahaan untuk membekali siswa dengan jiwa entrepreneur."
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/berita"
              className="inline-flex items-center text-zinc-600 hover:text-zinc-900 font-semibold"
            >
              Lihat Semua Berita
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Event Terdekat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard
              image="/news-sample.jpg"
              title="Prestasi Gemilang Siswa SMKS Imelda Medan"
              date="12 Juni 2024"
              excerpt="Siswa kami berhasil meraih juara pertama dalam kompetisi robotik tingkat nasional."
            />
            <NewsCard
              image="/news-sample.jpg"
              title="Kunjungan Industri ke PT Teknologi Maju"
              date="5 Juni 2024"
              excerpt="Siswa jurusan TKJ melakukan kunjungan industri untuk memperluas wawasan tentang dunia kerja."
            />
            <NewsCard
              image="/news-sample.jpg"
              title="Workshop Kewirausahaan untuk Siswa"
              date="1 Juni 2024"
              excerpt="SMKS Imelda Medan mengadakan workshop kewirausahaan untuk membekali siswa dengan jiwa entrepreneur."
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/event"
              className="inline-flex items-center text-zinc-600 hover:text-zinc-900 font-semibold"
            >
              Lihat Semua Event
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function InformationBadge({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <div className="text-xs md:text-sm block w-max top-14 mx-4 md:mx-16 left-0 right-0 bg-yellow-100 rounded-full text-yellow-900 px-4 py-1.5 z-10 transition-all duration-500 ease-in-out transform translate-y-0">
      <div className="flex justify-between items-center mx-8">
        <div className="flex items-center">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-yellow-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <p className="font-medium text-sm">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-yellow-900 hover:text-yellow-700 transition-colors duration-200 pl-4"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDay = (date: Date) => {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    return days[date.getDay()];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="pb-4 font-medium text-rose-800">
      {formatDay(time)} {formatTime(time)} WIB,{" "}
      {time.toLocaleDateString("id-ID")}
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl text-center transition duration-300 hover:bg-zinc-50">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

function NewsCard({ image, title, date, excerpt }: NewsCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-3xl overflow-hidden transition duration-300 hover:opacity-90 flex flex-col h-full">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{date}</p>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{excerpt}</p>
        <Link
          href="#"
          className="hover:opacity-90 font-semibold items-center mt-auto w-4"
        >
          <Button variant="ghost" className="rounded-3xl">
            Baca Selengkapnya <ChevronRight className="ml-1 h-4 w-4 c" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-3xl text-center shadow-sm transition duration-300 hover:opacity-80">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-2xl font-bold text-[#25478d] mb-2">{value}</h4>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
