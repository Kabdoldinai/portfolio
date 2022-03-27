import styled from "styled-components";
export const Wrapper = styled.div `
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`

export const Navbar = styled.div `
  z-index: 1;
  margin-top: 3rem;
  display: flex;
  width: 90%;
  justify-content: space-between;
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
   li {
     margin-right: 1rem;
     position: relative;
     color: #ffffff;
   }
    a {
      text-decoration-line: none;
    }
   
    
  }
  .white-circle {
    height: 20px;
    width: 20px;
    margin-top: 1.2rem;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
   
  }
  .red-cirlce {
    height: 40px;
    width: 40px;
    position: absolute;
    background-color: #9E0B0B;
    margin: -9px -30px;
    z-index: -1;
  }`


export const Content = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 28%;
  height: 70vh;
  margin-left: -53rem;
  
  button {
    background: #B90808;
    color: #fff;
    border-radius: 5px;
    border: none;
    padding: 8px;
    min-width: 150px;
    cursor: pointer;
  }
`
