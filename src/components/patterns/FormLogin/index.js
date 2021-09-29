import React from 'react';
import { useRouter } from 'next/dist/client/router';
import * as yup from 'yup';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { loginService } from '../../../service/login/loginServie';
import { Button } from '../../common/Button';
import TextField from '../../forms/TextFild';

const loginSchema = yup.object().shape({
  usuario: yup.string().required('"O usuario é obrigatorio"').min(3, 'usuario precisa ter o minimo de 3 caracteres'),
  senha: yup.string()
    .min(8, 'Você precisa ter uma senha de 8 caracteres')
    .required('"A senha é obrigatoria"'),
});

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      // alert(values);
      // chamando p sevice login da hook personalizado
      loginService.login({
        username: values.usuario,
        password: values.senha,
      }).then(() => {
        router.push('/app/profile');
      }).catch((err) => {
        console.error(err);
      }).finally(() => {
        form.setIsFormDisabled(false);
      });
    },

    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touchedFields.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touchedFields.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
}
