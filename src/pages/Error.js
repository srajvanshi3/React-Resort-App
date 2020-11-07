import React from 'react'
import Hero from "../Components/Hero"
import Banner from '../Components/Banner'
import { Link} from "react-router-dom"

function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="Page Not Found">
            <Link to='/' className="btn-primrary" > Return Home</Link>
            </Banner>

            </Hero>
    )
}

export default Error
