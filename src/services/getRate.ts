import axios from "axios";

const getRate = (code:string) => {
    return axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${code}&json`)                
}

export default getRate