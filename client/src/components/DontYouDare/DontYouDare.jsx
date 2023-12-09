import React, { useEffect, useRef, useState } from "react";
import styles from "./dare.module.css";

const distanceBetweenPoints = (x1, y1, x2, y2) => {
  return Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
};

const angleBetweenPoints = (x1, y1, x2, y2) => {
  return Math.atan2(y2 - y1, x2 - x1);
};

const getFarthestDistance = (centerX, centerY) => {
  return Math.max(
    distanceBetweenPoints(0, 0, centerX, centerY),
    distanceBetweenPoints(window.innerWidth, 0, centerX, centerY),
    distanceBetweenPoints(
      window.innerWidth,
      window.innerHeight,
      centerX,
      centerY
    ),
    distanceBetweenPoints(0, window.innerHeight, centerX, centerY)
  );
};

const DontYouDare = ({ elementRef }) => {
  const [degree, setDegree] = useState(0);
  const bodyRef = useRef();

  useEffect(() => {
    if (!elementRef.current) return;
    if (!bodyRef.current) return;

    const element = elementRef.current;
    const dim = element.getBoundingClientRect();
    const centerX = Math.round(dim.x) + Math.round(dim.width / 2);
    const centerY = Math.round(dim.y) + Math.round(dim.height / 2);

    const body = bodyRef.current;
    const bodyDim = body.getBoundingClientRect();
    const bodyX = Math.round(bodyDim.x) + Math.round(bodyDim.width / 2);
    const bodyY = Math.round(bodyDim.y) + Math.round(bodyDim.height / 2);

    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const distance = distanceBetweenPoints(centerX, centerY, mouseX, mouseY);
      const farthestDistance = getFarthestDistance(centerX, centerY);
      const distancePercentage = Math.round(
        (distance / farthestDistance) * 100
      );
      const angle = angleBetweenPoints(bodyX, bodyY, mouseX, mouseY);

      console.log("Angle", angleBetweenPoints(bodyX, bodyY, mouseX, mouseY));

      if (bodyRef.current)
        bodyRef.current.style.setProperty(
          "--displacement-degree",
          distancePercentage
        );
      if (bodyRef.current) bodyRef.current.style.setProperty("--angle", angle);
      if (bodyRef.current)
        bodyRef.current.style.setProperty(
          "--x-translate",
          angle > 2 ? -1 : Math.abs(angle) < 1 ? (angle < 0 ? -4 : 3) : 1
        );

      setDegree(distancePercentage);
    });

    return () => {
      document.removeEventListener("mousemove", () => {
        console.log("Clearing listener --> MouseMove");
      });
    };
  }, [elementRef, bodyRef]);

  return (
    <div className={styles.body} ref={bodyRef}>
      <div className={`${styles.eye} ${styles.left}`}>
        <div className={`${styles.lid} ${styles.top}`} />
        <div className={styles.pupil}>
          {degree < 80 ? <span className={styles.iris} /> : <></>}
        </div>
        <div className={`${styles.lid} ${styles.bottom}`} />
      </div>
      <div className={`${styles.eye} ${styles.right}`}>
        <div className={`${styles.lid} ${styles.top}`} />
        <div className={styles.pupil}>
          {degree < 80 ? <span className={styles.iris} /> : <></>}
        </div>
        <div className={`${styles.lid} ${styles.bottom}`} />
      </div>
    </div>
  );
};

export default DontYouDare;
