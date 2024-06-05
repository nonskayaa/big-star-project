import classes from "./NewsletterForm.module.sass";
import classNames from "classnames";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useState } from "react";

import { postNewsletterForm } from "../../../../http/newsletterFormAPI";

export default function NewsletterForm({
  setIsSuccessfullSubmitted,
}: {
  setIsSuccessfullSubmitted: (isSuccessfull: boolean) => void;
}) {
  const setErrors = (errors?: string) =>
    errors
      ? classNames(classes.newsletter_form__input, classes.error)
      : classes.newsletter_form__input;

  return (
    <>
      <h4 className={classes.newsletter__title}>
        Узнавайте об акциях самыми первыми
      </h4>
      <p className={classes.newsletter__subtitle}>
        подпишитесь на нашу рассылку
      </p>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Некорректный адрес почты")
            .required("*Введите email чтобы подписаться на рассылку"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          postNewsletterForm(values);

          setSubmitting(false);
          setIsSuccessfullSubmitted(true);
        }}
      >
        {({ errors }) => (
          <Form className={classes.newsletter_form}>
            <div className={classes.newsletter__input_btn_container}>
              <Field
                name="email"
                type="email"
                className={setErrors(errors?.email)}
                placeholder="name@example.com"
              />

              <button type="submit" className={classes.newsletter_form__btn}>
                Отправить
              </button>
            </div>
            <ErrorMessage
              name="email"
              component="p"
              className={classes.error_message}
            />
          </Form>
        )}
      </Formik>

      <p className={classes.newsletter__subtitle}>
        обещаем не спамить, а присылать только полезную информацию
      </p>
    </>
  );
}
