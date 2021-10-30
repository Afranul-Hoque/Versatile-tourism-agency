import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css'


const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Contact form fillup successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="add-service">
                <h3>Please Fill the Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="name" />
                    <textarea {...register("description",)} placeholder="description" />
                    <input type="number" {...register("cost",)} placeholder="price" />
                    <input {...register("Duration", { required: true, maxLength: 20 })} placeholder="Duration" />
                    <input {...register("img",)} placeholder="img" />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;