import { string, object } from 'yup';

const schemas = {
  login: {
    body:
      object().shape({
        email: string('INVALID_FORMAT').required('EMAIL_IS_MANDATORY').email('INVALID_EMAIL'),
        password: string('INVALID_FORMAT').required('PASSWORD_IS_MANDATORY').min(6, 'INVALID_PASSWORD'),
      }).noUnknown(),
  },
};

export default {
  login: object(schemas.login),
};
