import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51JtXTUANC3lIRZl1ugfcxy0VaEJEyUN4tapt8c7xcwnnpSfoN0IUMDk6wvJaCpXutgXdGo9ynG1GEr344BSURRoS00bIRV10nJ';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothing Store Sample."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
