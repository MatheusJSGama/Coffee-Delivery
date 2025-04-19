import { Hero } from "./components/Hero"
import { Products } from "./components/Products"
import { HomeContainer } from "./styles"

export function Home() {
    return (
        <HomeContainer>
            <Hero />
            <Products />
        </HomeContainer>
    )
}