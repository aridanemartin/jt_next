import React from 'react'
import Image from 'next/image';
import styles from './HeroTemplate.module.css';

import firma from '../../public/images/firmaBlancaLarga.png';
import firma2 from '../../public/images/firmaBlancaCorta.png';



export default function heroTemplate(props) {
    return (
        <>
            <div className={styles.heroTemplateWrap}>
                <div className={styles.signWrapper}>
                    <Image
                        src={firma}
                        priority
                        layout="fill"
                        objectFit="cover"

                    />
                </div>
                <div className={styles.signWrapper2}>
                    <Image
                        src={firma2}
                        layout="responsive"
                        // layout="fill"
                        objectFit="cover"

                    />
                </div>
            </div>
        </>
    )
}
