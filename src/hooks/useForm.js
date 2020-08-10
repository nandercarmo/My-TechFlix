import {useState} from 'react';

export default function useForm(initialValues) {

    const [newValue, setNewValue] = useState(initialValues);

    function handleChange(event) {

        setNewValue({
            ...newValue,
            [event.target.getAttribute('name')]: event.target.value
        });
    }

    function clearForm() {

        setNewValue(initialValues);
    }

    return {
        handleChange,
        newValue,
        clearForm
    }
}