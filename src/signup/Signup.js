import React from 'react';
import 'bulma/css/bulma.css';

import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';


const Signup = () => {
    return (
        <>
            <Navbar />

            <FormField label="Name" type="text" placeholder="your name" />
            <FormField label="Email" type="email" placeholder="your email" />
            <FormField label="Password" type="password" placeholder="your password" />

            <CoolButton isSmall isSuccess>Click Me </CoolButton>

        </>
    )
}

export default Signup