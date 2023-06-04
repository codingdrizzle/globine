import React from 'react'
import { Helmet } from 'react-helmet-async'


const Meta = ({ title, description, canonical_path }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Francis Buabin Owusu" />
            <link rel="canonical" href={canonical_path} />
        </Helmet>
    )
}

export default Meta