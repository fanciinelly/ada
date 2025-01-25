import React, {useState} from "react";

import styles from "./navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            {/* navbar icon */}
            <img className={styles.menuBtn} src={
                menuOpen
                ? getImageUrl("closeIcon.png")
                : getImageUrl("menuIcon.png")
                } 
                alt="" 
                onClick={() => setMenuOpen(!menuOpen)}
                />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
};