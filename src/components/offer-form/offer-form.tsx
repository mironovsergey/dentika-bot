import type { FC } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import FormTextField from '../form-text-field/form-text-field';
import FormTelField from '../form-tel-field/form-tel-field';
import { useTelegram } from '../../hooks/use-telegram';

type TOfferForm = {
    offerId: number;
};

interface FormValues {
    firstName: string;
    lastName: string;
    middleName: string;
    phone: string;
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Поле обязательно для заполнения'),
    lastName: Yup.string().required('Поле обязательно для заполнения'),
    middleName: Yup.string(),
    phone: Yup.string()
        .matches(/^\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона')
        .required('Поле обязательно для заполнения')
});

const OfferForm: FC<TOfferForm> = ({ offerId }) => {
    const telegramWebApp = useTelegram();

    console.log(telegramWebApp);

    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        middleName: '',
        phone: ''
    };

    const handleSubmit = (values: FormValues) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                (props: FormikProps<FormValues>) => (
                    <Form className="offer-form form">
                        <FormTextField type="text" name="firstName" placeholder="Фамилия" />
                        <FormTextField type="text" name="lastName" placeholder="Имя" />
                        <FormTextField type="text" name="middleName" placeholder="Отчество" />
                        <FormTelField type="text" name="phone" placeholder="Телефон" />
                    </Form>
                )
            }
        </Formik>
    );
};

export default OfferForm;
