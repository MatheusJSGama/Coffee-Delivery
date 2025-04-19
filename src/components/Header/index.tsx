import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ChekoutContainer, HeaderContainer, Location } from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContextProvider";

export function Header() {

    const { order, deliveryData } = useContext(OrderContext)

    const cityTextTransform = deliveryData?.city.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    return (
        <HeaderContainer>
            <nav>
                <Link to={"/"}>
                    <img src="/illustrations/Logo.svg" alt="" />
                </Link>
                <ChekoutContainer>
                    <Location>
                        <MapPin size={22} weight="fill" />
                        {deliveryData ?
                            <p>{cityTextTransform}, {deliveryData?.uf}</p>
                            :
                            <p>Localização</p>
                        }
                    </Location>
                    <Link to={"/Order"}>
                        <ShoppingCartSimple size={22} weight="fill" />
                        <p>{order.length}</p>
                    </Link>
                </ChekoutContainer>
            </nav>
        </HeaderContainer>
    )
}