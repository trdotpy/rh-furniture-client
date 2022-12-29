import React from "react";
import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div>
      <div className="grid-cols-2 flex-wrap md:grid">
        {/* Featured Cards */}
        <div className="relative h-96 w-full overflow-hidden">
          <Link to="/products/63a21998aae7120aea1354df">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://cb2.scene7.com/is/image/CB2/NoorGreenBoucleSofaSHF22/$web_pdp_main_carousel_md$/220812130221/noor-green-boucle-sofa.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
            <div className="relative flex h-full items-center justify-center">
              <h3 className="text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
                LIVING
              </h3>
            </div>
          </Link>
        </div>

        <div className="relative h-96 w-full overflow-hidden">
          <Link to="/products/63a219e9aae7120aea1354e2">
            <img
              className="absolute inset-0 h-full w-full"
              src="https://cb2.scene7.com/is/image/CB2/DunnWoodDiningTableSHF22/$web_pdp_main_carousel_md$/220527111022/dunn-rectangular-black-ash-wood-dining-table-84.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
            <div className="relative flex h-full items-center justify-center">
              <h3 className="text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
                Dining
              </h3>
            </div>
          </Link>
        </div>

        <div className="relative h-96 w-full overflow-hidden">
          <Link to="/products/63a21a3aaae7120aea1354e5">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://cb2.scene7.com/is/image/CB2/FacadeShdwVelvetQBedSHF22/$web_pdp_main_carousel_md$/220624171027/facade-shadow-velvet-bed.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
            <div className="relative flex h-full items-center justify-center">
              <h3 className="text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
                Bedroom
              </h3>
            </div>
          </Link>
        </div>

        <div className="relative h-96 w-full overflow-hidden">
          <Link to="/products/63acb1023d3e2da775e0d27a">
            <img
              className="absolute inset-0 h-full w-full"
              src="https://cb2.scene7.com/is/image/CB2/AlairFlutedTrunkSHF21/$web_pdp_main_carousel_md$/210824132029/alair-fluted-storage-trunk.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
            <div className="relative flex h-full items-center justify-center">
              <h3 className="text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
                Storage
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
