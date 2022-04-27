import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
// import { validator } from "../../utils/validator";
import SelectField from "../common/form/selectField";
import api from "../../api";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    });
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState();
    const [qualities, setQualities] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // const validatorConfig = {
    //     email: {
    //       isRequired: {
    //         message: 'Электронная почта обязательна для заполнения'
    //       },
    //       isEmail: {
    //         message: 'Email введен некорректно'
    //       }
    //     },
    //     password: {
    //       isRequired: {
    //         message: 'Пароль обязателен для заполнения'
    //       },
    //       isCapitalSymbol: {
    //         message: 'Пароль должен содержать хотя бы одну заглавную букву'
    //       },
    //       isContainDigit: {
    //         message: 'Пароль должен содержать хотя бы одно число'
    //       },
    //       minLengthPassword: {
    //         message: 'Пароль должен состоять минимум из 8 символов',
    //         value: 8
    //       }
    //     },
    //     profession: {
    //       isRequired: {
    //         message: 'Обязательно выберите профессию'
    //       }
    //     },
    //     license: {
    //       isRequired: {
    //         message:
    //           'Вы не можете использовать наш сервис без использования лицензионного соглашения'
    //       }
    //     }
    //   };

    const validateSheme = yup.object().shape({
        licence: yup
            .boolean()
            .oneOf(
                [true],
                "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
            ),
        profession: yup
            .string()
            .required("Электронная почта обязательна для заполнения"),
        password: yup
            .string()
            .required("Пароль обязателен для заполнения")
            .matches(
                /(?=.*[A-Z])/,
                "Пароль должен содержать хотя бы одну заглавную букву"
            )
            .matches(
                /(?=.*[0-9])/,
                "Пароль должен содержать хотя бы одну цифру"
            )
            .matches(
                /(?=.*[!@#$%^&*])/,
                "Пароль должен содержать один из специальных символов !@#$%^&*"
            )
            .matches(
                /(?=.{8,})/,
                "Пароль должен состоять минимум из 8 символов"
            ),
        email: yup
            .string()
            .required("Электронная почта обязательна для заполнения")
            .email("Email введен некорректно")
    });

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        // const errors = validator(data, validatorConfig);
        // setErrors(errors);
        validateSheme
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));
        return Object.keys(errors).length === 0;
    };

    const noErrors = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label="Выберите вашу профессию"
                value={data.profession}
                onChange={handleChange}
                options={professions}
                defaultOption="Choose...."
                error={errors.profession}
                name="profession"
            />

            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                onChange={handleChange}
                name="sex"
                label="Выберите ваш пол"
            />

            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Выберите ваши качества"
                defaultValue={data.qualities}
            />

            <CheckBoxField
                value={data.licence}
                name="licence"
                onChange={handleChange}
                error={errors.licence}
            >
                {" "}
                Подвтердить <a>лицензионное соглашение</a>
            </CheckBoxField>

            <button
                type="submit"
                disabled={!noErrors}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
