import React from 'react';
export default function (props) {
    return (
        <ul itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <li class="first" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a href="/" itemprop="item" typeof="WebPage" title="Página Inicial"><span itemprop="name">Página Inicial</span></a>
            </li>
            <li class=" " itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                {/* <a href="/beleza" itemprop="item" typeof="WebPage" title="Beleza"> */}
                <span itemprop="name">vitaminas</span>
                {/* </a> */}
            </li>
            <li class=" " itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                {/* <a href="/beleza/maos-e-pes" itemprop="item" typeof="WebPage" title="Mãos e Pés"> */}
                <span itemprop="name">vitamina C</span>
                {/* </a> */}
            </li>

            <li class="last ">
                <strong>Centrum Omega 30 Comprimidos </strong>
                <div data-comment="Está assim por causa do Schema.org">
                    {/* <a href="/lixa-marco-boni-de-metal-pequena-para-unidades-p1058330" itemprop="item" typeof="WebPage" title="Página Inicial"> */}
                    <span itemprop="name">Página Inicial</span>
                    {/* </a> */}
                </div>
            </li>
        </ul>
    );
}
