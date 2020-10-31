import React from 'react';
import { Formik, Form, Field } from 'formik';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import * as Yup from 'yup';


interface FormFirstStep {
    firstName: String;
    lastName: String;

}

const initialValues: FormFirstStep = {
    firstName: "",
    lastName: ""

}


const validateSchema = Yup.object({
    firsrName: Yup.string()
        .max(15, "First Name field should be less than 15"),
    lastName: Yup.number()
        .max(15, "Last Name field should be less than 15"),

})
export const FirstStep = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={(values) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));

                }, 400);
            }}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} sm={6}>


                            <Field
                                as={TextField}
                                variant="filled"
                                label="First Name"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}


                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Field
                                as={TextField}
                                variant="filled"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}

                            />
                        </Grid>

                    </Grid>

                </Form>
            )}
        </Formik>
    );
};