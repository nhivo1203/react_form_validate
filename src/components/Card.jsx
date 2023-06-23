import PropTypes from 'prop-types';

import {Card} from 'react-bootstrap';

CardForm.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default function CardForm({title, children}) {
    return (
        <Card
            className='mx-3 mt-n5 shadow-lg card-birthday-form p-4 mt-5'
        >
            <Card.Body>
                <h4 className='mb-3 text-primary text-uppercase'>
                    <Card.Title>
                        {title}
                    </Card.Title>
                </h4>
                {children}
            </Card.Body>
        </Card>
    );
}