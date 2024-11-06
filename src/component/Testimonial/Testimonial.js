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
                "Namya and team blew away our expectations when it came to design and development of our new site. They were incredibly fast, and very responsive to our feedback. We went into this without a ton of knowledge about the company, but were very impressed by the work they produced.",
            ],
        },
        {
            img: "test4.svg",
            title: "Co-founder & CEO at Rosebud",
            name: "Chrys Bader",
            star: 5,
            para: [
                "Namya and team blew away our expectations when it came to design and development of our new site. They were incredibly fast, and very responsive to our feedback. We went into this without a ton of knowledge about the company, but were very impressed by the work they produced.",
                "She was quick to provide thorough details when we asked, and also tolerated me (also a designer) contributing to the design process.",
                "We're happy with where we ended up, and our new landing page is a major improvement from the previous one.",
                "Thank you!! Would definitely recommend.",
            ],
        },
        {
            img: "test2.svg",
            title: "Founder of aaask",
            name: "Matt Byrom",
            star: 4,
            para: [
                "Namya and team blew away our expectations when it came to design and development of our new site. They were incredibly fast, and very responsive to our feedback. We went into this without a ton of knowledge about the company, but were very impressed by the work they produced.",
            ],
        },

        {
            img: "test7.svg",
            title: "Founder Collaboration.AI | theDifference Consulting",
            name: "Brandon Klein",
            star: 5,
            para: [
                "Absolutely excellent service and designs. Namya helped me redesign my existing landing page, and it resulted in a 30% conversion rate increase after A/B testing it thoroughly.",
            ],
        },
        {
            img: "test5.svg",
            title: "Co-founder & CEO at Rosebud",
            name: "Kaan",
            star: 5,
            para: [
                "Absolutely excellent service and designs. Namya helped me redesign my existing landing page, and it resulted in a 30% conversion rate increase after A/B testing it thoroughly.",
            ],
        },
        {
            img: "test8.svg",
            title: "Studio.Design",
            name: "Kelvin H.",
            star: 5,
            para: [
                "I’ve had a great experience working with Namya on our template assets. Her turnaround time is always fast, taking our research and turning it into polished designs in just a few days.",
                "Namya is also incredibly open to feedback. We’ve been communicating through Slack and Figma comments, and she always explains her design choices clearly. This leads to really productive conversations. I’d recommend working with Namya – she’s a rockstar!",
            ],
        },

        {
            img: "test3.svg",
            title: "CEO at Hansa Network",
            name: "Louis Dharma",
            star: 5,
            para: [
                "Namya and team blew away our expectations when it came to design and development of our new site. They were incredibly fast, and very responsive to our feedback. We went into this without a ton of knowledge about the company, but were very impressed by the work they produced.",
            ],
        },

        {
            img: "test6.svg",
            title: "Founder of Easlo",
            name: "Jason Chin",
            star: 5,
            para: ["I trust Namya to come up with sleek and great design!"],
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
