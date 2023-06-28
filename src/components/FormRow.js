import { Field } from "formik";
import Wrapper from "../assets/wrappers/FormRow";
import FormError from "./FormError";
const FormRow=({type,id,name,placeholder,className})=>{
    return (
        <Wrapper>
            <Field type={type} id={id} name={name} placeholder={placeholder} className={className}/>
            <FormError name={name} component="div" className="error-message"/>
        </Wrapper>
    )
}


export default FormRow;