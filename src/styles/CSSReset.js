import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
    /* Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.backgroundBase};
        color: ${({ theme }) => theme.textColorBase};
    }
    /* NextJS */
    html {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
    
    /* Globals */
    button,
    a {
        text-decoration: none;
        opacity: 1;
        transition: .3s;
        &:hover,
        &:focus {
        opacity: .5;
        }
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 10px ;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;