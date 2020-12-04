import React from "react";
import { useForm } from "react-hook-form";

import styles from "./From.module.css";
import FormBtn from "./form-btn/FormBtn";
import ErrorMsg from "./error-msg/ErrorMsg";

const Form = ({ options, close }) => {
    const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phonePattern = /^[0-9\-\+]{5,15}$/;
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = e => {
        if (close) close();
        // TODO: implement with BE
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fieldWrapper}>
                <input className={styles.formField}
                       type='text'
                       name='name'
                       placeholder={options?.placeholders?.name || 'YOUR NAME *'}
                       ref={register({ required: true })}/>
                { errors.name && errors.name?.type === "required" &&
                    <ErrorMsg msg={'This field is required'} />
                }
            </div>

            {
                options?.isPhone &&
                <div className={styles.fieldWrapper}>
                    <input className={styles.formField}
                           type='text'
                           name='phone'
                           placeholder={options?.placeholders?.phone || 'YOUR PHONE *'}
                           ref={register({ required: true, pattern: phonePattern })} />
                    { errors.phone && errors.phone?.type === "required" &&
                        <ErrorMsg msg={'This field is required'} />
                    }
                    { errors.phone && errors.phone?.type === "pattern" &&
                        <ErrorMsg msg={'Phone is incorrect'} />
                    }
                </div>
            }

            <div className={styles.fieldWrapper}>
                <input className={styles.formField}
                       type='text'
                       name='email'
                       placeholder={options?.placeholders?.email || 'YOUR E-MAIL *'}
                       ref={register({ required: true, pattern: emailPattern })}/>
                { errors.email && errors.email?.type === "required" &&
                    <ErrorMsg msg={'This field is required'} />
                }
                { errors.email && errors.email?.type === "pattern" &&
                    <ErrorMsg msg={'Email is incorrect'} />
                }
            </div>

            <div className={styles.fieldWrapper}>
                <textarea className={styles.formField}
                          name='message'
                          placeholder={options?.placeholders?.message || 'LEAVE YOUR MESSAGE HERE *'}
                          ref={register({ required: true })} />
                { errors.message && errors.message?.type === "required" &&
                    <ErrorMsg msg={'This field is required'} />
                }
            </div>

            <FormBtn options={options} />
        </form>
    )
};

export default Form;
