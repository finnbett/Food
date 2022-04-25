import { useEffect, useState } from "react"
import yelp from "../api/yelp"

export default () => {
    const [results, setResults] = useState([])
    const [errMessage, setErrMessage] = useState('')

    const searchApi = async term => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit:50,
                    term: term,
                    location:'san jose'

                }
            })
            console.log(response.data.businesses)
            setResults(response.data.businesses)
        } 
    catch (e){
        setErrMessage('Something went wrong')
        console.log(e)
    }
    }

    useEffect(() => {
        searchApi('pasta')
    },[])

    return [searchApi, results, errMessage]
}


