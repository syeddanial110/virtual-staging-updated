import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import axios from 'axios'
import { apiBaseUrl, apiPost } from '@/auth/ApiRequest'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
const PaymentHome = () => {
  const [clientSecret, setClientSecret] = useState('')
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer)

  const fetchPaymnetIntent = async () => {
    // const response = await axios.post(`${apiBaseUrl}/payment-intent`, {
    //   amount: 20,
    // })
    apiPost(
      `/payment-intent`,
      { amount: orderPlaceReducer.total * 100 },
      (res) => {
        console.log('res', res)
        setClientSecret(res.paymentIntentId)
      },
      (err) => {
        console.log('err', err)
      },
    )
    // const response = await fetch("/api", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ items: [{ id: "12343" }] }),
    // });
    // console.log('response-------', response)
    // return response;
  }

  useEffect(() => {
    if (orderPlaceReducer.servicePrice != '') fetchPaymnetIntent()
  }, [orderPlaceReducer.total, orderPlaceReducer.servicePrice])

  const apprearance = {
    theme: 'stripe',
  }
  const options = {
    // passing the client secret obtained from the server
    // clientSecret,
    apprearance,
  }
  return (
    <div>
      <h1>Custom Payment Page</h1>
      <Elements stripe={stripePromise} options={options}>
        <PaymentForm clientSecret={clientSecret} />
      </Elements>
    </div>
  )
}

export default PaymentHome
