import React from 'react'
import "../../styles/header.scss"
import Brand from "../../images/youtube.svg"
import Git from "../../images/github-icon.svg"
import SearchBar from "./SearchBar"
import { connect } from "react-redux"

const Header = ({ app }) => {
    return (
        <div className="container">
            <div className="brand">
                <div className="img-container">
                    <img src={Brand} alt="brand" />
                </div>
                <p className="brand">{app.app}</p>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <div className="github">
                    <a href="https://github.com/Ranganath-MD/youtube-clone" target="_blank">
                        <img src={Git} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(Header)
