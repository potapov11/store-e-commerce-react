import "./form.css";
import { X } from "phosphor-react";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useOnClickOutside from "../assets/hooks/Hook-clickoutside";
// import { useSnackbar } from 'notistack';

export function Form() {
  const [showForm, setShowForm] = useState(false);
  const [isForm, setIsForm] = useState(true);
  const [isSended, setIsSended] = useState(true);
  // const { enqueueSnackbar } = useSnackbar();

  function disabledOverFlowHidden() {
    document.body.style.overflow = "auto";
  }

  const refForm = useRef(null);
  useOnClickOutside(refForm, () => setShowForm(false));

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflow = "hidden";
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
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    reset();
    // setShowForm(false);
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setIsForm(false);
          setIsSended(false);
          setTimeout(() => {
            setShowForm(false);
            disabledOverFlowHidden();
          }, 3000);
          // enqueueSnackbar('That was easy!', { variant: 'success' });
        }
        console.log(response);
        return response.json();
      })
      .then((data) => console.log(data));
  };

  // console.log(watch('example')); // watch input value by passing the name of it

  return (
    <div className={showForm ? "form__modal" : "form__modal hide"}>
      <X
        size={32}
        className="modal__close"
        onClick={() => {
          setShowForm(false);
          disabledOverFlowHidden();
        }}
      />
      <div className="form__inner-modal">
        <p className="form__text">{isSended ? "Оставьте Ваши контакты и мы будем присылать акционные предложения и выгодные распродажи" : "Данные успешно отправлены!"}</p>
        {isForm && (
          <form onSubmit={handleSubmit(onSubmit)} ref={refForm}>
            <label>
              <input
                placeholder="name"
                type="text"
                {...register("name", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "Минимум 5 символов",
                  },
                })}
              />
              <div style={{ height: "40px", color: "red" }}>{errors?.name && <p>{errors?.name?.message}</p>}</div>
            </label>
            <label>
              <input
                placeholder="e-mail"
                type="email"
                {...register("email", {
                  required: "Введите email",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Неправильный email",
                  },
                })}
              />
              <div style={{ height: "40px", color: "red" }}>{errors?.email && <p>{errors?.email?.message}</p>}</div>
            </label>
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <button className="form_btn" disabled={!isValid}>
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
