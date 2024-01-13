import styled from "styled-components";
interface TaskTitleProps {
    completed?: boolean;
  }

export const Container = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 100%;


    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const Title = styled.h1`
    color: #fff;
    text-align: center;
`

export const BoxTasks = styled.div`
    background-color: #1e1f22;
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;

    @media (max-width: 767px) {
        flex-direction: column;
        height: 90%;
    }

`

export const Task = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

export const Form = styled.form`
  
    
`

export const Input = styled.input`
    background-color: #313338;
    border: 0;
    width: 12rem;
    outline: none;
    height: 2rem;
    padding-left: 1rem;
    color: #fff;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;

`

export const Button = styled.button`
    background-color:  #5865f2;
    border: 0;
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
`

export const BoxHour = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const Divisor = styled.div`
    height: 80vh;
    background-color: #5865f2;
    width: 1px;

    @media (max-width: 767px) {
        width: 100%;
        height: 1px;
    }
`

export const InfoTask = styled.h1`
    color: #5865f2;
    text-align: center;
`

export const ShowTask = styled.div`
    display: flex;
    gap: 1rem;
    img {
        width: 20px;
        cursor: pointer;
    }
`

export const TaskTitle = styled.li<TaskTitleProps>`
    font-size: 1rem;
    text-decoration: ${props => (props.completed ? 'line-through' : 'none')}; 
    color: ${props => (props.completed ? 'green' : 'white')}; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 1rem;

    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;
