import React from 'react'
import "../../styles/header.scss"
import Brand from "../../images/youtube.svg"
import Git from "../../images/github-icon.svg"
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const Header = ({ app }) => {
    return (
        <div className="container">
            <Link to="/" className="brand" style={{ color: "black", textDecoration: "none"}}>
                <div className="img-container">
                    <img src={Brand} alt="brand" />
                </div>
                <p className="brand">{app.app}</p>
            </Link>
            <div>
                <SearchBar />
            </div>
            <div>
                <div className="github">
                    <a href="https://github.com/Ranganath-MD/youtube-clone" target="_blank" rel="noopener noreferrer">
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
