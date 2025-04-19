import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import { DeliveryAdress, DeliveryCard, DeliveryIfons, DeliveryInfosContainer, DeliveryPaymentMethod, DeliveryTime, OrderPlacedContainer, OrderPlacedHeading } from "./styles"
import { useContext } from "react"
import { OrderContext } from "../../context/OrderContextProvider"

export function OrderPlaced() {
    const { deliveryData } = useContext(OrderContext)



    return (
        <OrderPlacedContainer>
            <DeliveryInfosContainer>
                <OrderPlacedHeading>
                    <span>Uhu! Pedido confirmado</span>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </OrderPlacedHeading>
                <DeliveryCard>
                    <DeliveryIfons>
                        <DeliveryAdress>
                            <MapPin size={32} weight="fill" />
                            <div>
                                <p>Entrega em <span>{deliveryData?.street}, {deliveryData?.number}</span></p>
                                <p>{deliveryData?.neighborhood} - {deliveryData?.city}, {deliveryData?.uf}</p>
                            </div>
                        </DeliveryAdress>

                        <DeliveryTime>
                            <Timer size={32} weight="fill" />
                            <div>
                                <p>Previsão de entrega</p>
                                <span>20 min - 30 min</span>
                            </div>
                        </DeliveryTime>

                        <DeliveryPaymentMethod>
                            <CurrencyDollar size={32} />
                            <div>
                                <p>Pagamento na entrega</p>
                                {deliveryData ? (
                                    (() => {
                                        switch (deliveryData.paymentMethod) {
                                            case "credit":
                                                return <span>Cartão de crédito</span>;
                                            case "debit":
                                                return <span>Cartão de débito</span>;
                                            case "cash":
                                                return <span>Dinheiro</span>;
                                            default:
                                                return null;
                                        }
                                    })()
                                ) : (
                                    <p></p>
                                )}
                            </div>
                        </DeliveryPaymentMethod>
                    </DeliveryIfons>
                </DeliveryCard>
            </DeliveryInfosContainer>
            <img src="/illustrations/Illustration.svg" alt="" />
        </OrderPlacedContainer>
    )
}