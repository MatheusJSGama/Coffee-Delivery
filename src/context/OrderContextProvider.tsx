import { createContext, ReactNode, useReducer } from "react";
import { DeliveryFormData } from "../pages/Cart";
import { addNewItem, clearCart, decrementItemCartQuantity, deleteCartItem, IncrementItemCartQuantity, newOrderDeliveryData } from "../reducer/Order/actions";
import { OrdersReducer } from "../reducer/Order/reducer";

export interface Coffee {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    types: string[],
}

export interface Item {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    types: string[],
    quantity: number
}


interface OrderContextType {
    order: Item[]
    deliveryData: DeliveryFormData | undefined
    createNewDeliveryData: (data: DeliveryFormData) => void
    handleQuantityMinus: (id: number) => void
    handleQuantityPlus: (id: number) => void
    deleteItemCart: (id: number) => void
    cartItens: (product: Coffee, quantity: number) => void
    clearCartOrder: (order: Item[]) => void
}

interface OrderContextProviderProps {
    children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {

    const [orderData, dispatch] = useReducer(OrdersReducer, {
        order: [],
        deliveryData: undefined,
        deleteItemCart: undefined,
        handleQuantityMinus: undefined,
        handleQuantityPlus: undefined
    })

    const { order, deliveryData } = orderData

    function cartItens(product: Coffee, quantity: number) {

        const newCoffee: Item = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            types: product.types,
            quantity: quantity
        }

        dispatch(addNewItem(newCoffee))
    }

    function createNewDeliveryData(data: DeliveryFormData) {

        const newDeliveryData: DeliveryFormData = {
            cep: data.cep,
            street: data.street,
            number: data.number,
            complement: data.complement,
            neighborhood: data.neighborhood,
            city: data.city,
            uf: data.uf,
            paymentMethod: data.paymentMethod,
        }

        dispatch(newOrderDeliveryData(newDeliveryData))
    }

    function handleQuantityMinus(id: number) {
        dispatch(decrementItemCartQuantity(id))
    }

    function handleQuantityPlus(id: number) {
        dispatch(IncrementItemCartQuantity(id))
    }

    function deleteItemCart(id: number) {
        dispatch(deleteCartItem(id))
    }

    function clearCartOrder(order: Item[]) {
        dispatch(clearCart(order))
    }

    return (
        <OrderContext.Provider value={{
            order,
            deliveryData,
            createNewDeliveryData,
            handleQuantityMinus,
            handleQuantityPlus,
            deleteItemCart,
            cartItens,
            clearCartOrder,
        }}>
            {children}
        </OrderContext.Provider>
    )
}