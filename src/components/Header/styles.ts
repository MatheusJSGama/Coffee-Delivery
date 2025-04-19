import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    nav {
        width: 78%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(max-width: 580px){
            width: 93%;
        }
    }
`

export const Location = styled.div`
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background-color: ${props => props.theme["purple-light"]};
    
    p{
        color: ${props => props.theme["purple-dark"]};
        font-size: 0.875rem;
    }

    svg{
        color: ${props => props.theme["purple"]};
    }
`

export const ChekoutContainer = styled.div`
    display: flex;
    gap: 0.75rem;

    a {
        width: 2.375rem;
        height: 2.375rem;
        display: grid;
        place-content: center;
        background-color: ${props => props.theme["yellow-light"]};
        border-radius: 6px;
        color: ${props => props.theme["yellow-dark"]};
        position: relative;

            p {
                background-color: ${props => props.theme["yellow-dark"]};
                color: ${props => props.theme["white"]};
                border-radius: 50%;
                display: grid;
                place-content: center;
                position: absolute;
                right: -0.5rem;
                top: -0.5rem;
                width: 1.25rem;
                height: 1.25rem;
                font-size: 0.75rem;
                font-weight: bold;
            }
    }

    @media(max-width: 580px) {
        gap: 0.5rem;
    }
`