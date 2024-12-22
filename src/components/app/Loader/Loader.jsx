import React from 'react'
import "./Loader.css"
import { Hourglass } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Hourglass
            visible={true}
            height="100"
            width="100"
            ariaLabel="hourglass-loading"
            colors={["#d20025", "#000"]}
            wrapperClass="loader"
            wrapperStyle={{ margin: "calc(25% - 140) auto" }}
        />
    )
}

export default Loader