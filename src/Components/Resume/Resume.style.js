import styled from "styled-components";


export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`
export const Content = styled.div `
  display: block;
  width: 88%;
  
`
export const Line = styled.div `
      display: block;
      width: 400px;
      border-bottom:solid #ffffff;
`
export const Description = styled.div `
    p {
      width: 550px;
    }
`
export const Experience = styled.div `
   display: flex;
   justify-content: space-between;
   align-content: space-between;
   width: 100%;
    h2 {
      text-transform: uppercase;
    }
`

export const Jobs = styled.div `
  display: flex;
  flex-direction: column;
   .block {
     display: flex;
     margin-bottom: 2rem;
   }
  .description {
    margin-left: 1rem;
  }
  .university {
    margin-top: 1.1rem;
  }
  .skills {
    margin-left: 1rem;
    display: flex;
  }
`

export const Menu =styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
  .line {
    margin: 1rem 0.9rem;
    border-left: 1px solid #fff;
    height: 800px;
  }
  .sns {
    position: absolute;
    margin: 10rem -1.5rem;
    img {
      margin-top: 1rem;
    }
  }
`