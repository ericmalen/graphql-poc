import { Skeleton } from "@/components/ui/skeleton";

export function GraphiQLSqueleton() {
  return (
    <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Top bar */}
      <div className="h-10 bg-gray-700 flex items-center justify-between px-4">
        <div className="w-20 h-4 bg-gray-600 rounded animate-pulse"></div>
        <div className="w-24 h-4 bg-gray-600 rounded animate-pulse"></div>
      </div>

      {/* Main content area */}
      <div className="flex h-[calc(100%-2.5rem)]">
        {/* Left sidebar */}
        <div className="w-12 bg-gray-750 border-r border-gray-700">
          <div className="flex flex-col items-center mt-4 space-y-4">
            <div className="w-6 h-6 bg-gray-600 rounded animate-pulse"></div>
            <div className="w-6 h-6 bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Query editor area */}
        <div className="flex-1 p-4">
          <div className="h-full flex flex-col">
            <div className="flex-1 space-y-2">
              <div className="w-3/4 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-2/3 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded animate-pulse"></div>
            </div>
            {/* Bottom tabs */}
            <div className="h-32 mt-4">
              <div className="flex border-b border-gray-700">
                <div className="w-24 h-8 bg-gray-700 rounded-t animate-pulse mr-2"></div>
                <div className="w-24 h-8 bg-gray-700 rounded-t animate-pulse"></div>
              </div>
              <div className="h-24 bg-gray-750 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-16 bg-gray-750 border-l border-gray-700 flex flex-col items-center py-4 space-y-4">
          <div className="w-10 h-10 bg-pink-500 rounded-full animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-600 rounded animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-600 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
