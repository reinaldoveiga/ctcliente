import styled from "styled-components";

export const Container = styled.form`
 h2 {
        color: var(--text-title );
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        //width: 40%;

        padding: 0 1.5rem;
        height: 2rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        margin-left: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 2rem;
            
            
            //margin-left: 0.1rem;//
            //margin-right: 1rem;
        }
    }

    select {
        width: 10%;
        margin-left: 1rem;

        margin-top: 1rem;
    }

    label {
        margin-left: 1rem;

       
    }


    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;