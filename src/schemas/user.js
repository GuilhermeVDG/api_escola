import { string, object } from 'yup';

const schemas = {
  store: {
    body:
      object().shape({
        email: string('INVALID_FORMAT').required('EMAIL_IS_MANDATORY').email('INVALID_EMAIL'),
        name: string('INAVLID_FORMAT').required('NAME_IS_MANDATORY').min(3, 'INVALID_NAME').max(30, 'INVALID_NAME'),
        password: string('INVALID_FORMAT').required('PASSWORD_IS_MANDATORY').min(6, 'INVALID_PASSWORD'),
      }).noUnknown(),
  },
};

export default {
  store: object(schemas.store),
};
