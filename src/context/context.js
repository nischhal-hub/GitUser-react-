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
    const [loading, setLoading] = useState(false)
    const [error,setError]= useState({show:false, msg:""})
    useEffect(() => {
        checkRequests()
    }, [])

    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data }) => {
            let { rate: { remaining } } = data;
            setRequests(remaining);
            if(remaining === 0){
                toggleError(true,"You have excedded search limit!!!");
            }
        }).catch(err => console.log(err))
    }

    const toggleError=(show,msg)=>{
        setError({show,msg})
    }

    const searchUser=async(user)=>{
        setLoading(true)   
        try {
            const resp = await axios(`${rootUrl}/users/${user}`)
            if(resp){
                setGithubUser(resp.data)
                axios(`${rootUrl}/users/${user}/repos?per_page=100`).then(({data})=>setGithubRepo(data)).catch(err=>console.log(err))
                axios(`${rootUrl}/users/${user}/followers`).then(({data})=>setGithubFollowers(data)).catch(err=>console.log(err))
            }else{
                toggleError(true,"User couldn't be found!!")
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        checkRequests()
    }
    return <GithubContext.Provider value={{ githubUser, githubRepo, githubFollowers, requests,error,loading,searchUser }}>
        {children}
    </GithubContext.Provider>
}
const useGlobalContext = () => {
    return useContext(GithubContext)
}

export { GithubProvider, useGlobalContext }