import React, { useState, useEffect } from "react"
import ReactImageZoom from "react-image-zoom"

export default function ProductGalleryBox() {
  const [images, setImages] = useState([])
  const [imageIndex, setImageIndex] = useState(0)
  const [previewImageStyle, setPreviewImageStyle] = useState()

  useEffect(() => {
    setImages([
      "https://picsum.photos/id/1018/250/150/",
      "https://picsum.photos/id/1015/1000/600/",
      "https://picsum.photos/id/1019/1000/600/",
    ])
  }, [])

  useEffect(() => {
    if (images.length > 0) {
      setPreviewImageStyle({
        backgroundSize: "1000px 600px",
        backgroudPosition: "center",
        backgroudImage: `url(${images[imageIndex]})`,
      })
    }
  }, [images, setImages])

  const changeImage = e => {
    setImageIndex(e.target.getAttribute("dataid"))
  }
  const zoomImage = e => {
    console.log(e)
  }

  // let imageZoomProps = {
  //   width: 400,
  //   height: 250,
  //   zoomWidth: 500,
  //   img: images[imageIndex],
  // }

  return (
    <>
      <div className="prd-image-gallery-box">
        <img
          src={images[imageIndex]}
          onMouseOver={zoomImage}
          alt={`product-${imageIndex}`}
        />
        <div className="previewImage" style={previewImageStyle} />
        <div className="thumbs mt-2 d-flex justify-content-center">
          {images.map((item, index) => (
            <img
              className={index == imageIndex ? "active" : ""}
              key={index}
              src={item}
              dataid={index}
              onMouseEnter={changeImage}
              alt={`product-${index}`}
            />
          ))}
        </div>
      </div>
      {/* <ReactImageZoom {...imageZoomProps} /> */}
    </>
  )
}
