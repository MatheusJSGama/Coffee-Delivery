import { Minus, Plus, ShoppingCartSimple, CheckFat } from "@phosphor-icons/react"
import { Actions, CardContent, CoffeCard, CoffeeTypes, Count, PriceAndQuantity, PutInCart } from "./styles"
import { useContext, useEffect, useState } from "react"
import { OrderContext } from "../../context/OrderContextProvider"
import { Coffee } from "../../context/OrderContextProvider"

type Props = {
    coffee: Coffee
}

export function Card({ coffee }: Props) {
    const { cartItens } = useContext(OrderContext)

    const [quantity, setQuantity] = useState(1)
    const [isItemAdded, setisItemAdded] = useState(false)

    function handleQuantityPlus() {
        setQuantity((state) => {
            return state + 1
        })
    }

    function handleQuantityMinus() {
        setQuantity((state) => {
            return state - 1
        })
    }

    function handleCreateItemCart() {
        cartItens(coffee, quantity)
        setisItemAdded(true)
    }

    useEffect(() => {
        let interval: number

        if (isItemAdded) {
            interval = setTimeout(() => {
                setisItemAdded(false)
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [isItemAdded])

    const minimumQuantity = quantity === 1

    return (
        <CoffeCard>
            <CardContent>
                <img src={coffee.image} alt="" />
                <CoffeeTypes>
                    {coffee.types.map((type, index) => {
                        return (
                            <p key={index}>{type}</p>
                        )
                    })}
                </CoffeeTypes>
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
                <PriceAndQuantity>
                    <p>
                        R$ <span>{coffee.price.toFixed(2)}</span>
                    </p>
                    <Actions>
                        <Count>
                            <button disabled={minimumQuantity}>
                                <Minus size={14} weight="bold" onClick={handleQuantityMinus} />
                            </button>
                            <span>{quantity}</span>
                            <button>
                                <Plus size={14} weight="bold" onClick={handleQuantityPlus} />
                            </button>
                        </Count>
                        <PutInCart onClick={handleCreateItemCart}>
                            {isItemAdded ? <CheckFat size={22} weight="fill" /> : <ShoppingCartSimple size={22} weight="fill" />}
                        </PutInCart>
                    </Actions>
                </PriceAndQuantity>
            </CardContent>
        </CoffeCard>
    )
}