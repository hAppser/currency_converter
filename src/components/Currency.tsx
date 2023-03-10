type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    newValue:number|undefined;
  }

const Currency:React.FC<Props> = (props) => {
    const currency:string[] = ["UAH", "USD", "EUR"];

    return (
        <div className="m-2">
            <input onChange={props.onChange} type="text" placeholder="0" className="input px-2 bg-blue-600 placeholder:text-white text-white border-white border rounded-lg md:text-xl" defaultValue={props.newValue}></input>
            <select className="m-2 cursor-pointer">
                {currency.map((keyName) => 
                    (<option key={keyName} value={keyName}>{keyName}</option>)
                )}
            </select>
        </div>
    )
}

export default Currency