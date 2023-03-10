import { useState, ChangeEvent, useEffect } from "react";
import { IRates } from "../types/IRates";
import Currency from "./Currency"
const Main = (props:IRates) => {
    const [firstCurrency, setFirstCurrency] = useState<number|any>();
    const [secondCurrency, setSecondCurrency] = useState<number|undefined|any>();
    const currency:string[] = ["UAH", "USD", "EUR"];
    const rates:any = [
        {cc: "USD", rate: props.usd},
        {cc: "EUR", rate: props.eur},
    ]

    const onChangeHandler1 = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        let element:Element|any= e.target.nextElementSibling;
        const result = +e.currentTarget.value;
        console.log(rates[0].cc)
        switch (element.value) {
            case ('USD') :
                return setSecondCurrency(+(result*rates[0].rate).toFixed(10));
            case ('EUR'):
                return setSecondCurrency(+(result*rates[1].rate).toFixed(10));
            default: return setSecondCurrency(result);
        }
    })
    const onChangeHandler2 = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        let element:any= e.target.nextElementSibling;
        const result = +e.currentTarget.value;
        switch (element.value) {
            case ('USD') :
                return setFirstCurrency(+(result*rates[0].rate).toFixed(10));
            case ('EUR'):
                return setFirstCurrency(+(result*rates[1].rate).toFixed(10));
            default: return setFirstCurrency(result);
        }
    })
    return(
        
        <main className='flex flex-col text-center justify-around align-middle mt-10 bg-blue-600 rounded-3xl h-72'>
            <Currency key='1' onChange={onChangeHandler1} newValue={firstCurrency}/>
            <div className="icon flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white cursor-pointer hover:text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
            </div>
            <Currency key='2' onChange={onChangeHandler2} newValue={secondCurrency}/>
        </main>
    )
}

export default Main