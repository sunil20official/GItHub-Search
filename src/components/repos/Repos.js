import React, { useContext }  from 'react'
import Repositem from "./Repositem"
import GithubContext from "../../context/github/githubContext"

const Repos = ()=>{
    const githubContext = useContext(GithubContext);
    return githubContext.repos.map( repo => <Repositem key={repo.id} repo={repo} /> )
}

export default Repos