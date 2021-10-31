import { useForm } from "react-hook-form";
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [books, setBooks] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    // form submit
    const onSubmit = data => {
        console.log(data);
        axios.post('https://chilling-spell-24897.herokuapp.com/userService', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Contact form fillup successfully');
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://chilling-spell-24897.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [serviceId])
    return (


        <div className="booking-section">
            <div className="text-center mt-5">
                <h3>Your Selected Package</h3>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">


                    <div className="card service-img card-description mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={books.img} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{books.name}</h3>
                            <p>{books.description}</p>
                            <span> <span className="cost">${books.cost}</span>/Per Person</span>
                            <span><i class="fas fa-calendar-alt ms-5 px-1"></i> <span className="duration">
                                {books.Duration}</span></span>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <div className="add-service  ">
                            <h3 className="mb-4 text-center">Add  New Service</h3>
                            <div className="mb-3 ms-5">
                                <h5>User Name: <span className="user-info">{user.displayName}</span> </h5>
                                <h5>User-Email: <span className="user-info">{user.email}</span> </h5>
                            </div>



                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("Username", { required: true, maxLength: 50 })} placeholder="Your name" />
                                <input {...register("address", { required: true, maxLength: 50 })} placeholder="Address" />

                                <input {...register("packege", { required: true, maxLength: 50 })} placeholder="Packege name" />

                                <textarea {...register("Opinion",)} placeholder="Your Opinion" />
                                <input type="number" {...register("phone",)} placeholder="phone number" />
                                <input {...register("Duration", { required: true, maxLength: 20 })} placeholder="Duration" />


                                <button type="submit" className="submit-order mt-2">Place New Order</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Booking;