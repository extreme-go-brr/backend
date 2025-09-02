import { Provider } from "react-redux";

export default ({ env }) => ({
  upload: {
    config: {
    },
  },
  'users-permissions': {
    enabled: true, 
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
});