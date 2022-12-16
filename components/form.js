import styled from "@emotion/styled";

import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  FormLabel,
  Input,
  Button,
  ButtonGroup,
  Box,
  Textarea,
  Image,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

import Section from "./section";

const StyledButton = styled(Button)`
  background: transparent;
  ${({ active }) =>
    active &&
    ` 
            background: white;
            color: black
        `}
`;

const ErrorMessage = styled.div`
  color: #f56565;
  padding: 0.5rem;
  align-self: start;
`;

const Form = () => {
  const types = ["Web Design", "Web Development", "Sonstiges"];

  const [active, setActive] = useState(types[null]);
  const [sended, setSended] = useState(false);
  const cm = useColorMode();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          option: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "mindestens 3 Zeichen eingeben")
            .max(70, "maximale Länge beträgt 70 zeichen")
            .required("Required"),
          email: Yup.string().email("Ungültiges Format").required("Required"),
          phone: Yup.string(),
          message: Yup.string()
            .min(5, "Mindestens 5 Zeichen eingeben!")
            .required("Required"),
        })}
        onSubmit={async (values, actions) => {
          console.log(values);

          await fetch("/api/contact", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }).then((res) => {
            actions.setSubmitting(false);
            console.log("Response received");
            if (res.status === 200) {
              setSended(true);
              console.log("Response succeeded!");
            } else {
              console.log("Response failed");
            }
          });
        }}
      >
        {(formik) => (
          <>
            <Section delay={0.1} className="test">
              <Box
                as="form"
                onSubmit={formik.handleSubmit}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={150}
                display={!sended ? "flex" : "none"}
                className="test"
              >
                <FormLabel htmlFor="name"></FormLabel>
                <Input
                  variant="outline"
                  size="lg"
                  id="name"
                  name="name"
                  placeholder="Dein Name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                  <ErrorMessage>{formik.errors.name}</ErrorMessage>
                ) : null}
                <FormLabel htmlFor="email"></FormLabel>
                <Input
                  variant="outline"
                  size="lg"
                  name="email"
                  type="email"
                  placeholder="Deine Email Adresse"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <ErrorMessage>{formik.errors.email}</ErrorMessage>
                ) : null}
                <FormLabel htmlFor="phone"></FormLabel>
                <Input
                  variant="outline"
                  size="lg"
                  name="phone"
                  type="text"
                  placeholder="Deine Handynummer"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />

                <ButtonGroup
                  display="flex"
                  flexDirection={{base: "column", sm: "row"}}
                  justifyContent="center"
                  gap="10px"
                  my={10}
                  variant="outline"
                  width={{base: "100%", md: "unset"}}
                >
                  {types.map((type) => (
                    <StyledButton
                      active={active === type ? true : false}
                      marginInlineStart="0px !important"
                      onClick={() => {
                        setActive(type), (formik.values.option = type);
                      }}
                      key={type}
                    >
                      {type}
                    </StyledButton>
                  ))}
                </ButtonGroup>
                <FormLabel htmlFor="message"></FormLabel>
                <Field as={Textarea} rows={5} name="message" placeholder="Deine Nachricht"/>
                {formik.touched.message && formik.errors.message ? (
                  <ErrorMessage>{formik.errors.message}</ErrorMessage>
                ) : null}

                <Button
                  type="submit"
                  isLoading={formik.isSubmitting}
                  loadingText="Sende Mail"
                  colorScheme="teal"
                  my={6}
                >
                  Submit
                </Button>
              </Box>
            </Section>
          </>
        )}
      </Formik>

      <Section delay={0.1}>
        <Box visibility={sended ? "visible" : "hidden"} mt='9rem' display='flex' flexDirection='column' alignItems='center' >
          {cm.colorMode === 'dark' ? <Image src='/images/sendedIcon_darkTheme.png' alt="letter icon with check" /> : <Image src='/images/sendedIcon_lightTheme.png' alt="letter icon with check"/>}
          <Heading as="h1">Ihre Mail wurde erfolgreich versendet</Heading>
          <p>Ich werde mich so schnell wie möglich um ihre Anfrage kümmern!</p>
        </Box>
      </Section>
    </>
  );
};

export default Form;
