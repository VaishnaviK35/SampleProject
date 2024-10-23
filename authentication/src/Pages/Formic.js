import { useFormik } from "formik"

export const Formic = () => {

    const formic =  useFormik({
        initialValues: {
            userName: '',
            userEmail: ''
        },
        onSubmit: (values) => {
            console.log('values on submit: ',values);
        },
        validate: (values) => {
            const errors = {};
            console.log('values on validate: ',values);
            if (values.userName == '') {
                errors.userName = 'Required UserName';
            }
            
            if (values.userEmail == '') {
                errors.userEmail = 'Required Email';
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
                errors.userEmail = 'Invalid email address';
            }
            return errors;
        },
        // validateOnChange: (values) => {
        //     console.log('values on change: ',values);
        // },
        // validateOnBlur: (values) => {
        //     console.log('values on blur: ',values);
        // }
    });

    return(
        <form onSubmit={formic.handleSubmit}>
            <div>
                <label >Name</label>
                <input type="text" name="userName" id="" value={formic.values.userName} onChange={formic.handleChange} onBlur={formic.handleBlur}/>
                {formic.errors && formic.errors.userName && <p>{formic.errors.userName}</p>}
            </div>
            <div>
                <label >Email</label>
                <input type="text" name="userEmail" id="" value={formic.values.userEmail} onChange={formic.handleChange} onBlur={formic.handleBlur}/>
                {formic.errors && formic.errors.userEmail && <p>{formic.errors.userEmail}</p>}
            </div>
            <button>Submit</button>
        </form>
    )
}