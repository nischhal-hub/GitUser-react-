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

    //requests and loading
    const [requests, setRequests] = useState(0)
    const [loading, setLoading] = useState(false)

    //error
    const [error, setError] = useState({ show: false, msg: "" })

    //checks remaining requests in initial load of page.
    useEffect(() => {
        checkRequests()
    }, [])

    //function to check remaining requests.
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data }) => {
            let { rate: { remaining } } = data;
            setRequests(remaining);
            if (remaining === 0) {
                toggleError(true, "You have excedded search limit!!!");
            }
        }).catch(err => console.log(err))
    }

    //searches user and sets user,followers and repo
    const searchUser = async (user) => {
        setLoading(true)
        //*remember to catch error here else the toggleError won't be executed as it response bad error.
        const resp = await axios(`${rootUrl}/users/${user}`).catch(err=>console.log(err))
        console.log(resp)
        if (resp) {
            setGithubUser(resp.data)
            axios(`${rootUrl}/users/${user}/repos?per_page=100`).then(({ data }) => setGithubRepo(data)).catch(err => console.log(err))
            axios(`${rootUrl}/users/${user}/followers`).then(({ data }) => setGithubFollowers(data)).catch(err => console.log(err))
        } else {
            toggleError(true, "User couldn't be found!!")
        }
        setLoading(false)
        checkRequests()
    }

    const toggleError = (show, msg) => {
        setError({ show, msg })
        console.log("I have been called!!")
    }

    return <GithubContext.Provider value={{ githubUser, githubRepo, githubFollowers, requests, error, loading, searchUser }}>
        {children}
    </GithubContext.Provider>
}
const useGlobalContext = () => {
    return useContext(GithubContext)
}

export { GithubProvider, useGlobalContext }