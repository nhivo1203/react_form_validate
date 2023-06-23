import PropTypes from 'prop-types'
import {Button as ButtonBootstrap} from 'react-bootstrap'

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default function Button({label, type, variant, size, className, onClick}) {
    return (
        <ButtonBootstrap
            type={type}
            variant={variant}
            size={size}
            className={className}
            onClick={onClick}
        >
            {label}
        </ButtonBootstrap>
    )
}