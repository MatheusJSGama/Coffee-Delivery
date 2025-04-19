import { Item } from "../../context/OrderContextProvider"
import { DeliveryFormData } from "../../pages/Cart"
import { ActionTypes } from "./actions"

interface OrderState {
    order: Item[]
    deliveryData: DeliveryFormData | undefined
    deleteItemCart: number | undefined
    handleQuantityMinus: number | undefined
    handleQuantityPlus: number | undefined
}

export function OrdersReducer(state: OrderState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM: {
            const itemAlreadyAdd = state.order.find(item => item.id === action.payload.newCoffee.id)
            return {
                ...state,
                order: itemAlreadyAdd
                    ? state.order.map(item =>
                        item.id === itemAlreadyAdd.id
                            ? { ...item, quantity: item.quantity + action.payload.newCoffee.quantity }
                            : item
                    )
                    : [...state.order, action.payload.newCoffee]
            }
        }

        case ActionTypes.NEW_DELIVERY_DATA: {
            const newState = {
                ...state,
                deliveryData: action.payload.newDeliveryData
            }

            return newState
        }

        case ActionTypes.DELETE_CART_ITEM: {
            const cartwithOutDeleteOne = state.order.filter(item => {
                return item.id != action.payload.id
            })

            return {
                ...state,
                order: cartwithOutDeleteOne
            }
        }

        case ActionTypes.DECREMENT_ITEM_CART_QUANTITY:
            return {
                ...state,
                order: state.order.map(item =>
                    item.id === action.payload.id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            }

        case ActionTypes.INCREMENT_ITEM_CART_QUANTITY:
            return {
                ...state,
                order: state.order.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

        case ActionTypes.CLEAR_CART:
            return {
                ...state,
                order: []
            }

        default:
            return state
    }
}