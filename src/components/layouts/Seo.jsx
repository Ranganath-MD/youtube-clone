import React from 'react'
import { Helmet } from "react-helmet";

const Seo = ({title, description}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="description" content={description}></meta>
        </Helmet>
    )
}

export default Seo
