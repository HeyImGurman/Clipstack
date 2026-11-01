function Clipboard() {
    return(
        <>
        <div className="flex flex-row items-center justify-between p-4 m-4 shadow-[0_2px_10px_rgba(255,255,255,0.15)] rounded-[20px] min-h-62 text-white ">

            <div className="flex flex-row w-2/5 justify-center item-start">
                <h1>Enter phrase</h1>
            </div>
            
            <div className="flex w-3/5 h-auto justify-center item-center shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                <h1>Clipboard is Empty!</h1>
            </div>

        </div>
        </>
    )
}

export default Clipboard;