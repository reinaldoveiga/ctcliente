import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue-dark);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font: 1rem;
        color: #FFF;
        background: var(--blue-alternative);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s; //transição para efeito do button

        &:hover { //efeito do botão
            //filter: blur(5px)
            filter: brightness(0.9);
        }
    }
`;