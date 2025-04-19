import styled from "styled-components";

export const OrderPlacedContainer = styled.main`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    gap: 6.375rem;
    margin-top: 6rem;

    @media(max-width: 1150px){
        gap: 1rem;
     }

     @media(max-width: 1012px){
        margin-top: 0;
     }
    
     @media(max-width: 550px){
        margin-top: 0rem;
        gap: 2rem;

        img {
            width: 300px;
        }
     }
`
export const DeliveryInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0.8rem;
    
    @media(max-width: 380px){
        padding: 0.6rem;
        gap: 1.5rem;
     }
`

export const OrderPlacedHeading = styled.div`
    span {
        font-family: "Baloo 2", sans-serif;;
        font-size: 2rem;
        font-weight: 900;
        color: ${props => props.theme["yellow-dark"]};

        @media(max-width: 378px){
        font-size: 1.5rem;
     }
    }

    p {
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    @media(max-width: 380px) {
        text-align: center;
    }
`

export const DeliveryCard = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${props =>
        `linear-gradient(to bottom right, ${props.theme["yellow"]}, ${props.theme["purple"]})`};

`

export const DeliveryIfons = styled.div`
    min-width: 300px;
    padding: 2.5rem;
    background-color: white;
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media(max-width: 450px){
        padding: 1rem;
        gap: 1rem;
     }
`

export const InfoBase = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.5rem;

    p {
        color: ${props => props.theme["base-text"]};

        @media(max-width: 400px){
        font-size: 0.875rem;
     }
    }

    span {
        font-weight: 800;
    }

    svg {
        height: 32px;
        color: ${props => props.theme["white"]};
        border-radius: 50%;
        padding: 0.5rem;
    }

    @media(max-width: 400px){
        gap: 0.5rem;
     }
`

export const DeliveryAdress = styled(InfoBase)`
    svg {
        background-color: ${props => props.theme["purple"]};
    }
`

export const DeliveryTime = styled(InfoBase)`
    svg {
        background-color: ${props => props.theme["yellow"]};
    }
`

export const DeliveryPaymentMethod = styled(InfoBase)`
    svg {
        background-color: ${props => props.theme["yellow-dark"]};
    }
`