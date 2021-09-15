import { useState } from 'react';
// criando o proprop hook personalizado
export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);
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
  };
}
