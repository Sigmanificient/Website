import React from "react";

function Subscription() {
    return (
<main className="main">
    <p className="ultra-big">Our <strong>plans</strong> for your <strong>strategies.</strong></p>

    <div className="plans">
        <div className="plans-container" id="monthly">
            <p className="price"><strong>1499</strong><sub>/month</sub></p>

            <p className="time_range">Monthly</p>
            <p className="description">All the basic for the business that are growing.</p>

            <div className="benefits">
                <p className="benefit">
                    <img src="svg/blue_check.svg" alt="+"/>
                    Upto 5 worker accounts.
                </p>
                <p className="benefit">
                    <img src="svg/blue_check.svg" alt="+"/>
                    24 X 7 support for 30 days.
                </p>
            </div>
            <a className="btn btn-blue" href="/#contact_us">Select</a>
        </div>
        <div className="plans-container" id="annually">
            <p className="price"><strong>14999</strong><sub>/year</sub></p>

            <p className="time_range">Annually</p>
            <p className="description">All the basic for the business that are growing.</p>

            <div className="benefits">
                <p className="benefit">
                    <img src="svg/blue_check.svg" alt="+"/>
                    Upto 5 worker accounts.
                </p>
                <p className="benefit">
                    <img src="svg/blue_check.svg" alt="+"/>
                    24 X 7 support for 30 days.
                </p>
                <p className="benefit">
                    <img src="svg/orange_check.svg" alt="+"/>
                    Save 3000 INR.
                </p>
            </div>
            <a className="btn btn-orange" href="/#contact_us">Select</a>
        </div>
        <div className="plans-container" id="enterprise">
            <p className="price"><strong>Custom</strong></p>

            <p className="time_range">Enterprise</p>

            <div className="descriptions">
                <p className="description">Need more than 5 worker accounts?</p>

                <p><b>or</b></p>
                <p className="description">Want a dedicated support & training team ?</p>
            </div>
            <a className="btn" href="Contact-us.html">Contact</a>
        </div>
    </div>
</main>
    );
}

export default Subscription;
