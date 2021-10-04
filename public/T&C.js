let con = document.getElementById('content');
let title = document.getElementById('title');
let links = document.querySelectorAll('.links a');

let info = [
    {
        "name": "Terms Of Use",
        "content": "These Terms constitute a binding and enforceable legal contract between the Company and a User (as defined below) or any end user of the Services (collectively, 'you')." + "\n\n" + "You represent and warrant that you:" + "\n" + "(a) have full legal capacity and authority to agree and bind yourself to these Terms," + "\n" + " (b) are 18 (eighteen) years of age or older, and " + "\n" + "(c) are an Indian resident." + "\n\n" + " If you represent an entity, organization, or any other legal person, you confirm and represent that you have the necessary power and authority to bind such entity, organization, or legal person to these Terms. The Company reserves the right to make changes to these Terms by posting the new/updated version and your continued use and/or non-deletion of the Platform shall indicate your agreement to such changes." + "\n\n" + " Accordingly, we encourage you to kindly continue to review the Terms whenever accessing or using the Platform so as to be abreast with the changes that we may be carrying out to these Terms. By using the Services, you agree that you have read, understood, and are bound by these Terms, and that you comply with the requirements listed herein. If you do not agree to all of these Terms or comply with the requirements herein, please do not access the Platform or use the Services. "
    },
    {
        "name": "User Registration",
        "content": "To use the service Bitecope platform provide, you required to create an account. In the event you wish to create an account with us you may do so by completing the registration process. " + "\n\n" + "You agree to " + "\n" + "1.	provide true, accurate, correct and complete information as prompted by the applicable registration form. " + "\n" + "2.maintain and update true, accurate, correct and complete information provided by you during the registration process." + "\n" + " You may be required to choose a password and user name. You are solely responsible for maintaining the confidentiality of your password and account. " + "\n\n" + "If at any time Company believes that your account and password is being misused in any manner, or that the information provided by you during the registration process is not true, inaccurate or incomplete the Company reserves the right to cancel your account and block your access to the app. You are entirely responsible for any activities that occur under your account. You agree to notify the Company of any unauthorized use of your account or any breach of security. The company will not be liable for any loss that you may incur as a result of someone else using your password or account or your failure to comply with this section."
    },
    {
        "name": "Services",
        "content": "This platform acts as an online digital ledger book for users where they can record their business-related entries." + "\n\n" + "To avail of the service, the user needs to provide certain details during the registration of new accounts on our platform."
    },
    {
        "name": "Transaction Information",
        "content": "1.The user may upload information relating to the transactions with their customers or relating to their businesses, including the purchase of goods, the sales of goods, or other costs. " + "\n\n" + "a.	During the creation of the first transaction related to its customers, the user should inform that customer about it. " + "\n\n" + "2.	At the time of creating or uploading the first Transaction Information with respect to their customers, the User information such customers of its use of the Platform to record such Transaction Information and Transaction Information related to future transactions and seek such customer's express consent in this regard and to: " + "\n\n" + "a.	Before the creation of a profile of the customer, the user needs to take consent from that customer to share details like Name, phone no., addresses or any, other details." + "\n\n" + " b.	In case the customer denies consent and the user still adds their profile then, that user who added the customer profile should be held liable in case of any data breach."
    },
    {
        "name": "Prohibited Use",
        "content": "As a condition of your use of the platform, you will not use the platform for any purpose that is unlawful or prohibited by these Terms of Use or by any domestic laws, statutes, ordinances and regulations. Your use of site is your sole responsibility. You shall not, display, upload, modify, publish, transmit, update or share any information on the Site, that - " + "\n\n" + " 1. Belongs to another person and to which the user does not have any right. " + "\n\n" + "2. Is defamatory, obscene, pornographic, pedophilic, invasive of another's privacy, including bodily privacy, insulting or harassing on the basis of gender, libelous, racially or ethnically objectionable, relating or encouraging money laundering or gambling, or otherwise inconsistent with or contrary to the laws in force." + "\n\n" + " 3. Is harmful to child. " + "\n\n" + " 4.	Infringes any patent, trademark, copyright or other proprietary rights. " + "\n\n" + " 5. Violates any law for the time being in force. " + "\n\n" + " 6.	Deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact." + "\n\n" + " 7.	Impersonates another person. " + "\n\n" + " 8.	Threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting other nation." + "\n\n" + " 9.	Contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource.  " + "\n\n" + "10.	Is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person."
    },
    {
        "name": "Intellectual Property",
        "content": "1.All rights, title, and interest in and to the Platform and Services, including all intellectual property rights arising out of the Platform and Services, are owned by or otherwise lawfully licensed by the Company. Subject to compliance with these Terms, the Company grants the User a non-exclusive, non-transferable, non-sub licensable, royalty-free, revocable, and limited license to use the Platform and Services in accordance with these Terms and its written instructions issued from time to time. " + "\n\n" + "2.	The User should assume that everything the User sees or reads on the Platform is protected under the Indian Copyright Act, 1957 and other intellectual property laws of India and may not be used except with the prior written permission of the Company. " + "\n\n" + "3.	The Company may freely use, copy, disclose, publish, display, distribute without any payment of royalty, acknowledgement, prior consent, or any other form of restriction arising out of the User's intellectual property rights. " + "\n\n" + "4.	Except as stated in these Terms, nothing in these Terms should be construed as conferring any right in or license to the Company's or any third party's intellectual rights. " + "\n\n" + "5.	The contents of this Platform, including but not limited to the text and images herein and their arrangements, unless otherwise noted, are copyright-protected in the whole and every part of this Platform and the same belongs to the Company and may not be used, sold, licensed, copied or reproduced in whole or in part in any manner or form or in or on any media to any person without the prior written consent of the Company. " + "\n\n" + "We respect other people's intellectual property rights and if you believe that any content or material on the Site infringes on your intellectual property rights you can write to us at support@bitecope.com."
    },
    {
        "name": "Disclaimers And Warranties",
        "content": "1. The use of the Services is at your sole risk. " + "\n\n" + "2. You acknowledge and agree that the Company is not engaged in the provision, grant, or disbursement of any financial product. The Company is not and will not be responsible for any claim or for any damages suffered, whether by the Users, the customers of the Users or any other person or party, that are related, directly or indirectly, to or arise out of the same including any payments made by the User or by the customers of the User using the payment link generated using the Platform. The User further agrees and undertakes to retain proof of sale documentation (in electronic or physical form) in connection with each payment link it generates or sends to customers. " + "\n\n" + "3. To the extent permitted by applicable law, the Services are provided on an 'as is' and 'as available' basis. The Company does not warrant that operation of the Services will be uninterrupted or error free or that the functions contained in the Services will meet your requirements. " + "\n\n" + "4. To the fullest extent permissible under applicable law, the Company expressly disclaims all warranties of any kind, express or implied, arising out of the Services, including warranties of merchantability, fitness for a particular purpose, satisfactory quality, accuracy, title and non-infringement, compatibility, applicability, usability, appropriateness, and any warranty that may arise out of course of performance, course of dealing, or usage of trade. " + "\n\n" + "5. You hereby accept full responsibility for any consequences that may arise from your use of the Services, and expressly agree and acknowledge that the Company shall have absolutely no liability with respect to the same."
    },
    {
        "name": "Limitation Of Liability",
        "content": "You agree that company shall not be liable for any direct, special, incidental, indirect or consequential, damages of any kind in connection with this agreement or your use of site, even if company has been informed in advance of the possibility of such damages."
    }, {
        "name": "Indemnity",
        "content": "You shall indemnify, defend at the Company's option, and hold the Company, its parent companies, subsidiaries, affiliates, and their officers, associates successors, assigns, licensors, employees, directors, agents, and representatives, harmless from and against any claim, demand, lawsuits, judicial proceeding, losses, liabilities, damages and costs (including, without limitation, from all damages, liabilities, settlements, costs and attorneys' fees) due to or arising out of your access to the Services, use of the Services, violation of these Terms or any infringement by any third party who may use your account with the Company, of these Terms. "
    },
    {
        "name": "Applicable Law",
        "content": "This Agreement shall be governed by and interpreted and construed in accordance with the laws of India. We reserve the right to pursue any action or claim against you in any court of competent jurisdiction which we believe is the most appropriate to seek any relief."
    }, {
        "name": "Entire Agreement",
        "content": "The Terms of Use and Privacy Policy, as amended from time to time, constitute the entire agreement between you and Company. If any provision of these Terms of use is considered unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the validity and enforceability of any remaining provisions."
    },
    {
        "name": "Changes Of Terms Of Use",
        "content": "We reserve the right, to modify these Terms of Use at any time. Any changes to Terms of Use will be posted on the Site and your continued use of the Site following a posting of changes is your agreement to the changes and you are bound by the then-current version of these Terms of Use. If any changes to these Terms of Use are unacceptable to you, you must discontinue use of the Site. We reserve the right to suspend or deny, in our sole discretion, your access to all or any portion of the Site, including for any violation of any provision of these Terms of Use. We also reserve the right to change the Site without notice to you, at any time."
    },
    {
        "name": "Relationship",
        "content": "None of the provisions of the Terms of Use shall be deemed to constitute a partnership or agency between you and Company and you shall have no authority to bind Company in any manner, whatsoever. If you are registering on the Site as a business entity, you represent that you have the authority to bind the entity to this Agreement."
    },
    {
        "name": "Complaints",
        "content": "We request you to please provide the following information in your complaint: " + "\n\n" + "1. A physical or electronic signature of a person authorized to act on behalf of the copyright owner for the purposes of the complaint. " + "\n\n" + "2. Identification of the copyrighted work claimed to have been infringed. " + "\n\n" + "3. Identification of the material on our website that is claimed to be infringing or to be the subject of infringing activity. " + "\n\n" + "4. The address, telephone number or e-mail address of the complaining party. " + "\n\n" + "5. A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law. " + "\n\n" + "6. A statement, under penalty of perjury, that the information in the notice of copyright infringement is accurate, and that the complaining party is authorized to act on behalf of the owner of the right that is allegedly infringed."
    },
    {
        "name": "Termination",
        "content": "We reserve the right, at our discretion, to immediately, with or without notice, suspend or terminate your registration, the Terms of Use, and/or your access to all or a portion of the Site and/or remove any registration information or User Content from the Site, for any reason. Upon termination or expiration of the Terms of Use, your obligations and Company's rights and disclaimers survive, but your right to use the Site immediately ceases. Any express waiver or failure to exercise promptly any right under the Terms of Use will not create a continuing waiver or any expectation of non-enforcement."
    }
]

title.innerText = info[0].name;
con.innerText = info[0].content;

function removeActive(classlist) {
    if (classlist) {
        for (let j = 0; j < classlist.length; j++) {
            classlist[j].classList.remove('active');
        }
    }
}

for (let i = 0; i < info.length; i++) {
    links[i].addEventListener('click', function () {
        title.innerText = info[i].name;
        con.innerText = info[i].content;
        if (!this.classList.contains('active')) {
            removeActive(links);
            this.classList.toggle('active');
        }
    })
}
  
