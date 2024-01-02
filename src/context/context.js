import React, { useState, useEffect, createContext, useContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({children})=>{
    const [githubUser, setGithubUser] = useState(mockUser)
    const [githubRepo, setGithubRepo] = useState(mockRepos)
    const [githubFollowers, setGithubFollowers] = useState(mockFollowers)
    return <GithubContext.Provider value={{githubUser,githubRepo,githubFollowers}}>
        {children}
    </GithubContext.Provider>
}
const useGlobalContext = ()=>{
    return useContext(GithubContext)
}

export { GithubProvider, useGlobalContext }