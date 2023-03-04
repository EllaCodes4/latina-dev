import styles from "./About.module.css";
import Link from "next/link";
import { description } from "app/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function About() {
  return (
    <section className={styles.about} id="#about">
      <h2 className="mb-2">About Us</h2>
      <strong>
        Una comunidad for her, by her, to connect, elevate, and empower the next
        generation of Latina software engineers
      </strong>
      <div className={styles.description}>
        <p>
          Less than 15% of engineers are women; 2% are Latina. We want that to
          change! {description}
        </p>
      </div>
      <Link
        href="https://discord.gg/vxasT67u"
        aria-label="Latina Dev Discord"
        target={"_blank"}
        className={styles.contributeLink}
      >
        Join us on Discord <FontAwesomeIcon icon={faDiscord} />
      </Link>
    </section>
  );
}
