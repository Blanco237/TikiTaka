import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './observable.module.css'
import images from './images.json';

const SINGLE_COLUMN_WIDTH = 200;

const Observable = () => {

 const [columnCount, setColumnCount] = useState(0);
 const [rowCount, setRowCount] = useState(0);
 const [transformDegree, setTransformDegree] = useState(0);
 const containerRef = useRef(null);


  const calCulateColumnCount = () => {
    if(!containerRef.current) return
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    let count = Math.floor(containerWidth/SINGLE_COLUMN_WIDTH);
    count = count > 5? count : 5
    setColumnCount(count);
    const rows = Math.floor(images.length / count);
    setRowCount(rows);
  }

  useLayoutEffect(() => {
    calCulateColumnCount()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', calCulateColumnCount);
    
    return () => {
        window.removeEventListener('resize', () => {})
    }
  }, [])

  useEffect(() => {
    let initialX = Math.floor(window.innerWidth / 2);

    const SENSITIVITY = 1000;

    const handleMouseMove = (event) => {
      const distanceX = initialX - event.clientX;
      const scaledDistanceX = (distanceX / SENSITIVITY) * 5;
      const clampedDistanceX = Math.max(-5, Math.min(scaledDistanceX, 5));

      setTransformDegree(clampedDistanceX)
    };

    const handleMouseEnter = (event) => {
      initialX = event.clientX;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div className={styles.body} ref={containerRef} style={{'--grid-width': `${SINGLE_COLUMN_WIDTH}px`, '--perspective-scale': `${Math.round(SINGLE_COLUMN_WIDTH/4)}rem`, '--t-degree': `${transformDegree + 10}%`}}>
        {
            [...Array(rowCount)].map((_, i) => {
                return (
                    <div className={styles.row} style={{'--translate-scale': i}}>
                        {
                            images.slice(i * columnCount, (i + 1) * columnCount).map((image) => {
                                const randomValue = Math.floor(Math.random() * 301);
                                return <div className={styles.imageBody}><img key={image} src={image} className={styles.image} style={{'--come-in-delay': `${randomValue}ms`}} /></div>
                            })
                        }
                    </div>
                )
            })
        } 
    </div>
  )
}

export default Observable