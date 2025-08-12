import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: linear-gradient(
      180deg,
      #ffffffff 0%,
      #fff 100%
    ); /* cream fade to white */
    font-family: 'Inter', sans-serif;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #0d6e23ff;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #0d6e23ff;
        color:white;
    }
}

h1{
    color:white;
}

h2{
    font-weight:lighter;
    font-size: 4rem;
}

h3{
    color:white;
}

h4{
    font-weight:bold;
    font-size: 2rem;
}

a{
    font-size:1.1rem;
}

span{
    font-weight:bold;
    color: #000000ff;
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size:1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle;
