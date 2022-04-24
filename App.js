import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsList from "./src/components/ResultsList";

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsList
},  
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Business Search"
  }
})

export default createAppContainer(navigator)