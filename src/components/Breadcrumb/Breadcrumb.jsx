import React from 'react';
import { Container, Breadcrumbs, Link } from '@material-ui/core';
import styles from "./Breadcrumb.module.scss"

export default function (props) {
    return (
        <section className={styles.breadcrumbs}>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
                    <Link color="inherit" className="text-white lowercase" href="/" >
                        Página Inicial
                </Link>
                    <Link
                        className="text-white lowercase"
                        href="/getting-started/installation/" >
                        Vestuário
                </Link>
                    <Link
                        className="text-white font-bold lowercase"
                        aria-current="page">
                        Máscaras de tecido
                </Link>
                </Breadcrumbs>
            </Container>
        </section>
    );
}
