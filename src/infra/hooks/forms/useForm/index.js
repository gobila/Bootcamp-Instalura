import { useState, useEffect } from 'react';
// criando o proprop hook personalizado
export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormDisabled(false);
        setErrors({});
      })
      .catch((err) => {
        const formatedErrors = err.inner.reduce((errorAcc, currentError) => {
          const fieldName = currentError.path;
          const errorMessage = currentError.message;
          return {
            ...errorAcc,
            [fieldName]: errorMessage,
          };
        }, {});
        setErrors(formatedErrors);
        setIsFormDisabled(true);
      });
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
