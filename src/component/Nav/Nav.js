import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import { link } from "../../data/Links";
export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to control navbar visibility on scroll
    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            let scrollY = window.scrollY;
            if (scrollY > lastScrollY && scrollY > 168) {
                // Hide the navbar if scrolling down and past a threshold
                setShowNav(false);
            } else {
                // Show the navbar if scrolling up
                setShowNav(true);
            }
            setLastScrollY(scrollY);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        // Add scroll event listener to control navbar visibility
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            // Cleanup on component unmount
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav
            className={`container ${styles.navbar} ${
                !showNav ? styles.hide : ""
            }`}
        >
            <div className={styles.navbar_logo}>
                <img src="logo.svg" alt="logo" />
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div
                    className={`${styles.bar} ${isOpen ? styles.open : ""}`}
                ></div>
                <div
                    className={`${styles.bar} ${isOpen ? styles.open : ""}`}
                ></div>
                <div
                    className={`${styles.bar} ${isOpen ? styles.open : ""}`}
                ></div>
            </div>
            <ul className={`${styles.nav_links} ${isOpen ? styles.open : ""}`}>
                <li>
                    <a href="#our_work">Our work</a>
                </li>
                <li>
                    <a href="#faq">FAQ</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href={link.contact}>Book a Call</a>
                </li>
            </ul>
        </nav>
    );
};
