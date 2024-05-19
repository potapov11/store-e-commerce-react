import './form.css';
import { useForm } from 'react-hook-form';

export function Form() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: 'onChange' });

	const onSubmit = (data) => {
		console.log(data);
	};

	// console.log(watch('example')); // watch input value by passing the name of it

	return (
		<form onSubmit={handleSubmit(onSubmit)} style={{ opacity: '0' }}>
			<input placeholder="name" {...register('name', { required: true })} />
			<input placeholder="e-mail" type="email" {...register('email', { required: true })} />
			{/* {errors.exampleRequired && <span>This field is required</span>} */}
			<button disabled={!isValid}>Отправить</button>
		</form>
	);
}

export default Form;
