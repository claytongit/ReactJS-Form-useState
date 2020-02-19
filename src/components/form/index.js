import React, { useState } from 'react';

import './style.css';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    async function click(event) {
        event.preventDefault();

        console.log({ name, email, city });
    }

    return (

        <form onSubmit={click}>

            <input
                type="text"
                placeholder="enter your name"
                value={name}
                onChange={event => setName(event.target.value)}
            />

            <input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <select
                value={city}
                onChange={event => setCity(event.target.value)}
            >
                <option value="" disabled>cities in brazil</option>
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
                <option>Santos</option>
                <option>Santo André</option>
                <option>Minas Gerais</option>
            </select>

            <button>submit</button>

        </form>

    );
}