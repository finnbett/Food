import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks.js/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })

    }

    return(
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)} 
            />
            { errMessage ? <Text>{errMessage}</Text> : null }
            <ScrollView>
                <ResultsList  results={filterResultsByPrice('$')} title='Cost Effective' />
                <ResultsList  results={filterResultsByPrice('$$')} title='Bit Pricier'/>
                <ResultsList  results={filterResultsByPrice('$$$')}title='Most expensive'/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen