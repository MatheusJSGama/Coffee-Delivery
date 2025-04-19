import styled from "styled-components";


export const EmptyContainer = styled.div`
   min-width: 24rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

    svg {
        color: ${props => props.theme["purple-dark"]};
    }

    span {
        font-weight: 900;
        text-transform: uppercase;
    }

    @media(max-width: 500px){
        min-width: 17rem;
    }
`
