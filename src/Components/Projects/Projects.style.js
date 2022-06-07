import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Content = styled.div `
  .swiper {
    width: 1200px;
    height: 600px;
    margin-top: 2rem;
    
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: white;
    background-color: rgba(255, 255, 255, 0.5);
    right:10px;
    padding: 30px;
    color: #000 !important;
    fill: black !important;
    stroke: black !important;
  }

  span {
    position: absolute;
    background: #9f0b0b;
    padding: 1rem;
    border-radius: 6px;
    width: 1000px;
    top: 33rem;
  }

`