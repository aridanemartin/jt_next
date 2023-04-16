import Image from "next/image";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client";
import styles from "./SanityBlock.module.scss";
import Link from "next/link";

function SanityBlock({ sanityContent }) {
  const builder = imageUrlBuilder(sanityClient);
  function imageUrlFor(source) {
    return builder.image(source);
  }

  const formatAndRenderText = (child) => {
    const enrichedLinksKeys = sanityContent.markDefs
      .filter((mark) => mark._type === "link")
      .map((mark) => mark._key);

    if (child.text === "") {
      return <br key={child._key} />;
    }

    if (child.marks.some((mark) => enrichedLinksKeys.includes(mark))) {
      const link = sanityContent.markDefs.find(
        (mark) => mark._key === child.marks[0]
      );

      return (
        <Link
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
          <span key={child._key}>
            <strong>
              <em>{child.text}</em>
            </strong>
          </span>
        );
      }

      if (child.marks.includes("strong")) {
        return (
          <span key={child._key}>
            <strong>{child.text}</strong>
          </span>
        );
      }
      if (child.marks.includes("em")) {
        return (
          <span key={child._key}>
            <em>{child.text}</em>
          </span>
        );
      }
    }

    return <span>{child.text}</span>;
  };

  const renderBlock = (sanityContent) => {
    switch (sanityContent._type) {
      case "block":
        return (
          <div className={styles.block}>
            {sanityContent.children.map((child) => formatAndRenderText(child))}
          </div>
        );

      case "enrichedImage":
        return (
          <div className={styles.imageBlock}>
            <Image
              src={imageUrlFor(sanityContent.image.asset).url()}
              fill
              style={{ objectFit: "cover" }}
              alt={sanityContent.alt}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return renderBlock(sanityContent);
}

export default SanityBlock;
