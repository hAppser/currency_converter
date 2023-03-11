type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabledInput:boolean
  value:number|undefined
}

const Input:React.FC<Props> = (props) => {
    return(
        <input type="number" placeholder="0" className="input px-2 bg-blue-600 placeholder:text-white text-white border-white border rounded-lg md:text-xl"
          onChange={props.onChange}
          disabled={props.disabledInput}
          value={props.value}
        />
    )
}

export default Input