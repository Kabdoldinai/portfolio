import styled from "styled-components";
import background from "../../assets/rectangle.png"


export const Wrapper = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${background}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div `
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5rem;
`
export const About = styled.div `
    color: #fff;
    padding: 2rem;
    text-align: right;
    position: relative;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      
      h1 {
        z-index: 1;
      }
      }
  .red-square {
    width: 200px;
    height:50px;
    background: #B90808;
    position: absolute;
    margin-left: 15rem;
  }
`
export const Menu = styled.div `
      display: flex;
      flex-direction: column;
      position: relative;
    .line {
      margin: 1rem 0.9rem;
      border-left: 1px solid #fff;
      height: 500px;
    }
  .sns {
    position: absolute;
    margin: 13rem -0.3rem;
    img {
      margin-top: 1rem;
    }
  }
`