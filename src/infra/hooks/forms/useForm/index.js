import { useState, useEffect } from 'react';

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner.reduce((errorAcc, currentError) => {
    const fieldName = currentError.path;
    const errorMessage = currentError.message;
    return {
      ...errorAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}
// criando o proprop hook personalizado
export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setIsFormDisabled(false);
      setErrors({});
    } catch (err) {
      const formatedErrors = formatErrors(err.inner);
      setErrors(formatedErrors);
      setIsFormDisabled(true);
    }
  }

  useEffect(() => {
    validateValues(values);
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const { value } = event.target;
      const fildName = event.target.getAttribute('name');
      setValues((currentValues) => (
        {
          ...currentValues,
          [fildName]: value,
        }
      ));
    },
    // validação de form
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touchedFields,
    handleBlur(event) {
      const fildName = event.target.getAttribute('name');
      setTouchedFields({
        ...touchedFields,
        [fildName]: true,
      });
    },
  };
}
