import React from "react"
import "./catalog.css"
import items from "@/store/imageCatalogStore"
import ImageCatalogCard from "@/components/ImageCatalogCard/ImageCatalogCard"
import ImageCatalogCardWithData from "@/components/imageCatalogCardWithData/ImageCatalogCardWithData"

const Catalog = async () => {
  const zapros = await fetch("http://localhost:3003/getAllTasks").then((res) => res.json());

  return (
    <div className="catalog">
      <div className="catalog_cont">
        <h2>Catalog</h2>

        <div className="grid">
          {zapros.map((task: { 
            _id: React.Key | null | undefined
            text: React.Key | null | undefined
           }) => (
            <ImageCatalogCardWithData key={task._id} text={task.text}/>
          ))}
        </div>

        <div className="catalog-btn">
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;