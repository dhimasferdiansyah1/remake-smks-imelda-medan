import { TenagaPendidikTable } from "./data-table";

export default function TenagaPendidikPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 mt-8">
          Data Tenaga Pendidik SMKS Imelda Medan
        </h1>
        <TenagaPendidikTable /> {/* Use the data table component here */}
      </div>
    </div>
  );
}
