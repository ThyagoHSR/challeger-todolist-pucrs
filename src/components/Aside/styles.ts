import styled from "styled-components";

export const Container = styled.aside`
    background-color: #1e1f22;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 23rem;
    height: 100vh;
    padding: 2rem;
    border-right: 1px solid #5865f2;


    @media (max-width: 767px) {
        width: 100%;
        border-bottom: 1px solid #5865f2;
    }
`

export const UserIcon = styled.div`
    background-color: #5865f2;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    color: #fff;
    text-transform: uppercase;
`

export const Title = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    gap: 1rem;
`

export const Text = styled.p`
    text-align: center;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
`

export const OptionList = styled.li`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Link = styled.a`
    color: #fff;
    text-decoration: none;

    &:hover {
        color: #5865f2;
        transition: 0.3s ease-in-out;
    }
`

