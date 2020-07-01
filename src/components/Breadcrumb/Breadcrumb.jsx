import React from 'react';
import { Container, Breadcrumbs, Link } from '@material-ui/core';

export default function (props) {
    return (
        <Container >
            <Breadcrumbs aria-label="breadcrumb" >
                <Link color="inherit" href="/" >
                    PÁGINA INICIAL  
                </Link>
                <Link color="inherit" href="/getting-started/installation/" >
                    VESTUÁRIO
                </Link>
                <Link
                    color="textPrimary"
                    href="/components/breadcrumbs/"
                    aria-current="page">
                    MÁSCARAS DE TECIDO
                </Link>
            </Breadcrumbs>
        </Container>
    );
}
