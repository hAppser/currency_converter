import Selector from "./Selector";
import Input from "./Input";
import { ISelector } from "../types/ISelector";

type Props = {
    inputOnChange: any;
    defaultValue: any
    value:number|undefined|any
    firstCurrency:string|any
    selector:ISelector[]
    secondCurrency:string|number|undefined
    disabledInput:boolean
  }

const Currency:React.FC<Props> = (props) => {    

    return (
        <div className="m-2">
            <Input onChange={props.inputOnChange} disabledInput={props.disabledInput} value={props.value}/>
            <Selector firstCurrency={props.firstCurrency} selector={props.selector} secondCurrency={props.secondCurrency}/>
        </div>
    )
}

export default Currency