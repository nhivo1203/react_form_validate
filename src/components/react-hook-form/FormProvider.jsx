import PropTypes from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';
// bootstrap
import {Form as FormBootstrap} from 'react-bootstrap';

// ----------------------------------------------------------------------

FormProvider.propTypes = {
    children: PropTypes.node,
    methods: PropTypes.object,
    onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods }) {
    return (
        <Form {...methods}>
            <FormBootstrap method='post' onSubmit={onSubmit}>
                {children}
            </FormBootstrap>
        </Form>
    );
}
