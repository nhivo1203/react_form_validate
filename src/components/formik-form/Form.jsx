import * as Yup from "yup";
import FormProvider from "./FormProvider";
// bootstrap
import {Row, Col, Form, Button} from "react-bootstrap";
import CardForm from "../Card";
import {schema, initialValues} from "../../validations/form.validate";

// ----------------------------------------------------------------------

export default function FormFormik() {



    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 4));
    }

    return (
        <FormProvider validationSchema={schema} initialValues={initialValues} onSubmit={onSubmit}>
            {
                (formik) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty
                    } = formik;
                    return (
                        <CardForm title='Formik Form'>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Form.Group>
                                            <Form.Label>Họ</Form.Label>
                                            <Form.Control
                                                type='text'
                                                name='firstName'
                                                placeholder='Nhập họ'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.firstName}
                                                isInvalid={!!errors.firstName && touched.firstName}
                                                isValid={touched.firstName && !errors.firstName}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.firstName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Form.Group>
                                            <Form.Label>Tên</Form.Label>
                                            <Form.Control
                                                type='text'
                                                name='lastName'
                                                placeholder='Nhập tên'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastName}
                                                isInvalid={!!errors.lastName && touched.lastName}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.lastName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type='text'
                                                name='email'
                                                placeholder='Nhập email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                isInvalid={!!errors.email && touched.email}
                                                isValid={touched.email && !errors.email}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Form.Group>
                                            <Form.Label>Số điện thoại</Form.Label>
                                            <Form.Control
                                                type='text'
                                                name='phone'
                                                placeholder='Nhập số điện thoại'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                isInvalid={!!errors.phone && touched.phone}
                                                isValid={touched.phone && !errors.phone}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.phone}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Form.Group>
                                            <Form.Label>Địa chỉ</Form.Label>
                                            <Form.Control
                                                type='text'
                                                name='address'
                                                placeholder='Nhập địa chỉ'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}
                                                isInvalid={!!errors.address && touched.address}
                                                isValid={touched.address && !errors.address}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.address}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Form.Group>
                                            <Form.Label>Ngày sinh</Form.Label>
                                            <Form.Control
                                                type='date'
                                                name='birthday'
                                                placeholder='Nhập ngày sinh'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.birthday}
                                                isInvalid={!!errors.birthday && touched.birthday}
                                                isValid={touched.birthday && !errors.birthday}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.birthday}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Form.Group>
                                            <Form.Label>Ngày đặt</Form.Label>
                                            <Form.Control
                                                type='date'
                                                name='dateBook'
                                                placeholder='Nhập ngày đặt'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.dateBook}
                                                isInvalid={!!errors.dateBook && touched.dateBook}
                                                isValid={touched.dateBook && !errors.dateBook}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.dateBook}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button className="mt-3 w-100 btn btn-primary" type='submit' disabled={!(isValid && dirty)}>
                                    Xác nhận
                                </Button>
                            </Form>
                        </CardForm>
                    )
                }}
        </FormProvider>
    )
}