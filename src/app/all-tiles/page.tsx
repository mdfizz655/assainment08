"use client";
import { useState } from "react";
import tilesData from "../../tiles.json";
import Link from "next/link";

const AllTilesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Search logic: Title-er upor base kore filter hobe
    const filteredTiles = tilesData.filter(tile =>
        tile.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">All Tiles Gallery</h1>
                
                {/* Search Bar */}
                <div className="max-w-md mx-auto">
                    <input 
                        type="text" 
                        placeholder="Search tiles by title..." 
                        className="input input-bordered w-full shadow-md focus:input-primary"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Tiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredTiles.length > 0 ? (
                    filteredTiles.map((tile) => (
                        <div key={tile.id} className="card bg-base-100 shadow-xl hover:scale-105 transition-transform border border-gray-100">
                            <figure className="h-56">
                                <img src={tile.image} alt={tile.title} className="w-full h-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{tile.title}</h2>
                                <p className="text-sm text-gray-500">{tile.material} | {tile.dimensions}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-bold text-primary">${tile.price}</span>
                                    <Link href={`/tile/${tile.id}`} className="btn btn-outline btn-primary btn-sm">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <p className="text-2xl text-gray-400 font-semibold">No tiles found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTilesPage;