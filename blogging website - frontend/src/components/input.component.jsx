import { useState } from  "react";


const InputBox = ({ name, type, id, value, placeholder, icon }) => {

    const [passwordVisible,setpasswordVisible] = useState(false);
  return (
    <div className="relative w-full mb-4">
      <input
        name={name}
        type={type == "password" ? passwordVisible? "text" : "password" : type}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className="input-box pl-10 pr-10"
      />

      {/* Left-side icon */}
      <i className={`fi ${icon} input-icon left-3`}></i>

      {/* Right-side password toggle icon */}
      {type === "password" && (
        <i className={"fi fi-rr-eye" + (!passwordVisible ? "-crossed" : "") + " absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"}
        
        onClick={() => setpasswordVisible(currentVal => !currentVal)}
        ></i>
      )}
    </div>
  );
};

export default InputBox;
