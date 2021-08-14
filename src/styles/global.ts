import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
       :root {
        --background: #f0f2f5;//#1F2229;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-dark: #0A4E9E;
        --blue-alternative: #0F7AF6;


        --green-alternative: #52C729;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        //--background2: #2E303C;
        --background: #F0F2F5;
        --shape: #FFFFFF;
    }


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor:nor-not-allowed;
}


.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    //display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    //width: 100%;
   // max-width:  1576px;//576
    background:  var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;

    max-width: calc(100vw - 2rem);
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}
`;