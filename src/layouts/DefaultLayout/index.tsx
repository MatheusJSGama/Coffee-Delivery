import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { OrderContextProvider } from "../../context/OrderContextProvider"; 

export function DefaultLayout(){
    return(
        <LayoutContainer>
            <OrderContextProvider>
                <Header/>
                <Outlet/>
            </OrderContextProvider>
        </LayoutContainer>
    )
}
