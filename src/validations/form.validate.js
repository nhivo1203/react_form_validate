import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const today = new Date();
export const schema = Yup.object().shape({
    firstName: Yup.string().required("Họ không được để trống"),
    lastName: Yup.string().required("Tên không được để trống"),
    email: Yup.string().required("Email không được để trống").matches(emailRegExp, "Email không hợp lệ"),
    phone: Yup.string().required("Số điện thoại không được để trống").matches(phoneRegExp, "Số điện thoại không hợp lệ"),
    address: Yup.string().required("Địa chỉ không được để trống"),
    birthday: Yup.date().required("Ngày sinh không được để trống").max(today, "Ngày sinh không hợp lệ"),
    dateBook: Yup.date().required("Ngày đặt không được để trống").min(today, "Ngày đặt không hợp lệ"),
});

export const initialValues = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    address: null,
    birthday: today,
    dateBook: today,
}

