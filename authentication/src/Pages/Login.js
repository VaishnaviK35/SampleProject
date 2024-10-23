import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { login } from '../slices/loginSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        loginName: '',
        loginEmail: ''
    }

    const redirectToDashboard = (values) => {
        dispatch(login());
        navigate('/dashboard');
        console.log('form values : ', values);
        
    }

    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Email is Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
    }

    
    function validateUsername(value) {
        let error;
        if (!value) {
            error = 'Username is Required';
        } else if (!/^[a-z]+$/i.test(value)) {
            error = 'Invalid Username';
        }
        return error;
    }
    
    return (
        <div className='login-container'>
            <Formik initialValues={initialValues} onSubmit={redirectToDashboard}>
                {
                    ({errors}) => (
                        <Form className='login-form'>
                            <div>
                                <label>Name</label>
                                <Field name="loginName" placeholder="Doe" validate={validateUsername}/>
                                {errors.loginName && <p>{errors.loginName}</p>}
                            </div>  
                            <div>
                                <label>Email</label>
                                <Field name="loginEmail" type="email" placeholder="jane@acme.com" validate={validateEmail}/>
                                {errors.loginEmail && <p>{errors.loginEmail}</p>}
                            </div>  
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
        
    )
}