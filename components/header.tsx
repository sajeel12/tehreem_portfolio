import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type HeaderProps = {
  logoLink: string;
};

const Header = ({ logoLink }: HeaderProps) => {
  return (
    <header>
      <nav className="nav">
        <div className="space-between">
          {/* <Link > */}
            <div className="logo">Tehreem Kamal</div>
          {/* </Link> */}
          <ul className="nav-list">
            <li>
              {/* <motion.a
                href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Waqas's Resume"
              >
                Resume
              </motion.a> */}
            </li>
            <li>
              <motion.a
                href="https://github.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Go to Tehreem's GitHub"
              >
                {/* <FaGithub /> */}
                {/* <span className="header-hidden-text">GitHub</span> */}
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Connect with Waqas on LinkedIn"
              >
                {/* <FaLinkedin />
                <span className="header-hidden-text">LinkedIn</span> */}
              </motion.a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
