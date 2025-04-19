import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContextProvider"
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { EmptyCart } from "./EmptyCart"
import {
    Wrapper,
    AdressInputContainer,
    AdressContainer,
    AdressHeading,
    PaymentMethodContainer,
    PaymentMethods,
    PaymentMethod,
    Container,
    PaymentHeading,
    Cep,
    Street,
    Number,
    Complement,
    Neighborhood,
    City,
    Uf,
    Actions,
    CartContainer,
    CartItemActions,
    CartItemActionsContainer,
    CartItemContainer,
    ChekoutContainer,
    Count,
    Fragment,
    Remove
} from "./styles"


const deliveryFormValidateSchema = zod.object({
    cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
    street: zod.string().min(1, { message: 'Rua inválida.' }),
    number: zod.number({ message: 'Informe o seu número' }),
    complement: zod.optional(zod.string()),
    neighborhood: zod.string().min(1, { message: 'Bairro inválido' }),
    city: zod.string().min(1, { message: 'Cidade inválida' }),
    uf: zod.string().min(2, { message: 'Uf inválido' }),
    paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})

export type DeliveryFormData = zod.infer<typeof deliveryFormValidateSchema>


export function Order() {
    const { order, createNewDeliveryData, deleteItemCart, handleQuantityMinus, handleQuantityPlus, clearCartOrder } = useContext(OrderContext)
    console.log(order);

    const emptyCart = order.length === 0

    const { register, handleSubmit, formState: { errors } } = useForm<DeliveryFormData>({
        resolver: zodResolver(deliveryFormValidateSchema)
    })

    const navigate = useNavigate();

    function handleDeletItem(id: number) {
        deleteItemCart(id)
    }

    function formatCurrency(value: number) {
        return new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
        }).format(value)
    }

    function handleformData(data: DeliveryFormData) {
        createNewDeliveryData(data)
        navigate("/Order/Order-Placed");
        setTimeout(() => {
            clearCartOrder(order)
        }, 500)
    }

    const deliveryFee = 3.50

    const coffesInCartPrice = order?.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    return (
        <Wrapper>
            <Container>
                <h4>Complete seu pedido</h4>
                <form onSubmit={handleSubmit(handleformData)} id="order">
                    <AdressContainer>
                        <AdressHeading>
                            <MapPinLine size={22} />
                            <div>
                                <span>Endereço de Entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </AdressHeading>
                        <AdressInputContainer>
                            <Cep htmlFor="cep">
                                <input
                                    type="number"
                                    placeholder="CEP"
                                    id="cep"
                                    minLength={8}
                                    maxLength={8}
                                    {...register('cep', { valueAsNumber: true })}
                                />
                                {errors.cep && <span>{errors.cep.message}</span>}
                            </Cep>

                            <Street htmlFor="street">
                                <input
                                    type="text"
                                    placeholder="Rua"
                                    id="street"
                                    {...register('street', {})}

                                />
                                {errors.street && <span>{errors.street.message}</span>}
                            </Street>

                            <Number htmlFor="number">
                                <input
                                    type="number"
                                    placeholder="Número"
                                    id="number"
                                    {...register('number', { valueAsNumber: true })}
                                />
                                {errors.number && <span>{errors.number.message}</span>}
                            </Number>

                            <Complement htmlFor="complement">
                                <input
                                    type="text"
                                    placeholder="Complemento"
                                    id="complement"
                                    {...register('complement', {})}
                                />
                                <p><i>Opcional</i></p>
                                {errors.complement && <span>{errors.complement.message}</span>}
                            </Complement>

                            <Neighborhood htmlFor="neighborhood">
                                <input
                                    type="text"
                                    placeholder="Bairro"
                                    id="neighborhood"
                                    {...register('neighborhood', {})}
                                />
                                {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
                            </Neighborhood>

                            <City htmlFor="city">
                                <input
                                    type="text"
                                    placeholder="cidade"
                                    id="city"
                                    {...register('city', {})}
                                />
                                {errors.city && <span>{errors.city.message}</span>}
                            </City>

                            <Uf htmlFor="uf">
                                <input
                                    type="text"
                                    placeholder="UF"
                                    id="uf"
                                    {...register('uf', {})}
                                />
                                {errors.uf && <span>{errors.uf.message}</span>}
                            </Uf>

                        </AdressInputContainer>
                    </AdressContainer>
                    <PaymentMethodContainer>
                        <PaymentHeading>
                            <CurrencyDollar size={22} />
                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
                            </div>
                        </PaymentHeading>
                        <PaymentMethods>
                            <PaymentMethod htmlFor="creditCard">
                                <CreditCard size={16} />
                                <span>Cartão de crédito</span>
                                <input
                                    type="radio"
                                    id="creditCard"
                                    value="credit"
                                    {...register('paymentMethod', {})}
                                />
                            </PaymentMethod>

                            <PaymentMethod htmlFor="debitCard">
                                <Bank size={16} />
                                <span>Cartão de Débito</span>
                                <input
                                    type="radio"
                                    id="debitCard"
                                    value="debit"
                                    {...register('paymentMethod', {})}
                                />
                            </PaymentMethod>

                            <PaymentMethod htmlFor="cash">
                                <Money size={16} />
                                <span>Dinheiro</span>
                                <input
                                    type="radio"
                                    id="cash"
                                    value="cash"
                                    {...register('paymentMethod', {})}
                                />
                            </PaymentMethod>

                        </PaymentMethods>
                        {errors.paymentMethod && <span>{errors.paymentMethod.message}</span>}
                    </PaymentMethodContainer>
                </form>
            </Container>
            <Fragment>
                <h2>cafés selecionados</h2>
                <CartContainer>
                    {emptyCart ?
                        <EmptyCart /> :
                        (order.map(item => {
                            return (
                                <CartItemContainer key={item.id}>
                                    <CartItemActionsContainer>
                                        <img src={item.image} alt="" />
                                        <CartItemActions>
                                            <p>{item.name}</p>
                                            <Actions>
                                                <Count>
                                                    <button>
                                                        <Minus size={14} weight="bold" onClick={() => handleQuantityMinus(item.id)} />
                                                    </button>
                                                    {item.quantity}
                                                    <button>
                                                        <Plus size={14} weight="bold" onClick={() => handleQuantityPlus(item.id)} />
                                                    </button>
                                                </Count>
                                                <Remove onClick={() => handleDeletItem(item.id)}>
                                                    <Trash size={16} />
                                                    remover
                                                </Remove>
                                            </Actions>
                                        </CartItemActions>
                                    </CartItemActionsContainer>
                                    <span>R$ {item.price.toFixed(2)}</span>
                                </CartItemContainer>
                            )
                        }))
                    }
                    {emptyCart ? <></> :
                        (<ChekoutContainer>
                            <div>
                                <div>Total de itens
                                    <span>
                                        {formatCurrency(coffesInCartPrice)}
                                    </span>
                                </div>

                                <div>Entrega
                                    <span>
                                        {formatCurrency(deliveryFee)}
                                    </span>
                                </div>
                                <div>Total
                                    <span>
                                        {formatCurrency(coffesInCartPrice + deliveryFee)}
                                    </span>
                                </div>
                            </div>
                            <button type="submit" form="order">Confirmar Pedido</button>
                        </ChekoutContainer>)
                    }
                </CartContainer>
            </Fragment>
        </Wrapper>
    )
}