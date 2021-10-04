let pricingInfo = [
    {
        "name": "What are the charges for Bitecope app?",
        "content": "Bitecope is based on monthly subscription model (for more details contact support@bitecope.com), however user are provided with 30 day free trail for the first instance when they Sign up. So that, user can try & test the app features and assess its use-case before buying it. "
    },
    {
        "name": "Do we provide refunds?",
        "content": "Yes we do provide refunds, only if user have bought the annual subscription. " + "\n" + "Note : Refund is only available for whole package. It's not valid for individual accounts. "
    },
    {
        "name": "How the refund amount is calculated?",
        "content": "So, for example if user has bought our subscription then they will have to pay 7500 INR in total. That means they are paying 625 INR per month. If user decides to cancel the subscription then, we calculate the remaining month and multiple that with 625 " + "\n\n" + " For example : " + "\n" + "- You bought subscription on 20th November 2021. " + "\n" + " - Subscription is Vaild till 20th November 2022. " + "\n" + " Now, if you cancel subscription on 3rd March then you get money reimbursed of 7 months which is 7 x 625 = 4375 INR *excluding charges.*"
    },
    {
        "name": "What are the modes of payment for purchasing Bitecope?",
        "content": "We accept online payments through credit/debit card, netbanking and UPI. "
    },
    {
        "name": "How long will it take to process the refund?",
        "content": "Within 30 days money will be returned."
    }
]

let productInfo = [
    {
        "name": "What kind of businesses can use this app?",
        "content": "Manufacturing companies belonging to any sectors can use this app. Size of the company also does not matter."
    },
    {
        "name": "Where can we download Bitecope Desktop app?",
        "content": "Desktop Version is still under development phase. Once it's launched we will notify all our users. Your patience is highly appreciated."
    },
    {
        "name": "How can I manage worker permission?",
        "content": "Not yet! This feature will be implemented soon."
    },
    {
        "name": "Can I access the same Bitecope account from two mobile devices?",
        "content": "Yes, you can do it."
    },
    {
        "name": "Is Bitecope Cloud/Web based?",
        "content": "Bitecope is still in process of launching this services, Once it's launched we will notify all our users. Your patience is highly appreciated."
    }
]


let acc1 = document.querySelectorAll('.accordion1');
let acc2 = document.querySelectorAll('.accordion2');
let content1 = document.querySelectorAll('.Acc-Content1');
let content2 = document.querySelectorAll('.Acc-Content2');
let accDiv1 = document.querySelector('.accDiv-1');
let accDiv2 = document.querySelector('.accDiv-2');
let faq = document.querySelectorAll('.faq');
accordion(acc1, pricingInfo, content1, accDiv1);
accordion(acc2, productInfo, content2, accDiv2);

function accordion(acc, info, content, accDiv) {

    for (let i = 0; i < acc.length; i++) {
        acc[i].innerText = info[i].name;
        content[i].innerText = info[i].content;

        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

}