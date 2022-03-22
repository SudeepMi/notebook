import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';

export default Register;

function Register() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('login');
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
            <div className="card login_wrapper border-0">
            <h4 className="text-center text-brand">Create a new account</h4>
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="btn btn-primary bg-brand border-0 mt-3 w-50">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </button>
                        <Link href="/account/login" className="btn btn-link mt-3 mx-5">Cancel</Link>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
