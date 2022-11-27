import { string, object, number } from 'yup';

const schemas = {
  store: {
    body:
      object().shape({
        email: string('INVALID_FORMAT').required('EMAIL_IS_MANDATORY').email('INVALID_EMAIL'),
        name: string('INAVLID_FORMAT').required('NAME_IS_MANDATORY').min(3, 'INVALID_NAME').max(20, 'INVALID_NAME'),
        surname: string('INVALID_FORMAT').required('SURNAME_IS_MANDATORY').min(3, 'INVALID_NAME').max(20, 'INVALID_NAME'),
        age: number('INVALID_FORMAT').required('AGE_IS_MANDATORY'),
      }).noUnknown(),
  },
  find: {
    params:
      object().shape({
        id: number('INVALID_FORMAT').required('ID_IS_MANDATORY'),
      }).noUnknown(),
  },
  update: {
    body:
      object().shape({
        email: string('INVALID_FORMAT').email('INVALID_EMAIL'),
        name: string('INAVLID_FORMAT').min(3, 'INVALID_NAME').max(20, 'INVALID_NAME'),
        surname: string('INVALID_FORMAT').min(3, 'INVALID_NAME').max(20, 'INVALID_NAME'),
        age: number('INVALID_FORMAT'),
      }).noUnknown(),
  },
};

export default {
  store: object(schemas.store),
  detail: object(schemas.find),
  update: object(schemas.update),
  delete: object(schemas.find),
};
