import { useState } from "react";
import { IoBedSharp } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import styled from "./AllProperties.module.css";

export default function AllProperties() {
  const [filter, setFilter] = useState("All");

  const properties = [
    {
      id: "1",
      tag: "Rent",
      address1: "17081 Perry Street",
      address2: "San Francisco, CA, USA",
      price: "$850,000",
      src: "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpg",
      homeItem: { Beds: 4, Bath: 2, Levels: 3, Sqft: 1234 },
    },
    {
      id: "2",
      tag: "Rent",
      address1: "52591 Union Boulevard",
      address2: "San Francisco, CA, USA",
      price: "$580,000",
      src: "https://static.wixstatic.com/media/84770f_ca6a1aafafa04284a052e09b53a0fce9~mv2_d_3456_2304_s_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      homeItem: { Beds: 4, Bath: 2, Levels: 3, Sqft: 1234 },
    },
    {
      id: "3",
      tag: "Rent",
      address1: "33234 Washington Avenue",
      address2: "San Francisco, CA, USA",
      price: "$770,000",
      src: "https://static.wixstatic.com/media/84770f_461a280a171041da95705f2f064c9afc~mv2_d_6272_4181_s_4_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      homeItem: { Beds: 4, Bath: 2, Levels: 2, Sqft: 1234 },
    },
    {
      id: "4",
      tag: "Rent",
      address1: "15066 Banks Street",
      address2: "San Francisco, CA, USA",
      price: "$700,000",
      src: "https://static.wixstatic.com/media/84770f_ab580106fc944e1cb9b2bdeca3a1296c~mv2_d_2917_1843_s_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      homeItem: { Beds: 4, Bath: 2, Levels: 3, Sqft: 1234 },
    },
    {
      id: "5",
      tag: "Buy",
      address1: "17081 Perry Street",
      address2: "San Francisco, CA, USA",
      price: "$850,000",
      src: "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpg",
      homeItem: { Beds: 4, Bath: 2, Levels: 3, Sqft: 1234 },
    },
    {
      id: "6",
      tag: "Buy",
      address1: "52591 Union Boulevard",
      address2: "San Francisco, CA, USA",
      price: "$580,000",
      src: "https://static.wixstatic.com/media/84770f_ca6a1aafafa04284a052e09b53a0fce9~mv2_d_3456_2304_s_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      homeItem: { Beds: 4, Bath: 2, Levels: 3, Sqft: 1234 },
    },
    {
      id: "7",
      tag: "Buy",
      address1: "33234 Washington Avenue",
      address2: "San Francisco, CA, USA",
      price: "$770,000",
      src: "https://static.wixstatic.com/media/84770f_461a280a171041da95705f2f064c9afc~mv2_d_6272_4181_s_4_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      homeItem: { Beds: 4, Bath: 2, Levels: 2, Sqft: 1234 },
    },
    {
      id: "8",
      tag: "Buy",
      address1: "15066 Banks Street",
      address2: "San Francisco, CA, USA",
      price: "$700,000",
      src: "https://static.wixstatic.com/media/84770f_ab580106fc944e1cb9b2bdeca3a1296c~mv2_d_2917_1843_s_2.jpeg/v1/fill/w_313,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpeg",
      homeItem: { Beds: 4, Bath: 2, Levels: 3, Sqft: 1234 },
    },
  ];

  // Filtered properties based on user selection
  const filteredProperties =
    filter === "All"
      ? properties
      : properties.filter((property) => property.tag === filter);

  return (
    <div>
      {/* Hero Section */}
      <div className={styled.container}>
        <img
          className={styled.img}
          src="https://static.wixstatic.com/media/82fcd3_3bcb987bda4140ebae9689b9cae48c18~mv2_d_3000_1987_s_2.jpg/v1/fill/w_1820,h_225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_3bcb987bda4140ebae9689b9cae48c18~mv2_d_3000_1987_s_2.jpg"
          alt=""
        />
        <div className={styled.centered}>
          <p className={styled.content}>OUR EXCLUSIVE PROPERTIES</p>
          <p className={styled.properties}>All Properties</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className={styled.filterButtons}>
        <button
          className={filter === "All" ? styled.active : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Buy" ? styled.active : ""}
          onClick={() => setFilter("Buy")}
        >
          Buy
        </button>
        <button
          className={filter === "Rent" ? styled.active : ""}
          onClick={() => setFilter("Rent")}
        >
          Rent
        </button>
      </div>

      {/* Properties Grid */}
      <div className={styled.saleContainer}>
        <div className={styled.grid}>
          {filteredProperties.map((value) => (
            <div key={value.id} className={styled.card}>
              <div className={styled.imageWrapper}>
                <img src={value.src} alt={value.address1} />
                <span className={styled.tag}>{value.tag}</span>
              </div>

              <div className={styled.cardContent}>
                <h3 className={styled.address1}>{value.address1}</h3>
                <p className={styled.address}>{value.address2}</p>
                <p className={styled.price}>{value.price}</p>

                <div className={styled.features}>
                  <p>
                    <IoBedSharp /> Beds- {value.homeItem.Beds}
                  </p>
                  <p>
                    <LuBath /> Baths- {value.homeItem.Bath}
                  </p>
                  <p>
                    <LuBath /> Levels- {value.homeItem.Levels}
                  </p>
                  <p>
                    <LuBath /> Sqft- {value.homeItem.Sqft}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
