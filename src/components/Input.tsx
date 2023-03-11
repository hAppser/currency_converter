type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>| undefined
  disabledInput:boolean
  value:number|string|undefined
}

const Input:React.FC<Props> = (props) => {
    return(
        <input type="number" min={0} placeholder="Select current" className="outline-none w-full sm:w-auto focus:border-2 px-2 bg-blue-600 placeholder:text-white text-white border-white border rounded-lg md:text-xl"
          onChange={props.onChange}
          disabled={props.disabledInput}
          value={props.value}
        />
    )
}

export default Input