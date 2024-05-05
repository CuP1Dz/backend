'use client'
import React, { useEffect, useState } from "react"
import Image from "@/node_modules/next/image"
import "./ImageCatalogCard.css"

interface ImageCatalogCard {
  photo: string;
  text: string;
  price: string;
}

const ImageCatalogCard = ({photo, text, price }: ImageCatalogCard) => {
  return (
    <div className="image-catalog-card">
      <Image src={photo} alt={text} className="image-catalog-image" />
      <p className="image-catalog-name">{text}</p>
      <p className="image-catalog-cost">{price}</p>
    </div>
  );
};

export default ImageCatalogCard;