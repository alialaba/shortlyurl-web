import React from "react";
import "./Input.css";

export default function Input({type, onChange,placeholder, id, name, value,label, autoComplete, defaultValue, error, autoFocus}){
    return(
        <div className="form-col">
            <div className="form-input">
              {/* <label htmlFor="email">Email</label> */}
              <i className="fa-regular fa-envelope"></i>
              <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
              />
            </div>
            {error && <span className="error">{error}</span>}
            </div>
    );
}