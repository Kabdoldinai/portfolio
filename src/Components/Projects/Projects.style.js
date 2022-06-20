import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Content = styled.div `
  display: flex;
  
  .swiper {
    width: 1200px;
    height: 600px;
    margin-top: 2rem;
    justify-items: center;
    align-items: center;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    color: #000;
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
    position: relative;
  }

  .swiper-slide img {
    width: 60%;
    height: 50%;
    object-fit: cover;
  }

  .swiper-slide span {
    width: 80%;
    margin-left: -14rem;
    padding: 6rem;
  }

  .swiper-slide .git-logo {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 1rem;
    right: 3rem;
    cursor: pointer;
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
  
  .container {
    margin-top: 1rem;
    background: #ffff;
    height: 600px;
  }

  .swiper-slide .copepend {
    padding: 3rem;
  }
  
`

export const Menu =styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
  .line {
    margin: 1rem 0.9rem;
    border-left: 1px solid #fff;
    height: 630px;
    margin-left: 2rem;
  }
  
`