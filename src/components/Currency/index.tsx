const Currency = () => {
    return (
        <div className="my-4">
            <input type="number" placeholder="Currency"></input>
            <select className="">
                <option value="value1">UAH</option>
                <option value="value2">USD</option>
                <option value="value3">EUR</option>
            </select>
        </div>
    )
}

export default Currency