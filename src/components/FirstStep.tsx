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

interface Props {
    handleNext: () => void;
}

const validateSchema = Yup.object({
    firstName: Yup.string()
        .max(15, "First Name field should be less than 15")
        .required("Required"),
    lastName: Yup.string()
        .max(15, "Last Name field should be less than 15")
        .required("Required"),

})
export const FirstStep: React.FC<Props> = ({ handleNext }) => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    console.log(values)
                    handleNext()
                }}
            >
                {({ errors, touched, isValid }) => (
                    <Form>
                        <Grid container>
                            <Grid item xs={12} sm={6}>


                                <Field
                                    as={TextField}
                                    variant="filled"
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    error={errors.firstName && touched.firstName}
                                    helperText={touched.firstName && errors.firstName}


                                />
                            </Grid>
                            <br /><br /><br /><br />
                            <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    variant="filled"
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    error={errors.lastName && touched.lastName}
                                    helperText={touched.lastName && errors.lastName}

                                />
                            </Grid>

                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={ !isValid}
                        >
                            Next
          </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};