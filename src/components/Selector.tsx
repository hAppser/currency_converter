const Selector = (props:any) => {
    return (
        <select onChange={props.firstCurrency} className="m-2 cursor-pointer">
          {props.selector.map((item:any, index:number) => 
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