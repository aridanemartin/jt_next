import Head from 'next/head'
const Meta = (props) => (      
<Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta name="og:description" property="og:description" content={props.desc} />
    <meta property="og:site_name" content={props.title} />
    <meta property="og:url" content={`${props.canonical}`} />  
    <meta name="twitter:card" content={props.desc} /> 
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    {
    props.image ? (
    <meta property="og:image" content={`${props.image}`} />  
    ) : (
    <meta property="og:image" content={`${props.image}`} />  
    )   
    } 
    {
    props.image &&   
    <meta name="twitter:image" content={`${props.image}`} />   
    }
    {
    props.canonical &&
    <link rel="canonical" href={`${props.canonical}`} />
    }
</Head>
)
export default Meta