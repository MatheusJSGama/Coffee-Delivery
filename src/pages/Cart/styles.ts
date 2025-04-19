import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 0.5rem;

    @media(max-width: 375px){
        gap: 1rem;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
`

export const AdressContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media(max-width: 660px){
        padding: 1.5rem;
    }
`

export const AdressHeading = styled.div`
    display: flex;
    gap: 0.5rem;

    svg {
        color: ${props => props.theme["yellow-dark"]};
    }

    div {
        span {
            font-weight: 400;
            color: ${props => props.theme["base-subtitle"]};
            margin-bottom: 0.125rem;
        }
        p{
            color: ${props => props.theme["base-text"]};

        }
    }
`

export const AdressInputContainer = styled.div`
    display: grid;
    grid-template-areas: "cep . ."
    "street street street"
    "number complement complement"
    "neighborhood city uf";
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    grid-template-rows: repeat(4, 2.625rem);
    grid-row-gap: 1.2rem;
    grid-column-gap: 0.75rem;

    @media(max-width: 660px){
        grid-template-areas: "cep street street"
    "number complement complement"
    "neighborhood city uf";
    grid-template-columns: 12.5rem 12.5rem 3.75rem;
    grid-template-rows: repeat(3, 2.625rem);
    }

    @media(max-width: 560px){
        grid-template-areas: "cep cep"
        "street street"
    "number number"
    "complement complement"
    "neighborhood neighborhood"
    "city uf";
    grid-template-columns: 1fr 3.75rem;
    grid-template-rows: repeat(6, 2.625rem);
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
        margin: 0;
    }

    

    input {
        width: 100%;
        border: 0;
        border-radius: 4px;
        background-color: ${props => props.theme["base-input"]};
        padding: 0.75rem;
        color: ${props => props.theme["base-text"]};
        border: 1px solid transparent;
        outline: 0;
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;

        &::placeholder {
            color: ${props => props.theme["base-label"]};
            font-size: 0.875rem;
        }

        &:focus {
            border: 1px solid ${props => props.theme["yellow-dark"]};
        }
    }

    > label span {
        color: ${props => props.theme["red"]};
        margin-top: 0.5rem;
        font-size: 14px;
    }
`

export const Cep = styled.label`
    grid-area: cep;
`

export const Street = styled.label`
    grid-area: street;
`

export const Number = styled.label`
    grid-area: number;
`

export const Complement = styled.label`
    display: flex;
    align-items: center;
    grid-area: complement;
    background-color: ${props => props.theme["base-input"]};
    border-radius: 4px;

    p {
        padding: 0.75rem;
        font-size: 0.75rem;
        color: ${props => props.theme["base-label"]};
    }
`

export const Neighborhood = styled.label`
    grid-area: neighborhood;
`

export const City = styled.label`
    grid-area: city;
`

export const Uf = styled.label`
    grid-area: uf
    ;
`

export const PaymentMethodContainer = styled.div`
    padding: 2.5rem;
    border-radius: 8px;
    background-color: ${props => props.theme["base-card"]};

    @media(max-width: 660px){
        padding: 1.5rem;
    }

    > span {
        color: ${props => props.theme["red"]};
        margin-top: 0.5rem;
    }
`

export const PaymentHeading = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
        color: ${props => props.theme["purple"]};
    }

    div {
        span {
            font-weight: 400;
            color: ${props => props.theme["base-subtitle"]};
            margin-bottom: 0.125rem;
        }
        p{
            color: ${props => props.theme["base-text"]};

        }
    }
`

export const PaymentMethods = styled.div`
    display: flex;
    gap: 0.75rem;

    @media(max-width: 660px){
        flex-direction: column;
    }
`

export const PaymentMethod = styled.label`
    width: 11.16rem;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: ${props => props.theme["base-button"]};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    @media(max-width: 660px){
        width: 100%;
        justify-content: center;
    }

    svg {
        color: ${props => props.theme["purple"]};
        height: 1rem;
     }

     span {
        font-size: 0.75rem;
        color: ${props => props.theme["base-text"]};
        text-transform: uppercase;
     }

     input {
        display: none;
     }
    
    &:hover{
        background-color: ${props => props.theme["base-hover"]};
        transition: 0.3s;
    }

    &:has(input:checked){
        border: 1px solid ${props => props.theme["purple"]};
        background-color: ${props => props.theme["purple-light"]};
    }
`

export const Fragment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: 1rem;
    }

    @media(max-width: 1151px){
        width: 40rem;
    }

    @media(max-width: 660px){
        width: 34.676875rem;
    }
`

export const CartContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px;
    background-color: ${props => props.theme["base-card"]};

    

    @media(max-width: 500px){
        padding: 1rem;
    }
`

export const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.25rem;
    gap: 3.125rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};

    span {
        font-size: 1rem;
        font-weight: bold;
        align-self: self-start;
        color: ${props => props.theme["base-text"]};

        @media(max-width: 500px){
        font-size: 0.875rem;
    }
    }

    @media(max-width: 500px){
        gap: 0.4rem;
    }
`

export const CartItemActionsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1.5rem;

        img {
            width: 4rem;

                @media(max-width: 500px){
                width: 2.5rem;
            }
        }

    @media(max-width: 500px){
        gap: 0.5rem;
    }

    
`

export const CartItemActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
        font-size: 1rem;
        color: ${props => props.theme["base-subtitle"]};

        @media(max-width: 500px){
        font-size: 0.875rem;
    }
    }
`

export const Actions = styled.div`
    display: flex;
    gap: 0.3rem;
`

export const Count = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 4.5rem;
        padding: 0.5rem;
        border-radius: 8px;
        background-color: ${props => props.theme["base-button"]};


        button {
            background-color: transparent;
            border: 0;
            display: grid;
            place-content: center;

                svg {
            color: ${props => props.theme["purple"]};
            cursor: pointer;

                &:hover {
            color: ${props => props.theme["purple-dark"]};
            transition: 0.3s;
            }
        }
    }

        @media(max-width: 500px){
        font-size: 0.75rem;
        width: 4rem;
    }
        
`

export const Remove = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    align-items: center;
    text-transform: uppercase;
    border-radius: 8px;
    background-color: ${props => props.theme["base-button"]};
    cursor: pointer;

    svg {
            color: ${props => props.theme["purple"]};
        }
    
    &:hover {
            background-color: ${props => props.theme["base-hover"]};
            transition: 0.3s;
            }

            @media(max-width: 500px){
        font-size: 0.75rem;
    }
`

export const ChekoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        > div{
            display: flex;
            justify-content: space-between;
            color: ${props => props.theme["base-text"]};
            font-size: 0.875rem;

            span {
                font-size: 1rem;
            }

            &:last-child {
                color: ${props => props.theme["base-subtitle"]};
                font-size: 1.25rem;
                font-weight: bold;

                span {
                    font-size: 1.25rem;
                }
            }
        }
    }

    button {
        width: 100%;
        color: ${props => props.theme["white"]};
        background-color: ${props => props.theme["yellow"]};
        border: 0;
        border-radius: 6px;
        padding: 0.75rem 0;
        cursor: pointer;
        text-transform: uppercase;

        &:hover{
            background-color: ${props => props.theme["yellow-dark"]};
            transition: 0.3s;
        }
    }
`