import classNames from "classnames";
import classes from "./FeedbackForm.module.sass";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { postFeedbackForm } from "../../../../http/feedbackFormAPI";

import { useState } from "react";

import HeartIcon from "../../../icons/HeartIcon";
import SuccessfullSubmitted from "./SuccessfullSubmitted/SuccessfullSubmitted";

export default function FeedbackForm() {
  const [isSuccessfullSubmitted, setIsSuccessfullSubmitted] = useState(false);

  const setErrors = (touched?: boolean, errors?: string) =>
    errors && touched
      ? classNames(classes.feedback_form__input, classes.error)
      : classes.feedback_form__input;

  return (
    <>
      {isSuccessfullSubmitted ? (
        <SuccessfullSubmitted />
      ) : (
        <>
          <h1 className={classes.feedback_form__title}>Напишите нам</h1>
          <div className={classes.feedback_form__text_container}>
            <p className={classes.feedback_form__subtitle}>
              а мы с радостью ответим вам
            </p>
            <HeartIcon />
          </div>

          <Formik
            initialValues={{
              first_name: "",
              email: "",
              topic_type: "",
              text: "",
            }}
            validationSchema={Yup.object({
              first_name: Yup.string()
                .max(15, "Не более 15 символов")
                .required("Обязательное поле"),

              email: Yup.string()
                .email("Некорректный адрес почты")
                .required("Обязательное поле"),

              topic_type: Yup.string()
                .max(15, "Не более 15 символов")
                .required("Обязательное поле"),

              text: Yup.string()
                .max(1000, "Не более 1000 символов")
                .required("Обязательное поле"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              postFeedbackForm(values);

              setSubmitting(false);
              console.log(1);
              setIsSuccessfullSubmitted(true);
            }}
          >
            {({ errors, touched }) => (
              <Form className={classes.feedback_form}>
                <Field
                  name="first_name"
                  type="text"
                  className={setErrors(touched?.first_name, errors?.first_name)}
                  placeholder="*Ваше имя"
                />
                <ErrorMessage
                  name="first_name"
                  component="p"
                  className={classes.error_message}
                />

                <Field
                  name="email"
                  type="email"
                  className={setErrors(touched?.email, errors?.email)}
                  placeholder="*E-mail"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className={classes.error_message}
                />

                <Field
                  name="topic_type"
                  type="text"
                  className={setErrors(touched?.topic_type, errors?.topic_type)}
                  placeholder="*Тема обращения"
                />
                <ErrorMessage
                  name="topic_type"
                  component="p"
                  className={classes.error_message}
                />

                <Field
                  name="text"
                  as="textarea"
                  placeholder="*Ваш вопрос"
                  className={setErrors(touched?.text, errors?.text)}
                />

                <ErrorMessage
                  name="text"
                  component="p"
                  className={classes.error_message}
                />

                <p className={classes.feedback_form__policy_text}>
                  Нажимая на кнопку «Отправить», я даю
                  <a href="#"> согласие </a>на обработку моих персональных
                  данных в соответствии с
                  <a href="#"> политикой обработки персональных данных. </a>
                </p>

                <button type="submit" className={classes.feedback_form__btn}>
                  Отправить
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
}
