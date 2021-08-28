let con = document.getElementById('content');
let title = document.getElementById('title');
let links = document.querySelectorAll('.links a');

let info = [
    {
     "name": "PRIVACY POLICY",
     "content": "This privacy policy (“Policy”) explains our policy regarding the collection, use, disclosure and transfer of your information by Bitecope. This Policy forms part and parcel of the Terms of Use for the Bitecope Services. Capitalized terms which have been used here but are undefined shall have the same meaning as attributed to them in the Terms of Use. Users (as defined here in after) are requested to read this Policy in conjunction with the Terms of Use. "+"\n\n"+"We respect the privacy of the users of the Bitecope Services (“Users” or “you”) and are committed to reasonably protect it in all respects. The information about the User as collected by us is: (a) information supplied by Users and (b) information automatically tracked while using a mobile device having Bitecope Services enabled (collectively referred to as “Information”). By using Bitecope Services, you agree to this Policy. If you do not agree with any term in this Policy, please do not use / avail of the Bitecope Services. "
    },
    {
        "name": "INFORMATION SUPPLIED BY USERS",
        "content": "To avail and use the Bitecope services, Users are required to provide certain personal information. "+"\n\n"+"If user registered as Owner: "+"\n"+"1. Email"+"\n"+"2. Phone Number"+"\n"+"3. Password"+"\n"+"4. Owner Full Name"+"\n"+"5. Company Name"+"\n"+"6. Company Address"+"\n\n"+"If user registered as Worker: "+"\n"+"1. Email"+"\n"+"2. Phone Number"+"\n"+"3. Password"+"\n"+"4. Worker Name"+"\n"+"5. Worker Residential Address"+"\n\n"+"The Information as supplied by the Users enables us to provide the Services and improve the Bitecope Services and provide you the most user-friendly experience. All Information that is service dependent and we may use those Information to provide the Services, maintain, protect, and improve the Bitecope Services, and for developing new services. "+"\n\n"+"We may also use your email address and phone number without further consent for marketing, non-marketing or administrative purposes (such as notifying you of major changes, for customer service purposes, providing information about updates to Bitecope Services, billing, etc.) "+"\n\n"+"Any Information provided by you will not be considered as personal information if it is freely available and/or accessible in the public domain or is not deemed as a personal information under the applicable law. Further, any reviews, comments, messages, blogs posted/uploaded/conveyed/communicated by Users on the public sections of the Site or an application store (like the Play Store) becomes published content and is not considered as personal information which is subject to this Policy. "+"\n\n"+"In case you choose to decline to submit Information on the Bitecope App/Site, we may not be able to provide certain services on the App/Site to you. We will make reasonable efforts to notify you of the same at the appropriate time. In any case, we will not be liable and or responsible for the denial of certain services to you for due to not receiving necessary Information from you. "+"\n\n"+"When you register with the Bitecope  Services, we may (at our discretion) contact you from time to time about updation of your Information."
    },
    {
        "name": "TRACKED USER INFORMATION",
        "content":"Log File Information: Our Servers automatically collect limited Information about your device's connection to the internet, including your IP address, when you visit our Site or use the App. We automatically receive and log Information from the App and/or your browser including but not limited to IP address, your device or computer's name, and your operating system, We may also collect log Information from your device, including but not limited to your location, IP address, your device's name, device's serial number or unique identification number (e.g., Android ID or ADID on your Android Device)."
    },
    {
        "name": "ACCESSED USER INFORMATION",
        "content":"When Users use the Site (or any of its sub sites) / App, we make good faith efforts to provide Users, as and when requested by Users, with access to their Information and shall further ensure that any personal information or sensitive personal data or other Information found to be inaccurate or deficient shall be corrected or amended as feasible, subject to any requirement for such personal Information or sensitive personal data or Information to be retained by law or for legitimate business purposes. "+"\n\n"+" We ask individual Users to identify themselves and the Information requested to be accessed, corrected or removed before processing such requests, and we may decline to process requests that are unreasonably repetitive or systematic, require disproportionate technical effort, jeopardize the privacy of others, or would be extremely impractical (for instance, requests concerning Information residing on backup tapes), or for which access is not otherwise required. "+"\n\n"+"In any case, where we provide Information access and correction, we perform this service free of charge, except if doing so would require a disproportionate effort. Because of the way we maintain certain services, after you delete your Information, residual copies may take a period of time before they are deleted from our active servers and may remain in our backup systems"
    },
    {
        "name": "STORAGE AND BACKUP",
        "content":"From time to time, we take backup of your data on Bitecope App on our cloud database. This is done for the purpose of enabling Users to get their data back in case their phone's data becomes unusable, or phone gets lost, or the User moves to a new phone device. We also use this backup to provide useful insights and information related to their spends such as weekly spends in a month, insights related to spend behavior, etc., and to provide information related to User spends, patterns and User data in the form of aggregated and anonymized statistics on data such as User spends by category, date, time, etc. "+"\n\n"+"We shall keep User’s Information in our records till the period of time where we can potentially offer the Bitecope Services to the Users. After such period of time where Bitecope Services are no more relevant to a User, we remove all the Information pertaining to a particular User from our records."
    },
    {
        "name": "INFORMATION SECURITY",
        "content":"We take appropriate security measures to protect against unauthorized access to or alteration, disclosure or destruction of data including accidental or intentional manipulation, loss from access by unauthorized parties. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data. All Information gathered on the Bitecope App is securely stored within the controlled database. Access to the servers is password-protected and is strictly limited. "+"\n\n"+"Our security measures are regularly reviewed and updated to reflect technological developments. Regardless of where your personal information is transferred or stored, we take all steps reasonably necessary to ensure that personal information is kept secure, however, please understand that no transmission of data over the internet or any other public network can be guaranteed to be 100% (one hundred percent) secure. "+"\n\n"+" We seek to ensure compliance with the requirements of the applicable data protection laws to ensure the protection and preservation of the User’s privacy and personal Information. We have physical, electronic, and procedural safeguards that comply with the laws prevalent in specific jurisdiction to protect User’s Personal Information. By accepting the terms of this Policy, you agree that the standards and practices being implemented by us, are reasonable and sufficient for the protection of your personal information. "+"\n\n"+"We will contact you regarding any breach of the security, confidentiality, or integrity of your unencrypted electronically stored Personal Information to you via email or any other feasible manner in the most expedient time possible and without unreasonable delay, insofar as consistent with the legitimate needs of law enforcement and will undertake all measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system. "
    },
    {
        "name": "PURPOSE OF DATA PROCESSING",
        "content":"We will only collect and process Personal Information about you where we have lawful basis to do so. Our primary purpose in collecting your information, including Personal Information from you is to deliver the personalized Bitecope and its various features. Please note that should you choose to not provide us consent to collect your information, including Personal Information, we may not be able to perform the contract with you. Where we refer to 'perform the contract' we mean the Terms of Use applicable to your use of the Bitecope Service, which means that you may either not be able to access certain features of the Bitecope Service or we may not be able to provide you the Bitecope Service in entirety."
    },
    {
        "name": "REVOCATION OF CONSENT",
        "content":"A User can revoke their consent to the processing of their personal information at any time with effect for the future. Please note that withdrawing consent does not affect our right to continue to collect, use and disclose personal information where such collection, use and disclose without consent is permitted or required under applicable laws."
    },{
        "name": "RESPONSIBLE DATA COLLECTION",
        "content":"All the Bitecope Services are currently provided and regulated by Bitecope and therefore Bitecope  is responsible for the collection, storage and processing of personal information of the Users."
    },
    {
        "name": "UPDATES",
        "content":"We may alter our Policy from time to time to incorporate necessary changes in technology, applicable law or any other variant. In any case, we reserve the right to change (at any point of time) the terms of this Policy or the Terms of Use. Any changes we make will be effective immediately on notice, which we may give by posting the new policy on the Site. Your use of the Bitecope App Services after such notice will be deemed acceptance of such changes. We may also make reasonable efforts to inform you via electronic mail. In any case, you are advised to review this Policy periodically on the Site to ensure that you are aware of the latest version."
    },{
        "name": "GRIEVANCE REDRESSAL",
        "content":"In the event you have any grievance relating to the processing of Information provided by you, you may contact our Grievance Officer at support@bitecope.com"
    },
    {
        "name": "DISCLAIMER",
        "content":"In case any personal information is shared by you with us, which is not requested by us during registration, (whether mandatorily or optionally), we will not be liable for any information security breach or disclosure in relation to such information. If you have any questions regarding this Policy or the protection of your personal information, please contact our data protection team/grievance team."
    }
]

title.innerText = info[0].name ;
con.innerText = info[0].content;

function removeActive(classlist) {
    if (classlist) {
      for (let j = 0; j <classlist.length; j++) {
        classlist[j].classList.remove('active');
      }
    }
  }

    for(let i=0;i<info.length;i++){
        links[i].addEventListener('click',function(){
            title.innerText = info[i].name ;
            con.innerText = info[i].content; 
            if (!this.classList.contains('active')) {
                removeActive(links);
                this.classList.toggle('active');
              }
        })   
    } 
  
