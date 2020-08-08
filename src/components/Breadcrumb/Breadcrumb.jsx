import React from 'react';
import { Container, Breadcrumbs, Link } from '@material-ui/core';
import styles from "./Breadcrumb.module.scss"

export default function (props) {
    return (
        <section className={styles.breadcrumbs}>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
                    <Link color="inherit" className="text-white lowercase" href="/" >
                        PÁGINA INICIAL
                </Link>
                    <Link
                        className="text-white lowercase"
                        href="/getting-started/installation/" >
                        VESTUÁRIO
                </Link>
                    <Link
                        className="text-white font-bold lowercase"
                        aria-current="page">
                        MÁSCARAS DE TECIDO
                </Link>
                </Breadcrumbs>
            </Container>
        </section>
    );
}
