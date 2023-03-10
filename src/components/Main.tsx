import { useState, } from "react";
import { IRates } from "../types/IRates";
import { IObj } from '../types/IObj';

import Currency from "./Currency"
const Main = (props:IRates) => {
    const [firstCurrency, setFirstCurrency] = useState<number|undefined>();
    const [secondCurrency, setSecondCurrency] = useState<number|undefined>();
    const currency:any = [
        {cc: "USD", rate: props.usd},
        {cc: "EUR", rate: props.eur},
    ]

    const onChangeHandler1 = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        let element:Element|any= e.target.nextElementSibling;
        const firstInput:any  = +e.currentTarget.value;
        const secondInputCurrency:any = e.target.parentElement?.nextSibling?.childNodes[1];
        switch (element.value) {
            case ("USD") :
                if(secondInputCurrency.value == element.value){
                    return setSecondCurrency(firstInput);
                } else if (secondInputCurrency.value == 'EUR') {
                    return setSecondCurrency(+(firstInput*currency[0].rate/currency[1].rate).toFixed(7));
                } else return setSecondCurrency(+(firstInput*currency[0].rate).toFixed(7))

            case ("EUR"):
                if(secondInputCurrency.value == element.value){
                    return setSecondCurrency(firstInput);
                } else if (secondInputCurrency.value == 'USD') {
                    return setSecondCurrency(+(firstInput*currency[1].rate/currency[0].rate).toFixed(7));
                } else return setSecondCurrency(+(firstInput*currency[1].rate).toFixed(7));
            case ("UAH") : 
                if (secondInputCurrency.value == 'USD') {
                    return setSecondCurrency(+(firstInput/currency[0].rate).toFixed(7));
                } else if (secondInputCurrency.value == 'EUR') {
                    return setSecondCurrency(+(firstInput/currency[1].rate).toFixed(7));
                } else return setSecondCurrency((firstInput));
        }
        
    })
    const onChangeHandler2 = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        let element:any= e.target.nextElementSibling;
        const firstInput = +e.currentTarget.value;
        const secondInputCurrency:any = e.target.parentNode?.previousSibling?.childNodes[1];
        console.log(secondInputCurrency.value == element.value)
        switch (element.value) {
            case ("USD") :
                if(secondInputCurrency.value == element.value){
                    return setFirstCurrency(firstInput);
                } else if (secondInputCurrency.value == 'EUR') {
                    return setFirstCurrency(+(firstInput*currency[0].rate/currency[1].rate).toFixed(7));
                } else return setFirstCurrency(+(firstInput*currency[0].rate).toFixed(7))

            case ("EUR"):
                if(secondInputCurrency.value == element.value){
                    return setFirstCurrency(firstInput);
                } else if (secondInputCurrency.value == 'USD') {
                    return setFirstCurrency(+(firstInput*currency[1].rate/currency[0].rate).toFixed(7));
                } else return setFirstCurrency(+(firstInput*currency[1].rate).toFixed(7));
            case ("UAH") : 
                if (secondInputCurrency.value == 'USD') {
                    return setFirstCurrency(+(firstInput/currency[0].rate).toFixed(7));
                } else if (secondInputCurrency.value == 'EUR') {
                    return setFirstCurrency(+(firstInput/currency[1].rate).toFixed(7));
                } else return setFirstCurrency((firstInput));
        }
    })
    return(
        
        <main className='flex flex-col text-center justify-around align-middle mt-10 bg-blue-600 rounded-3xl h-72'>
            <Currency key='1' onChange={onChangeHandler1} newValue={firstCurrency}/>
            {/* <div className="icon flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white cursor-pointer hover:text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
            </div> */}
            <Currency key='2' onChange={onChangeHandler2} newValue={secondCurrency}/>
        </main>
    )
}

export default Main