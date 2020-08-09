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

                    {props.links.map(link =>
                        <Link
                            className="text-white lowercase"
                            // href={{ pathname: 'categoria', query: { id: link.id } }}
                            >
                            {link.nome}
                        </Link>
                    )}
                    <Link
                        className="text-white font-bold lowercase"
                        aria-current="page">
                        {props.nameProduct}
                    </Link>
                </Breadcrumbs>
            </Container>
        </section>
    );
}
