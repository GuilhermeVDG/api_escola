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
  update: {
    body:
      object().shape({
        email: string('INVALID_FORMAT').email('INVALID_EMAIL'),
        name: string('INAVLID_FORMAT').min(3, 'INVALID_NAME').max(30, 'INVALID_NAME'),
        oldPassword: string('INVALID_FORMAT').min(6, 'INVALID_PASSWORD'),
        password: string('INVALID_FORMAT')
          .min(6, 'INVALID_PASSWORD')
          .when('oldPassword', (oldPassword, field) => (oldPassword ? field.required('PASSWORD_IS_MANDATORY') : field)),
      }),
  },
};

export default {
  store: object(schemas.store),
  update: object(schemas.update),
};
