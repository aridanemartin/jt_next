import Image from "next/image";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client";
import styles from "./SanityBlock.module.scss";
import Link from "next/link";

import { getYoutubeVideoId } from "helpers/youtubeHelpers";

function SanityBlock({ sanityContent, key }) {
  const builder = imageUrlBuilder(sanityClient);
  function imageUrlFor(source) {
    return builder.image(source);
  }

  const headerStyles = {
    h1: ({ children }) => (
      <h1 className={`${styles.h1} ${styles.title}`}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={`${styles.h2} ${styles.title}`}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`${styles.h3} ${styles.title}`}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className={`${styles.h4} ${styles.title}`}>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className={`${styles.h5} ${styles.title}`}>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className={`${styles.h6} ${styles.title}`}>{children}</h6>
    ),
  };

  const formatAndRenderText = (child, style) => {
    const enrichedLinksKeys = sanityContent.markDefs
      .filter((mark) => mark._type === "link")
      .map((mark) => mark._key);

    if (child.text === "") {
      return <br key={child._key} />;
    }

    // Titles [h1, h2, h3, h4, h5, h6]
    if (headerStyles[style]) {
      const Header = headerStyles[style];
      return <Header>{child.text}</Header>;
    }

    if (child.marks.some((mark) => enrichedLinksKeys.includes(mark))) {
      const link = sanityContent.markDefs.find(
        (mark) => mark._key === child.marks[0]
      );

      return (
        <Link
          className={`${styles.paragraph} ${styles.link}`}
          href={`https://${link.href}`}
          target="_blank"
          rel="noReferrer"
          key={child._key}
        >
          {child.text}
        </Link>
      );
    }

    if (child.marks) {
      if (child.marks.includes("strong") && child.marks.includes("em")) {
        return (
          <span className={styles.paragraph} key={child._key}>
            <strong>
              <em>{child.text}</em>
            </strong>
          </span>
        );
      }

      if (child.marks.includes("strong")) {
        return (
          <span className={styles.paragraph} key={child._key}>
            <strong>{child.text}</strong>
          </span>
        );
      }
      if (child.marks.includes("em")) {
        return (
          <span className={styles.paragraph} key={child._key}>
            <em>{child.text}</em>
          </span>
        );
      }
    }

    return <span className={styles.paragraph}>{child.text}</span>;
  };

  const renderBlock = (sanityContent) => {
    switch (sanityContent._type) {
      case "block":
        return (
          <div className={styles.block}>
            {sanityContent.children.map((child) =>
              formatAndRenderText(child, sanityContent.style)
            )}
          </div>
        );

      case "enrichedImage":
        return (
          <div className={styles.imageBlockHorizontal}>
            <Image
              src={imageUrlFor(sanityContent.image.asset).url()}
              fill
              style={{ objectFit: "cover" }}
              alt={sanityContent.alt}
            />
          </div>
        );
      case "enrichedImageVertical":
        return (
          <div className={styles.imageBlockVertical}>
            <Image
              src={imageUrlFor(sanityContent.image.asset).url()}
              fill
              style={{ objectFit: "contain" }}
              alt={sanityContent.alt}
            />
          </div>
        );
      case "youtubeVideo":
        return (
          <div className={styles.videoBlock}>
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeVideoId(
                sanityContent.url
              )}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              title={sanityContent.title}
            ></iframe>
          </div>
        );

      default:
        return null;
    }
  };

  return renderBlock(sanityContent);
}

export default SanityBlock;
