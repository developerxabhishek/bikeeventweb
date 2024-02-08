import { useState } from "react";
import "./Gallery.css";
const Gallery = () => {
  return (
    <>
      <section id="gallary" class="p-5 animate__animated  wow animate__zoomIn">
        <div class="container">
          <div class="row ">
            <div class="col-lg-4 col-md-6 ">
              <img
                src="https://img.freepik.com/premium-photo/shot-young-man-biker-having-fun-driving-empty-highway-motorcycle-tour-journey_519356-381.jpg"
                class="rounded float-start img-fluid mt-3 p-0  border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-4 col-md-6">
              <img
                src="https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123_1280.jpg"
                class="rounded float-start img-fluid mt-3 p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-4 col-md-6">
              {" "}
              <img
                src="https://www.azutura.com/media/catalog/product/cache/52/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-42675_WP.jpg"
                class="rounded float-start img-fluid mt-3 p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-6 col-md-6">
              <img
                src="/images/bike1.jpg"
                class="rounded float-start img-fluid mt-3 p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-6 ">
              <img
                src="/images/bike2.jpg"
                class="rounded float-start img-fluid mt-3 responsive p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-8 col-md-8 d-block">
              <img
                src="https://cdn.pixabay.com/photo/2018/08/29/03/57/man-3639100_1280.jpg"
                class="rounded float-start container-fluid mt-3 p-0 border1 border-3 abhishek"
                alt="..."
              />
            </div>
            <div class="col-lg-4 col-md-4 img-fluid">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUK9KmMKbneTr9obQAt8a790XVo27nwMOuofP5ctsvuVDNDzcgfT8t1ASv4obItCn9m8&usqp=CAU"
                class="rounded float-start container-fluid img-fluid mt-3 mb-0 p-0 border1 border-3 abhishek"
                alt="..."
              />
              <img
                src="https://cdn.pixabay.com/photo/2014/07/05/16/44/biker-384921_960_720.jpg"
                class="rounded float-start container-fluid mt-3 p-0 border1 border-3 abhishek"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
