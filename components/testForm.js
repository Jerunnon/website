import { Box, FormErrorMessage, FormLabel, Input, Button, ButtonGroup, useColorModeValue, Textarea } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from 'yup'
import { useState } from "react"

const ContactForm = () => {

    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validationSchema={Yup.object({
                name: Yup.string().max(100, 'Maximale länge beträgt 100 Zeichen').required('Required'),
                email: Yup.string().email('Ungültige Email Adresse').required('Required'),
                phone: Yup.string().max(30, 'Maximale Länge beträgt 30 Zeichen'),
                option: Yup.string().required('Required'),
                message: Yup.string().max(500, 'Maximale Länge beträgt 500 Zeichen').required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setLoading(true)
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                    }).then((res) => {
                        console.log('Response received')
                        console.log(data)
                        if (res.status === 200) {
                            console.log('Response succeeded!')  
                            setSubmitting(false)
                        }
                  })
               
            }}
            >

            {({ isSubmitting, handleSubmit, errors, touched, getFieldProps }) => (
                <Box mt={150} display='flex' flexDirection='column'justifyContent='center' alignItems='center' >

                    <FormLabel htmlFor="name"></FormLabel>
                    <Input id="name" name="name" type='text' {...getFieldProps('name')} placeholder="Dein Name" />
                    {touched.name && errors.name ? (<FormErrorMessage>{errors.name}</FormErrorMessage>) : undefined }

                    <FormLabel htmlFor="email"></FormLabel>
                    <Input id="email" name="email" type='email' {...getFieldProps('email')} placeholder="Deine Email Adresse" />
                    {touched.email && errors.email ? (<FormErrorMessage>{errors.email}</FormErrorMessage>) : undefined }

                    <FormLabel htmlFor="phone"></FormLabel>
                    <Input id="phone" name="phone" type='text' {...getFieldProps('phone')} placeholder="Deine Handynummer" />
                    {touched.phone && errors.phone ? (<FormErrorMessage>{errors.phone}</FormErrorMessage>) : undefined }

                    <ButtonGroup role='group' display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' my={10} variant='outline' >
                        <Button colorScheme={useColorModeValue('teal', 'white' )} _hover={{backgroundColor: 'white', color: 'black'}} >Web Design</Button>
                        <Button colorScheme={useColorModeValue('teal', 'white' )} _hover={{backgroundColor: 'white', color: 'black'}} >Web Development</Button>
                        <Button colorScheme={useColorModeValue('teal', 'white' )} _hover={{backgroundColor: 'white', color: 'black'}} >Sonstiges</Button>
                    </ButtonGroup>

                    <FormLabel htmlFor="message"></FormLabel>
                    <Textarea id="message" name="message" rows={5} type="text" {...getFieldProps('message')} placeholder="Deine Nachricht" />

                    <Button type="submit" isLoading={isSubmitting} loadingText='Submitting' id="submitButton" colorScheme={'teal'}>Submit</Button>

                </Box>
            )}

        </Formik>
    )
}

export default ContactForm;