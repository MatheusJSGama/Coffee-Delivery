import styled from "styled-components";

export const ProductsContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

     h1 {

        margin-bottom: 3.375rem;
        font-family: "Baloo 2", sans-serif;
        border: 3px solid;
        background-color: ${props => props.theme["purple-light"]};
        color: ${props => props.theme["purple-dark"]};
        border-radius: 6px 36px;
        padding: 0 2rem;
     }
`

export const CoffeesContainer = styled.ul`
    width: 78%;
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 16rem));
    column-gap: 1rem;
    

    @media(max-width: 1070px){
        width: 98%;
    }
`

export const CoffeCard = styled.li`
    width: 16rem;
    height: 19.375rem;
    position: relative;
    border-radius: 6px 36px;
    margin-bottom: 2.5rem;
    background-color: ${props => props.theme["base-card"]} ;
`

export const CardContent = styled.div`
    padding: 0 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -25px;
    

    img {
        width: 7.5rem;
        margin-bottom: 0.75rem;
    }

    h3 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 0.5rem;
    }

    p {
        color: ${props => props.theme["base-label"]};
        text-align: center;
        font-size: 0.875rem;
    }

    
`

export const CoffeeTypes = styled.div`
    display: flex;
    gap: 0.25rem;

    p {
        font-size: 0.625rem;
        font-weight: 700;
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        margin-bottom: 1rem;
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
    }

`

export const PriceAndQuantity = styled.div`
    width: 100%;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    margin-top: 2rem;

    p {
        color: ${props => props.theme["base-text"]};

        span {
            font-family: "Baloo 2", sans-serif;
            font-size: 1.5rem;
            font-weight: 800;
        }
    }
`

export const Actions = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const Count = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 4.5rem;
        padding: 0.5rem;
        border-radius: 8px;
        background-color: ${props => props.theme["base-button"]};

        svg {
            color: ${props => props.theme["purple"]};
            cursor: pointer;

            &:hover {
            color: ${props => props.theme["purple-dark"]};
            transition: 0.3s;
            }
        }
`

export const PutInCart = styled.button`
        display: flex;
        border: 0;
        padding: 0.5rem;
        border-radius: 8px;
        background-color: ${props => props.theme["purple-dark"]};
        color: ${props => props.theme["base-card"]};
        cursor: pointer;

        &:hover {
            background-color: ${props => props.theme["purple"]};
            transition: 0.3s;
        }
`
