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
            heading: "Who’s behind Circle Digital Solutions?",
            para: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        },
        {
            heading: "Why not hire a full-time designer and developer",
            para: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        },
        {
            heading: "What if I'm not happy with the results?",
            para: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        },
        {
            heading: "How quickly will I receive my project?",
            para: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        },
        {
            heading: "Can I get a refund?",
            para: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
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
                        <img src="test1.svg" alt="img" />
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
