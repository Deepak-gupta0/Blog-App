export default function TravelCardsFlex() {
  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-full mx-auto flex flex-col md:flex-row gap-4 md:gap-6">
        
        {/* LEFT SIDE (Card 1 + Card 3 stacked) */}
        <div className="flex flex-col flex-1 gap-2 md:gap-3">
          
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg h-80 group">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800"
              alt="Mountain"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h2 className="text-white text-lg md:text-xl font-semibold mb-2">
                Explore more to get your comfort zone
              </h2>
              <p className="text-white/80 text-sm mb-4">
                Book your perfect stay with us.
              </p>
              <button className="bg-white text-gray-900 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                Booking Now →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg h-80 group">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
              alt="Mountain person"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-white/90 text-xs uppercase tracking-wider mb-1">
                Article Available
              </p>
              <h2 className="text-white text-6xl md:text-7xl font-bold">78</h2>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (Tall card) */}
        <div className="relative overflow-hidden rounded-xl shadow-lg flex-1 group md:h-[650px] md:max-h-[650px] max-h-80">
          <img
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
            alt="Beach cliff"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h2 className="text-white text-xl md:text-2xl font-medium leading-relaxed">
              Beyond accommodation, creating<br />memories of a lifetime
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
