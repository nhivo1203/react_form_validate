import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormProvider from "./FormProvider";
// bootstrap
import {Col, Row} from "react-bootstrap";
import Button from "./Button";
import TextField from "./TextField";
import DatePicker from "./DatePicker";
import CardForm from "../Card";
import {schema, initialValues} from "../../validations/form.validate";
// ----------------------------------------------------------------------

export default function FormHook() {
    const methods = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(schema),
    });

    const {
        control,
        setError,
        handleSubmit,
        formState: {errors},
    } = methods;

    const onSubmit = (data) => {
        try {
            alert(JSON.stringify(data, null, 4));
        } catch (error) {
            setError('afterSubmit', {
                ...error,
                message: error.message,
            });
        }
    }

    return (
        <CardForm title='React Hook Form'>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col xs={12} md={6}>
                        <TextField
                            name="firstName"
                            label="Họ"
                            placeholder="Nhập họ"
                            control={control}
                            error={errors.firstName}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField
                            name="lastName"
                            label="Tên"
                            placeholder="Nhập tên"
                            control={control}
                            error={errors.lastName}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <TextField
                            name="email"
                            label="Email"
                            placeholder="Nhập email"
                            control={control}
                            error={errors.email}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <TextField
                            name="phone"
                            label="Số điện thoại"
                            placeholder="Nhập số điện thoại"
                            control={control}
                            error={errors.phone}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <TextField
                            name="address"
                            label="Địa chỉ"
                            placeholder="Nhập địa chỉ"
                            control={control}
                            error={errors.address}
                        />
                    </Col>
                    {/*  datepicker  */}
                    <Col xs={12} md={12}>
                        <DatePicker
                            name="dateBirth"
                            label="Ngày sinh"
                            placeholder="Nhập ngày sinh"
                            control={control}
                            error={errors.dateBirth}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <DatePicker
                            name="dateBook"
                            label="Ngày đặt"
                            placeholder="Nhập ngày đặt"
                            control={control}
                            error={errors.dateBook}
                        />
                    </Col>
                </Row>
                <Button
                    label={errors.afterSubmit ? errors.afterSubmit.message : 'Xác nhận'}
                    type="submit"
                    variant="primary"
                    size={'sm'}
                    className={`mt-3 w-100 ${errors.afterSubmit ? 'is-invalid' : ''}`}
                >
                    Xác nhận
                </Button>
            </FormProvider>
        </CardForm>
    )
}