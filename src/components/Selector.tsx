import { ChangeEventHandler } from "react";
import { ISelector } from "../types/ISelector"

type Props = {
  secondCurrency: string;
  selector:ISelector[],
  firstCurrency: ChangeEventHandler<HTMLSelectElement> | undefined;
}

const Selector = (props:Props) => {
    return (
        <select onChange={props.firstCurrency} className="m-2 cursor-pointer  border border-white rounded-full md:h-4/5">
          {props.selector.map((item:ISelector, index:number) => 
            (
                <option
                key={index}
                disabled={
                    item.disabled || item.text === props.secondCurrency.toUpperCase() 
                }
                selected={item.selected}
                >
                {item.text}
                </option>
            )
          )}
        </select>
    )
}

export default Selector