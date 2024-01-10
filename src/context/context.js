import React, { useState, useEffect, createContext, useContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [githubRepo, setGithubRepo] = useState(mockRepos)
    const [githubFollowers, setGithubFollowers] = useState(mockFollowers)
    const [requests, setRequests] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error,setError]= useState({show:false, msg:""})
    useEffect(() => {
        checkRequests()
    }, [])

    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data }) => {
            let { rate: { remaining } } = data;
            remaining=0; 
            setRequests(remaining);
            if(remaining === 0){
                toggleError(true,"You have excedded search limit!!!");
            }
        }).catch(err => console.log(err))
    }

    const toggleError=(show=false,msg="")=>{
        setError({show,msg})
    }
    return <GithubContext.Provider value={{ githubUser, githubRepo, githubFollowers, requests,error }}>
        {children}
    </GithubContext.Provider>
}
const useGlobalContext = () => {
    return useContext(GithubContext)
}

export { GithubProvider, useGlobalContext }