import {Formik} from 'formik';

export default function FormProvider({children, onSubmit, initialValues, validationSchema}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {children}
        </Formik>
    );
}