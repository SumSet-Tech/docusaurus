import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureData = {
    title: 'Mintr',
    Png: require('../../static/img/mintr-machine-nft-mint.png').default,
    description: (
        <>
           Mintr is a free tool for making, minting, and<br/> managing any content on the Chia Blockchain.
        </>
    )
};

function Feature({Png, title, description}) {
    return (
        <div className={clsx('col col--12 ')}>
            <div className="text--center">
                <img className={styles.featurePng} alt={title} src={Png} />
            </div>
            <div className="text--center padding-horiz--md">
                <h1>{title}</h1>
                <p>{description}</p>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Mintr Overview - 5 min ⏱️
                </Link>
            </div>
        </div>
    );
}


export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <Feature {...FeatureData} />
                </div>
            </div>
        </section>
    );
}
