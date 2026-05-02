import Marquee from "react-fast-marquee";
import tilesData from "../tiles.json";
import Link from "next/link";

export default function Home() {
  const featuredTiles = tilesData.slice(0, 4); // Prothom 4-ti tiles featured hisebe thakbe

  return (
    <div className="pb-20">
      
      {/* 1. Banner Section (Hero with Image Tag) */}
      <section className="hero min-h-[80vh] bg-base-100 px-4 lg:px-12">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          
          {/* Banner Image */}
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" 
              alt="Premium Tiles Gallery" 
              className="w-full rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition duration-500" 
            />
          </div>

          {/* Banner Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Discover Your <br />
              <span className="text-primary">Perfect Aesthetic</span>
            </h1>
            <p className="py-6 text-lg text-gray-600">
              Transform your space with our premium selection of artistic tiles. 
              From classic marble to modern geometric patterns—find the floor of your dreams.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/all-tiles" className="btn btn-primary btn-lg shadow-lg">
                    Browse Now
                </Link>
                <Link href="#featured" className="btn btn-outline btn-lg">
                    View Featured
                </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Marquee Section (Moving Text) */}
      <div className="bg-primary text-white py-4 font-bold uppercase tracking-wider overflow-hidden">
        <Marquee pauseOnHover={true} speed={70}>
          <span className="mx-12">🔥 New Arrivals: Ceramic Blue Tile |</span>
          <span className="mx-12">⭐ Weekly Feature: Modern Geometric Patterns |</span>
          <span className="mx-12">✨ Join the Community of Designers |</span>
          <span className="mx-12">🚀 Special Discount on Marble Tiles |</span>
        </Marquee>
      </div>

      {/* 3. Featured Tiles Section (Improved Design) */}
      <section id="featured" className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">Our Collection</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-slate-800">Featured Tiles</h2>
              <div className="h-1.5 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
              <p className="mt-6 text-slate-500 max-w-lg mx-auto italic">
                Handpicked premium designs to elevate your interior aesthetic.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredTiles.map((tile) => (
              <div key={tile.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                      src={tile.image} 
                      alt={tile.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-800 px-4 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                      {tile.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8">
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                    {tile.title}
                  </h2>
                  <p className="text-sm text-slate-500 mt-3 line-clamp-2 leading-relaxed">
                    {tile.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-50">
                    <div>
                      <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">Price</span>
                      <span className="text-2xl font-black text-slate-800">${tile.price}</span>
                    </div>
                    <Link href={`/tile/${tile.id}`} className="btn btn-primary btn-circle shadow-lg shadow-primary/30 group-hover:translate-x-1 transition-transform">
                      <span className="text-lg">➔</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/all-tiles" className="btn btn-outline btn-wide border-2 hover:bg-primary hover:border-primary">
                View All Collection
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}