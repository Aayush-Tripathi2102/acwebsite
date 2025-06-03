import Terminal from "@/components/terminal/Terminal";

export default function Home() {
  return (
    <div className="h-full w-full p-2">
      <div className="grid grid-cols-2 grid-rows-8 md:grid-cols-5 md:grid-rows-5 gap-2 h-full">
        {/* Search Bar - appears first on mobile, second column on desktop */}
        <div className="col-span-2 row-span-1 md:col-span-3 md:col-start-3 md:row-span-1 border-2 border-black bg-gray-200 p-4">
          SearchBar
        </div>

        {/* Terminal - appears second on mobile, first column on desktop */}
        <div className="col-span-2 row-span-3 row-start-2 md:col-span-2 md:row-span-5 md:row-start-1 border-2 border-black bg-gray-100 p-4">
          <Terminal />
        </div>

        {/* Apps - appears third on both layouts */}
        <div className="col-span-2 row-span-4 row-start-5 md:col-span-3 md:col-start-3 md:row-span-4 md:row-start-2 border-2 border-black bg-gray-300 p-4">
          Apps
        </div>
      </div>
    </div>
  );
}
