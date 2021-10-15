import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['S', 'M', 'L', 'XL'], 'Size is required!'),
    sauce: yup
        .string()
        .oneOf(['Tomato', 'BBQ', 'GR', 'SA'], 'Size is required!'),

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