import { ErrorMessage } from 'formik';
import React from 'react';


const FormError=({name,component})=>{
    <ErrorMessage name={name} component={component}/>
}

export default FormError;