import React from "react";

function FAQ() {
    return (
        <main className="main main-animate">
            <div className="faq">
                <h1>FAQ</h1>
                <h2>PRICING</h2>
                <h3>What are the charges for Bitecope app?</h3>
                <p>
                    Bitecope is based on monthly subscription model (for more details contact support@bitecope.com), however
                    user are provided with 30 day free trial for the first instance when they Sign up. So that, user can try &
                    test the app features and assess its use-case before buying it.
                </p>

                <h3>Do we provide refunds?</h3>
                <p>Yes we do provide refunds, only if user have bought the annual subscription.</p>
                <p>Note : Refund is only available for whole package. It's not valid for individual accounts.</p>

                <h3>How the refund amount is calculated?</h3>
                <p>
                    So, for example if user has bought our subscription then they will have to pay 7500 INR in total. That means
                    they are paying 625 INR per month. If user decides to cancel the subscription then, we calculate the
                    remaining month and multiple that with 625
                </p>
                <h3>For example</h3>
                <p>- You bought subscription on 20th November 2021.</p>
                <p> - Subscription is valid till 20th November 2022. </p>
                <p>
                    Now, if you cancel subscription on 3rd March then you get money reimbursed of 7 months which is 7 x 625 =
                    4375 INR *excluding charges.*
                </p>

                <h3>What are the modes of payment for purchasing Bitecope?</h3>
                <p>We accept online payments through credit/debit card, netbanking and UPI.</p>

                <h3>How long will it take to process the refund?</h3>
                <p>Within 30 days money will be returned.</p>

                <h2>PRODUCT RELATED</h2>

                <h3>What kind of businesses can use this app?</h3>
                <p>Manufacturing companies belonging to any sectors can use this app. Size of the company also does not
                    matter.</p>

                <h3>Where can we download Bitecope Desktop app?</h3>
                <p>
                    Desktop Version is still under development phase. Once it's launched we will notify all our users. Your
                    patience is highly appreciated.
                </p>

                <h3>How can I manage worker permission?</h3>
                <p>Not yet! This feature will be implemented soon.</p>

                <h3>Can I access the same Bitecope account from two mobile devices?</h3>
                <p>Yes, you can do it.</p>

                <h3>Is Bitecope Cloud/Web based?</h3>
                <p>
                    Bitecope is still in process of launching this services, Once it's launched we will notify all our users.
                    Your patience is highly appreciated.
                </p>
            </div>
        </main>
    );
}

export default FAQ;
