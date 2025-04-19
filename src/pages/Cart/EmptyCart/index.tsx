import { EmptyContainer } from "./styles";
import { Empty } from "@phosphor-icons/react"


export function EmptyCart(){
    return (
        <EmptyContainer>
            <Empty size={100}/>
            <span>Seu carrinho está vazio.</span>
        </EmptyContainer>
    )
}