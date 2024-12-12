import React from "react";
import styles from "./accordion.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { link } from "../../data/Links";
export const Accordioncontent = () => {
    const data = [
        {
            heading: "Who's behind Circle Digital Solutions?",
            para: "Circle Digital Solutions was founded by a group of college friends, each bringing expertise in diverse fields such as marketing, designing, and development. Together, we combined our skills and shared passion for innovation to create a digital solutions company that drives results and delivers value to our clients.",
        },
        {
            heading: "Why not hire a full-time designer and developer?",
            para: "Startups often face fluctuating workloads, and hiring full-time employees can significantly increase operational costs, including salaries, benefits, and overheads. This added expense can make project fees higher, which is not always ideal for clients. By working with Circle Digital Solutions, you gain access to a team of skilled professionals only when you need them, ensuring quality results without the financial burden of full-time staff.",
        },
        {
            heading: "What if I'm not happy with the result?",
            para: "At Circle Digital Solutions, client satisfaction is our top priority. While such instances are rare, if you’re not completely satisfied with the result, we will work closely with you to understand your concerns and make the necessary adjustments. Our goal is to ensure the final outcome meets your expectations and leaves you completely satisfied with our work.",
        },
        {
            heading: "How quickly will I receive my project?",
            para: "The timeline for delivering your project depends on its complexity and your specific requirements. However, most projects are typically completed within 10–15 days. We prioritize efficiency without compromising on quality and will keep you informed throughout the process.",
        },
        {
            heading: "Can I get a refund?",
            para: "We do not offer refunds. Our refund policies will be clearly outlined in the contract to ensure transparency and mutual understanding before the project begins. We are committed to delivering high-quality work and addressing any concerns to meet your expectations.",
        },
    ];

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={` ${styles.faq}`} id="faq">
            <h3>FAQs</h3>
            <div>
                <div className={styles.heading}>
                    <p>Questions? Answers.</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.accordion}>
                        {data.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                className={styles.Accordion}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        expanded === `panel${index}` ? (
                                            <RemoveIcon
                                                sx={{
                                                    color: "#A3A3A3", // Change icon color when expanded
                                                    transition:
                                                        "transform 0.3s ease, color 0.3s ease",
                                                    backgroundColor: "#1F1F1F",
                                                    borderRadius: "50%",
                                                }}
                                            />
                                        ) : (
                                            <AddIcon
                                                sx={{
                                                    color: "#A3A3A3", // Change icon color when collapsed
                                                    transition:
                                                        "transform 0.3s ease, color 0.3s ease",
                                                    backgroundColor: "#1F1F1F",
                                                    borderRadius: "50%",
                                                }}
                                            />
                                        )
                                    }
                                    aria-controls={`panel${index}bh-content`}
                                    id={`panel${index}bh-header`}
                                    className={styles.AccordionSummary}
                                >
                                    <Typography className={styles.typo}>
                                        <p>{item.heading}</p>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    className={styles.AccordionDetails}
                                >
                                    <Typography>
                                        <p>{item.para}</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                    <div className={styles.contact}>
                        <img src="Logo.png" alt="img" />
                        <div className={styles.link}>
                            <div>
                                <p>Have more questions?</p>
                                <p> Book a FREE intro call.</p>
                            </div>

                            <a href={link.contact} target="_blank">
                                Claim Your Free Strategy Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
