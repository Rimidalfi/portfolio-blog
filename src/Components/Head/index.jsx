import { Helmet } from "react-helmet";

export default function Head ({children}) {
    return(
        <Helmet>
            {children}
            {/* <title>{props?.title}</title>
            <meta name="description" content={props?.description} />
            <meta name="og:description" content={props?.description} /> */}
        </Helmet>
    )
}