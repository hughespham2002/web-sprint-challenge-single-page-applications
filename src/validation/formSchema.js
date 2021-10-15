import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required ya chump!')
        .min(3, 'Username must be 3 or more characters long ya chump!'),
    size: yup
        .string()
        .oneOf(['S', 'M', 'L', 'XL'], 'Role is required!'),
    sauce: yup
        .string()
        .oneOf(['Tomato', 'BBQ', 'GR', 'SA'], 'Civil status is required!'),

    pinapple: yup.boolean(),
    anchovies: yup.boolean(),
    broccoli: yup.boolean(),
    artichokes: yup.boolean(),
    eggplant: yup.boolean(),
    specialInstructions: yup
        .string()
        .trim()
});

export default schema;