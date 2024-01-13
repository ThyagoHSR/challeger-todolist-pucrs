import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    gap: 5rem;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`

