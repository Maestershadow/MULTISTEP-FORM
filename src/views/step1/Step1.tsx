import { useState } from "react";

import './Step1.css'

interface FormErrors {
    username: string;
    email: string;
    phone: string;
}

interface StepsInterface {
    first: {
        username: string,
        email: string,
        phone: string
    },
    second: {
        index: number,
        plan: string,
        amount: string,
        type: string
    },
    third:
    {
        selectedIndexes: Array<number>
    }
}

export default function Step1(props: { stepDataValue: StepsInterface, update: (arg0: string, arg1: { username: string; email: string; phone: string; }) => void; callback: () => void; }) {

    const pageData = [
        {
            "field": "Name",
            "type": "text",
            "hint": "e.g. Stephen King",
            "sub": "username"
        },
        {
            "field": "Email Address",
            "type": "text",
            "hint": "e.g. stephenking@lorem.com",
            "sub": "email"
        },
        {
            "field": "Phone Number",
            "type": "tel",
            "hint": "e.g. +1 234 567 890",
            "sub": "phone"
        }
    ]


    const [formData, setFormData] = useState({
        username: props.stepDataValue.first.username,
        email: props.stepDataValue.first.email,
        phone: props.stepDataValue.first.phone
    });

    const [errors, setErrors] = useState<FormErrors>({
        username: "",
        email: "",
        phone: ""
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        if (name === "phone") {
            if (/^[0-9+ ]*$/.test(value)) {
                setFormData({
                    ...formData,
                    [name]: value
                })
            }
        }
        else {
            setFormData({
                ...formData,
                [name]: value
            })
        }

    }

    const validateForm = () => {
        const { username, email, phone } = formData;
        const newErrors = {
            username: '',
            email: '',
            phone: ''
        };

        if (username.trim().length === 0) {
            newErrors.username = 'This field is required';
        }



        if (email.trim().length === 0) {
            newErrors.email = 'This field is required';
        }
        else if (!/\S+@\S+\S+/.test(email)) {
            newErrors.email = 'Invalid email format'
        }
        //Do an else if here to test for email format.   

        if (phone.trim().length === 0) {
            newErrors.phone = "This field is required";
        }


        setErrors(newErrors);
        return Object.values(newErrors).every((error) => !error);
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (validateForm()) {
            props.update("first", formData);
            props.callback();
        }
    }

    return (
        <form id="step1" onSubmit={handleSubmit} className='form-main-content'>
            <div className='form-heading'>
                <h1>Personal info</h1>
                <h2>Please provide your name, email address, and phone number</h2>
            </div>
            <div className='input-fields'>
                {pageData.map((data) =>
                    <div key={data.field}>
                        <div className="error-fields">
                            <label htmlFor={data.sub}>{data.field}</label>
                            <p>{errors[data.sub === "username" ? "username" : data.sub === "email" ? "email" : "phone"]}</p>
                        </div>
                        <input maxLength={data.sub === "phone"?15:45} data-failed={errors[data.sub === "username" ? "username" : data.sub === "email" ? "email" : "phone"].trim().length > 0} onChange={handleChange} value={formData[data.sub === "username" ? "username" : data.sub === "email" ? "email" : "phone"]} type={data.type} name={data.sub} id={data.sub} placeholder={data.hint} />
                    </div>
                )}
            </div>
        </form>
    );
}