import React from 'react';

function App() {
    return (
        <main className="main">
            <section className="landing">
                <section className="left">
                    <h1>Welcome to Bitecope!</h1>
                    <p>Manage purchase, inventory-stock, production, shipment effectively | Realtime
                        Updates | Scalable | Sustainable | Secure
                    </p>
                </section>
                <section className="right">
                    <img src="svg/illustrations/1.svg" alt=""/>
                </section>
            </section>
            <section id="about_us" className="about_us">
                <h2>About Us!</h2>
                <section className="illustrations">
                    <img src="svg/illustrations/2.svg" alt=""/>
                    <img src="svg/illustrations/3.svg" alt=""/>
                    <img src="svg/illustrations/4.svg" alt=""/>
                </section>
                <p>
                    Are you having a hard time coordinating with multiple departments in your business? Tired of dealing
                    with existing issues arising due to miscommunication across departments? With Bitecope, say no more!
                </p>
                <p>
                    Bitecope is one of a kind company which designs tools to be used by
                    the owner and employees of businesses, making the whole process hassle-free, coordinated and online.
                    We provide multi-channel accessibility through our mobile app and website.
                </p>
            </section>

            <section className="perks">
                <h2>Perks Of Using Bitecope</h2>
                <section className="perks-wrapper">
                    <section className="card">
                        <p className="number_circle">01</p>
                        <p className="details">
                            <b>Access to fully co-ordinated inventory management website containing real-time data.</b>
                        </p>
                    </section>
                    <section className="card">
                        <p className="number_circle">02</p>
                        <p className="details">
                            <b>Access to mobile application for ordering the products in real-time.</b>
                        </p>
                    </section>
                    <section className="card">
                        <p className="number_circle">03</p>
                        <p className="details">
                            <b>Quicker and accurate decision-making - from buying, to production and consumption.</b>
                        </p>
                    </section>
                    <section className="card">
                        <p className="number_circle">04</p>
                        <p className="details"><b>Less Wastage of products.</b></p>
                    </section>
                    <section className="card">
                        <p className="number_circle">05</p>
                        <p className="details">
                            <b>Effective tracking of all products - expired, excess, shortage, sold etc.</b>
                        </p>
                    </section>
                    <section className="card">
                        <p className="number_circle">06</p>
                        <p className="details"><b>Effective cost-cutting and hence more profits.</b></p>
                    </section>
                    <section className="card">
                        <p className="number_circle">07</p>
                        <p className="details"><b>No delay in the whole process whatsoever.</b></p>
                    </section>
                </section>
            </section>

            <section className="supply_chain">
                <h2>Supply Chain the Bitecope Way!</h2>
                <figure className="supply_chain__fig">
                    <figcaption className="step">
                        <img className="img-left" src="svg/illustrations/arrow1.svg" alt="step 1"/>
                        <div>
                            <h3>the plan or strategy</h3>
                            <p>
                                The supply chain manager tries to minimize shortages and keep costs down. The job is not
                                only about logistics and purchasing inventory but also to improve productivity, quality, and
                                efficiency of operations.
                            </p>
                        </div>
                    </figcaption>
                    <figcaption className="step">
                        <img className="img-right" src="svg/illustrations/arrow2.svg" alt="step 2"/>
                        <div>
                            <h3>The source of raw materials or service</h3>
                            <p>
                                The owner can coordinate all the operations across departments and have an accurate
                                idea of
                                resources required, surplus, etc. based on the real-time demand.
                            </p>
                        </div>

                    </figcaption>
                    <figcaption className="step">
                        <img className="img-left" src="svg/illustrations/arrow3.svg" alt="step 3"/>
                        <div>
                            <h3>delivery and logistics</h3>
                            <p>The Retailer Can Keep Track Of Goods Delivered, Not Delivered, Excess As Well As
                                Expired Goods Making
                                Warehouse Management Easier!
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </section>
        </main>
    );
}

export default App;
