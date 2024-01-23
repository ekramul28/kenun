
const Button = ({ children, className = "" }) => {
    return (
        <div>
            <button className={`text-white dark:bg-sky-500 bg-black py-2 px-4  font-medium ${className}`}>{children}</button>
        </div>
    );
};

export default Button;