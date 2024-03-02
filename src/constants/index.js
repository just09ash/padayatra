import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "गृहम्" }, // Home in Sanskrit
    { href: "#about-us", label: "परिचयः" }, // About Us in Sanskrit
    { href: "#products", label: "उत्पादानि" }, // Products in Sanskrit
    { href: "#contact-us", label: "सम्पर्कः" }, // Contact Us in Sanskrit
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'ब्रँड्स्' }, // Brands in Sanskrit
    { value: '500+', label: 'शॉप्स्' }, // Shops in Sanskrit
    { value: '250k+', label: 'ग्राहकाः' }, // Customers in Sanskrit
];

export const products = [
    {
        imgURL: shoe4,
        name: "पदयात्रा राज-01", // PadaYatra Royal-01
        price: "₹20000.20", // Indian Rupees
    },
    {
        imgURL: shoe5,
        name: "पदयात्रा राज-10", // PadaYatra Royal-10
        price: "₹22210.20", // Indian Rupees
    },
    {
        imgURL: shoe6,
        name: "पदयात्रा राज-100", // PadaYatra Royal-100
        price: "₹2220.20", // Indian Rupees
    },
    {
        imgURL: shoe7,
        name: "पदयात्रा राज-001", // PadaYatra Royal-001
        price: "₹2300.20", // Indian Rupees
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "मुक्त चिकित्सा", // Free Shipping in Sanskrit
        subtext: "हमारी सहायक शिपिंग सेवा के साथ अविरत खरीदारी का आनंद लें।" // Enjoy seamless shopping with our complimentary shipping service.
    },
    {
        imgURL: shieldTick,
        label: "सुरक्षित भुगतान", // Secure Payment in Sanskrit
        subtext: "हमारे सुरक्षित भुगतान विकल्पों के साथ चिंता-मुक्त लेन-देन का अनुभव करें।" // Experience worry-free transactions with our secure payment options.
    },
    {
        imgURL: support,
        label: "आपकी मदद करने के लिए खुशी", // Love to help you in Sanskrit
        subtext: "हमारी समर्पित टीम हमेशा आपकी हर कदम में सहायता करने के लिए यहां है।" // Our dedicated team is here to assist you every step of the way.
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Ram Charan', // Ram Charan
        rating: 4.7,
        feedback: "Wow, enti bagundi (it's all good)! Chesina chala mandi (the work is top notch), and the quality is simply superb, anta expectation exceed chesaru (it exceeded all my expectations)!" // The attention to detail and the quality of the product exceeded my expectations. Highly recommended!
    },
    {
        imgURL: customer2,
        customerName: 'Lata Trivedi', // Lota Mongeskar
        rating: 4.5,
        feedback: "This product demonstrates exceptional quality. It surpasses my expectations, and I will certainly be placing future orders with your company."
    }
];

export const footerLinks = [
    {
        title: "उत्पादानि", // Products in Sanskrit
        links: [
            { name: "एयर फोर्स 1", link: "/" },
            { name: "एयर मैक्स 1", link: "/" },
            { name: "एयर जॉर्डन 1", link: "/" },
            { name: "एयर फोर्स 2", link: "/" },
            { name: "PadaYatra वॉफल रेसर", link: "/" },
            { name: "PadaYatra कोर्टेज", link: "/" },
        ],
    },
    {
        title: "सहायता", // Help in Sanskrit
        links: [
            { name: "हमारे बारे में", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "कैसे काम करता है", link: "/" },
            { name: "गोपनीयता नीति", link: "/" },
            { name: "भुगतान नीति", link: "/" },
        ],
    },
    {
        title: "संपर्क करें", // Get in touch in Sanskrit
        links: [
            { name: "customer@padayatra.in", link: "mailto:customer@padayatra.in" },
            { name: "+91 1234567890", link: "tel:+911234567890" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook चिन्ह" },
    { src: twitter, alt: "twitter चिन्ह" },
    { src: instagram, alt: "instagram चिन्ह" },
];
