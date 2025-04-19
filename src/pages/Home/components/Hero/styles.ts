import styled from "styled-components";

export const HeroContainer = styled.section`
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3.5rem;
    padding: 5.75rem 2rem;

    @media(max-width: 630px) {
        width: 95%;
        padding: 1.5rem 0;
        gap: 2rem;
    }
`

export const TextHeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;

        div {
            max-width: 590px;
        }

        div h1{
            font-family: "Baloo 2", sans-serif;
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        div p {
            font-size: 1.25rem;
        }

        ul {
            display: grid;
            grid-template-columns: max-content max-content;
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 2.5rem;
            grid-row-gap: 1.25rem;
        }

        ul > li {
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

    @media(max-width: 700px){
        text-align: center;

        ul{
            place-content: center;
        }
    }

    @media(max-width: 580px){
        gap: 1rem;
        
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        div h1{
            font-size: 2rem;
        }

        div p{
            width: 80%;
        }
        
        ul{
            grid-template-columns: max-content;
        }
    }
`
export const Icon = styled.i`
    display: grid;
    place-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${props => props.theme["background"]};
`
export const Cart = styled(Icon)`
        background-color: ${props => props.theme["yellow-dark"]};
`

export const Box = styled(Icon)`
        background-color: ${props => props.theme["base-text"]};
`

export const Clock = styled(Icon)`
        background-color: ${props => props.theme["yellow"]};
`

export const CoffeeMug = styled(Icon)`
        background-color: ${props => props.theme["purple"]};
`

export const Image = styled.img`
    @media(max-width: 485px){
        width: 315px;
    }
`