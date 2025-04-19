import { Box, Cart, CoffeeMug, HeroContainer, Clock, TextHeroContainer, Image } from "./styles"
import { ShoppingCartSimple, Package, Coffee, Timer } from '@phosphor-icons/react'

export function Hero() {
    return (
        <HeroContainer>
            <TextHeroContainer>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
                </div>
                <ul>
                    <li>
                        <Cart>
                            <ShoppingCartSimple size={16} weight="fill" />
                        </Cart>
                        Compra simples e segura
                    </li>
                    <li>
                        <Box>
                            <Package size={16} weight="fill" />
                        </Box>
                        Embalagem mantém o café intacto
                    </li>
                    <li>
                        <Clock>
                            <Timer size={16} weight="fill" />
                        </Clock>
                        Entrega rápida e rastreada
                    </li>
                    <li>
                        <CoffeeMug>
                            <Coffee size={16} weight="fill" />
                        </CoffeeMug>
                        café chega fresquinho até você
                    </li>
                </ul>
            </TextHeroContainer>
            <Image src="/illustrations/Imagem.svg" alt="" />
        </HeroContainer>
    )
}