
const InputButton = ({ type, name, placeholderName, className = "", ...props }) => {
    return (
        <div>
            <input className="border-b-2  py-2 rounded-lg w-full text-black my-3 p-3" type={type} name={name} placeholder={placeholderName} />
            {/* <input
                className={`w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none ${className}`}
                {...props}
            /> */}
        </div>
    );
};

export default InputButton;