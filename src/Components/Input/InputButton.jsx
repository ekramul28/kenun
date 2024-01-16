
const InputButton = ({ type, name, placeholderName }) => {
    return (
        <div>
            <input className="border-b-2  py-2 rounded-lg w-full text-black my-3 p-3" type={type} name={name} placeholder={placeholderName} />
        </div>
    );
};

export default InputButton;