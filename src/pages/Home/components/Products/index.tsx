import data from "../../../../data/data.json"
import { CoffeesContainer, ProductsContainer } from "./styles"
import { Card } from "../../../../components/Card"

export function Products() {

    return (
        <ProductsContainer>
            <h1>Nossos Cafés</h1>
            <CoffeesContainer>
                {data.products.map(coffee => {
                    return (
                        <Card coffee={coffee} key={coffee.id} />
                    )
                })}
            </CoffeesContainer>
        </ProductsContainer>
    )
}