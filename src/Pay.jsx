import StripeCheckout from "react-stripe-checkout";

const KEY = "pk_test_51OGYbZB0EgE5eQDhQa85TMwQX2Uqx95YPTyUR6JKYe7zUEm2sn5qI36HCInj7Lx7ENpO7QljDOHNLpovUcVoLb3p00namlYmrP"

const Pay = () => {
    const onToken = (token) => {
        console.log(token);
    }

    return (
        <div
            style={
                {
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }
            }
        >
            <StripeCheckout name="Cassie Shop" image="" 
            billingAddress 
            shippingAddress 
            description="Your total is $20" 
            amount={2000} 
            token={onToken}
            stripeKey={KEY}>
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    PAY NOW
                </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;