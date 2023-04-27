import type { FC } from 'react';
import type { TFormField } from '../../utils/types';
import { useField } from 'formik';
import InputMask from 'react-input-mask';

const FormTelField: FC<TFormField> = (props) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    let classNames = 'form-field';

    if (hasError) {
        classNames += ' has-error';
    }

    return (
        <div className={classNames}>
            <InputMask className="form-control" mask="+7 (999) 999-99-99" {...field} {...props} />
            {
                hasError ? (
                    <div className="form-error">{meta.error}</div>
                ) : null
            }
        </div>
    );
};

export default FormTelField;
