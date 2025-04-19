
import { Item } from "../../context/OrderContextProvider";
import { DeliveryFormData } from "../../pages/Cart";

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    NEW_DELIVERY_DATA = 'NEW_DELIVERY_DATA',
    DELETE_CART_ITEM = 'DELETE_CART_ITEM',
    DECREMENT_ITEM_CART_QUANTITY = 'DECREMENT_ITEM_CART_QUANTITY',
    INCREMENT_ITEM_CART_QUANTITY = 'INCREMENT_ITEM_CART_QUANTITY',
    CLEAR_CART = 'CLEAR_CART'
}

export function addNewItem(newCoffee: Item) {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newCoffee,
        },
    }
}

export function newOrderDeliveryData(newDeliveryData: DeliveryFormData) {
    return {
        type: ActionTypes.NEW_DELIVERY_DATA,
        payload: {
            newDeliveryData,
        },
    }
}

export function deleteCartItem(id: number) {
    return {
        type: ActionTypes.DELETE_CART_ITEM,
        payload: {
            id,
        },
    }
}

export function decrementItemCartQuantity(id: number) {
    return {
        type: ActionTypes.DECREMENT_ITEM_CART_QUANTITY,
        payload: {
            id,
        },
    }
}

export function IncrementItemCartQuantity(id: number) {
    return {
        type: ActionTypes.INCREMENT_ITEM_CART_QUANTITY,
        payload: {
            id,
        },
    }
}

export function clearCart(order: Item[]) {
    return {
        type: ActionTypes.CLEAR_CART,
        payload: {
            order,
        },
    }
}