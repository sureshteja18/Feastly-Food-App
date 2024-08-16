import React from "react"

const myContext=React.createContext({
    name:'suresh Teja',
    age:24,
    searchInput: [],
    setSearchInput:()=>{}
})

export default myContext

