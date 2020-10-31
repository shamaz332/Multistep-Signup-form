import React from 'react';
import { Formik, Form, Field } from 'formik';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import * as Yup from 'yup';


interface FormSecondStep {
    email: String;
    address: String;

}

const initialValues: FormSecondStep = {
    email: "",
    address: ""

}

interface Props {
    handleNext: () => void;
}

const validateSchema = Yup.object({
    email: Yup.string().email("Email is invalid")
        .required("Required"),
    address: Yup.string()
        .max(30, "Address field should be less than 30")
        .min(5, "Address field should be more than 5")

        .required("Required"),

})
export const SecondStep: React.FC<Props> = ({ handleNext }) => {
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
                                    label="Email"
                                    name="email"
                                    type="email"
                                    error={errors.email && touched.email}
                                    helperText={touched.email && errors.email}


                                />
                            </Grid>
                            <br /><br /><br /><br />
                            <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    variant="filled"
                                    label="Address"
                                    name="address"
                                    type="text"
                                    error={errors.address && touched.address}
                                    helperText={touched.address && errors.address}

                                />
                            </Grid>

                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={!isValid}
                        >
                            Next
          </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};