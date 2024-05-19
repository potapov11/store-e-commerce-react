import './form.css';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export function Form() {
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowForm(true);
		}, 10000);

		// Очистка таймера при размонтировании компонента
		return () => clearTimeout(timer);
	}, []);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: 'onChange' });

	const onSubmit = (data) => {
		reset();
		console.log(data);
	};

	// console.log(watch('example')); // watch input value by passing the name of it

	return (
		<div className={showForm ? 'form__modal' : 'form__modal hide'}>
			<div className="form__inner-modal">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>
						<input
							placeholder="name"
							type="text"
							{...register('name', {
								required: true,
								minLength: {
									value: 2,
									message: 'Минимум 5 символов',
								},
							})}
						/>
						<div style={{ height: '40px', color: 'red' }}>{errors?.name && <p>{errors?.name?.message}</p>}</div>
					</label>
					<label>
						<input
							placeholder="e-mail"
							type="email"
							{...register('email', {
								required: 'Введите email',
								pattern: {
									value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
									message: 'Неправильный email',
								},
							})}
						/>
						<div style={{ height: '40px', color: 'red' }}>{errors?.email && <p>{errors?.email?.message}</p>}</div>
					</label>
					{/* {errors.exampleRequired && <span>This field is required</span>} */}
					<button disabled={!isValid}>Отправить</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
