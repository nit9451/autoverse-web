import { development, staging } from './env';

export default (() => {
  switch (process.env.REACT_APP_ENV) {

    case 'dev':
    case 'dev ':
    case 'development':
      return development;

    case 'stag':
    case 'stag ':
    case 'staging':
      return staging;

    case 'prod':
    case 'prod ':
    case 'production':
      return development;

    default:
      return development;
  }
})()