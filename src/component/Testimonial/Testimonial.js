import React from "react";
import styles from "./testimonial.module.scss";
export const Testimonial = () => {
    const testimonial = [
        {
            img: "test1.svg",
            title: "Cofounder at Kinsome",
            name: "Eben Pingree",
            star: 5,
            para: [
                "Aditya and his team exceeded our expectations in every aspect of the design and development of our new site. Despite starting the project with limited knowledge about their company, we were thoroughly impressed with the quality of work they delivered.",
            ],
        },
        {
            img: "test4.svg",
            title: "Co-founder & CEO at Rosebud",
            name: "Chrys Bader",
            star: 5,
            para: [
                "Aditya was incredibly patient, professional, and detail-oriented. We were impressed by how quickly he delivered outstanding copywriting and initial designs, all while accommodating our team’s high standards and specific preferences for communication.",
                "He was quick to provide thorough information whenever we needed it, and was open to my input as a fellow designer throughout the process. ",
                "We're extremely pleased with the final result, and our new landing page is a significant upgrade from the previous one.",
                "Thank you!! Would definitely recommend.",
            ],
        },
        {
            img: "test2.svg",
            title: "Founder of aaask",
            name: "Matt Byrom",
            star: 4,
            para: [
                "Aditya created a landing page for our SaaS tool, and I couldn’t be more satisfied. The entire process was smooth, communication was quick and insightful, and the final result was exactly what I was hoping for. I highly recommend working with Aditya if you’re looking for high-quality, modern web design.",
            ],
        },

        {
            img: "test7.svg",
            title: "Founder Collaboration.AI | theDifference Consulting",
            name: "Brandon Klein",
            star: 5,
            para: [
                "Punctual. Ability to not just take and listen to feedback but rapidly implement it... and all while being easy to work with.",
            ],
        },
        {
            img: "test5.svg",
            title: "Co-founder & CEO at Rosebud",
            name: "Kaan",
            star: 5,
            para: [
                "Absolutely excellent service and designs. Aditya helped me redesign my existing landing page, and it resulted in a 30% conversion rate increase after A/B testing it thoroughly.",
            ],
        },
        {
            img: "test8.svg",
            title: "Studio.Design",
            name: "Kelvin H.",
            star: 5,
            para: [
                "I’ve had a great experience working with Aditya on our template assets. His  turnaround time is always fast, taking our research and turning it into polished designs in just a few days.",
                "Aditya is also incredibly open to feedback. We’ve been communicating through Slack and Figma comments, and he always explains his design choices clearly. This leads to really productive conversations. I’d recommend working with Aditya – he’s a rockstar!",
            ],
        },

        {
            img: "test3.svg",
            title: "CEO at Hansa Network",
            name: "Louis Dharma",
            star: 5,
            para: [
                "Aditya delivers stunning, high-converting designs in record time. It's rare to find a designer you can trust with your brand, but Aditya and Circle Digital Solutions have truly earned that trust. I’m excited to work on more projects with them in the future.",
            ],
        },

        {
            img: "test6.svg",
            title: "Founder of Easlo",
            name: "Jason Chin",
            star: 5,
            para: ["I trust Aditya to come up with sleek and great design!"],
        },
    ];

    return (
        <div className={`container ${styles.testimonial}`}>
            <h3>Testimonials</h3>
            <div>
                <div className={styles.heading}>
                    <p>Loved by businesses worldwide</p>
                </div>
                <div className={styles.content}>
                    {testimonial.map((item, index) => {
                        return (
                            <div key={index} className={styles.box}>
                                <div className={styles.head}>
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                                <div className={styles.star}>
                                    {Array.from({ length: item.star }).map(
                                        (_, starIndex) => (
                                            <img src="star.svg" alt="star" />
                                        )
                                    )}
                                </div>
                                <div className={styles.para}>
                                    {item.para.map((para, index) => (
                                        <p key={index}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
