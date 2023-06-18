import { useState } from "react";

export function SearchForm({onSubmit, label, placeholder, formStyles='', buttonStyles='', inputStyles='', labelStyles=''}) {

    const [value, setValue] = useState('');

    const handleSubmit = () => {
        onSubmit(value);
    };

    const handleChange = (e) => {
        setValue(e.currentTarget.value);
    };

    return (
        <form onSubmit={handleSubmit} className={`relative w-full flex border ${formStyles}`}>

            <label className={`${labelStyles}`}>{label}</label>
            <input
                className={`${inputStyles}`}
                type="text"
                autocomplete="off"
                value={value}
                name="search"
                onChange={handleChange}
                placeholder={placeholder}
            />

            <button type="submit" className={`absolute right-0 ${buttonStyles}`}>🔍</button>
        </form> 
    )
};

SearchForm.propTypes = {

};