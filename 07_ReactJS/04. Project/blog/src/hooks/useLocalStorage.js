import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData ? JSON.parse(storedData) : defaultValue;
    });

    const setLocaleStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));

        setValue(newValue);
    }

    return [
        value,
        setLocaleStorageValue
    ]
}