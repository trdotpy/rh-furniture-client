import React from "react";

export default function ProductGrid() {
  return (
    <div className="mx-auto space-y-2 bg-transparent py-2 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0">
      <div className="w-full rounded">
        <img
          src="https://cb2.scene7.com/is/image/CB2/SavinaSmAlbstrPendantROS22/$web_pdp_main_carousel_md$/230111094049/SavinaSmAlbstrPendantROS22.jpg"
          alt="product"
          className="rounded-xl"
        />
      </div>
      <div className="w-full rounded">
        <img
          src="https://cb2.scene7.com/is/image/CB2/TiltBthrmMrrrRound24inSHF21/$web_pdp_main_carousel_md$/211014111845/tilt-bathroom-mirror-round-24.jpg"
          alt="product"
          className="rounded-xl"
        />
      </div>
      <div className="w-full rounded">
        <img
          src="https://cb2.scene7.com/is/image/CB2/SeiPillarHoldersS3AVSHF22/$web_pdp_main_carousel_md$/220413123852/sei-pillar-candle-holders.jpg"
          alt="product"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
