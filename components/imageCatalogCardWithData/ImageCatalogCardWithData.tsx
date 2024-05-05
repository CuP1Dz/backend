'use client'
import React, { useEffect, useState } from "react"
import ImageCatalogCard from "../ImageCatalogCard/ImageCatalogCard";

const ImageCatalogCardWithData = () => {
    const [data, setData] = useState<ImageCatalogCard | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/getAllTasks');
        const data = await response.json();
        setData(data);
      };
  
      fetchData();
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return <ImageCatalogCard {...data} />;
  }
  
  export default ImageCatalogCardWithData;