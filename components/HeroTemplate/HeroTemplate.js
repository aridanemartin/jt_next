import React from 'react'
import Image from 'next/image';
import styles from './HeroTemplate.module.css';

import firma from '../../public/images/firmaBlancaLarga.png';



export default function heroTemplate(props) {
    return (
        <>
            <div className={styles.heroTemplateWrap}>
                <div className={styles.signWrapper}>
                    <Image
                        src={firma}
                        // layout="responsive"
                        layout="fill"
                        objectFit="cover"

                    />
                </div>
            </div>
        </>
    )
}
