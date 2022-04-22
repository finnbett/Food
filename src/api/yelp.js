import axios from "axios";
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer iCDALF_EuAsC5KLM800ozTv-TPjjnO8LS7qQ1xjswSq_6B8-QzNlRJPJz0bedR0X0GH6-CeIrPcfSUTKS-FY5PxJMVAo7P4PIG2uItS8lcJOZaAvMkUZeOmrDv5hYnYx'
        
    }
})