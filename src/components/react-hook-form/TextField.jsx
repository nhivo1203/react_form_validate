import PropTypes from 'prop-types';
import {Controller} from 'react-hook-form';
import {Form} from 'react-bootstrap';

TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    control: PropTypes.object,
    error: PropTypes.object,
}

export default function TextField({label, name, placeholder, control, error}) {
    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <Form.Group>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={placeholder}
                        isValid={!error}
                        isInvalid={!!error}
                        {...field}
                    />
                    <Form.Text className="text-danger">
                        {error && error.message}
                    </Form.Text>
                </Form.Group>
            )}
        />
    )
}