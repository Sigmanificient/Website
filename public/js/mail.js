const express = require('express');
const nodemailer = require('nodemailer');
const queryString = require('querystring');

// Nodemailer
async function main(name, email, message, number) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.USER, // generated ethereal user
            pass: process.env.PASS, // generated ethereal password
        },
        tls: {
            ciphers: 'SSLv3'
            // maxVersion: 'TLSv1.2'
        },
    })

    let info = await transporter.sendMail({
        from: "noreply@bitecope.com", // sender address
        to: "support@bitecope.com", // list of receivers
        subject: "Got new client request", // Subject line
        html: `<div style="margin: 80px 0px; background-color: black; width: 600px;">
            <span>
                <img src="https://i.imgur.com/kXSHgUe.png" referrerpolicy="no-referrer" style="border-radius: 6px 6px; height: 40px; width: auto;vertical-align: text-bottom;margin-left: 20px;margin-top: 18px;">
                <label style="padding-left:20px;color: #00B2FF;font-family: 'Righteous';font-style: normal;font-weight: normal;font-size: 32px;">Bitecope</label>
            </span>
        
            <h2 class="welcomeText" style="margin: 10px 20px;color: #F15A24; font-family:  'Nunito',sans-serif;">We got a new client named ${name}!</h2>    
            <h4 class="mainContent" style="margin: 0px 20px; padding:20px;font-family: 'Nunito',sans-serif; font-weight: 600;font-style: italic;border-radius: 4px 4px;background-color: #b6b2b2;color:black">
                We have received their details as follows:
                <br>
                Email id : ${email}
                <br>
                Number : ${number}
                <br>
                Your Message: ${message}
            </h4>
        </div>`,
    });
    console.log("Message sent: %s", info.messageId);
}

// acknowledgement to client
async function ack(name, email, message, number) {
    let testAccount = await nodemailer.createTestAccount();
    console.log(process.env.USER);
    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.USER, // generated ethereal user
            pass: process.env.PASS, // generated ethereal password
        },
        tls: {
            ciphers: 'SSLv3'
            // maxVersion: 'TLSv1.2'
        },
    })

    // send mail with defined transport object
    // console.log("email is"+email)
    let info = await transporter.sendMail({
        from: "noreply@bitecope.com", // sender address
        to: email, // list of receivers
        subject: "Welcome to Bitecope", // Subject line
        html: `<div style="margin: 80px 0px; background-color: black; width: 600px;">
            <span>
                <img src="https://i.imgur.com/kXSHgUe.png" referrerpolicy="no-referrer" style="border-radius: 6px 6px; height: 40px; width: auto;vertical-align: text-bottom;margin-left: 20px;margin-top: 18px;">
                <label style="padding-left:20px;color: #00B2FF;font-family: 'Righteous';font-style: normal;font-weight: normal;font-size: 32px;">Bitecope</label>
            </span>
        
            <h2 class="welcomeText" style="margin: 10px 20px;color: #F15A24; font-family:  'Nunito',sans-serif;">Welcome ${name}!</h2>    
            <h4 class="mainContent" style="margin: 0px 20px; padding:20px;font-family: 'Nunito',sans-serif; font-weight: 600;font-style: italic;border-radius: 4px 4px;background-color: #b6b2b2;color:black">
                We have received your details as follows:
                <br>
                Email id : ${email}
                <br>
                Number : ${number}
                <br>
                Your Message: ${message}
            </h4>
           <h4 class="txt1" style="padding-left: 20px;color: #949494;font-family: 'Nunito',sans-serif; font-weight: 600;font-style: italic;">Have a great day ${name}! Our team will get back to you soon. </h4>
            <h4 class="txt2" style="padding-left: 20px;color: #949494;font-family: 'Nunito',sans-serif; font-weight: 600;font-style: italic;">The Bitecope Team.</h4>
            <h5 style="text-align: center;font-family: 'Montserrat',sans-serif;">For any further help write us at</h5>
            <h5 style="padding-bottom:30px;text-align: center;color: #00B2FF;font-family: 'Montserrat',sans-serif;"><a href="mailto:support@bitecope.com" style="text-decoration: none;">support@bitecope.com</a></h5>
        </div>`,
    });
    console.log("Message sent: %s", info.messageId);
}

// main().catch(console.error);
// ack().catch(console.error);
exports.handler = async function (event) {
    console.log(event.body);
    const {name, email, message, number} = JSON.parse(event.body);
    console.log(name, email, message, number);
    main(name, email, message, number).catch(console.error);
    ack(name, email, message, number).catch(console.error);

    return {statusCode: 200}

};

