import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.background}>
            <AntDesign name="search1" style={styles.icon} />
            <TextInput 
            style={styles.text} 
            placeholder='Search...'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop:15,
        backgroundColor: '#969490',
        height: 50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        justifyContent: 'flex-start',
        
        
        // alignItems: 'center'

    },
    text: {
        fontSize:20,
        left:20,
        flex:1
    },
    icon: {
        left:5,
        fontSize: 30,
        color:'black',
        alignSelf:'center'
    }
    
})

export default SearchBar