import React from "react";
import CampaignItem from "../campaignItem";

const CampaignList = () => {
  return (
    <>
      <section className="flex w-8/12 mx-auto gap-10 flex-col lg:flex-row">
        <CampaignItem
          discount={20}
          title="Pizza Jappon"
          src="https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933"
        />
        <CampaignItem
          discount={20}
          title="Pizza Mexican"
          src="https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933"
        />
      </section>
    </>
  );
};

export default CampaignList;
