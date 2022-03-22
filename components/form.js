import { Formik, Form, Field } from 'formik'
import SendIcon from './layouts/sendIcon'

import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input,
    Button,
    Heading,
    Container,
    ButtonGroup,
    Textarea,
    useColorModeValue,
    } from '@chakra-ui/react'


function FormikExample() {
    function validateName(value) {
        let error
        if (!value) {
          error = 'Name is required'
        } 
        return error;
      }
  
      function validateEmail(value) {
          let error 
          if (!value.email) {
  
              error = 'Required';
         
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
         
              error = 'Invalid email address';
         
            }

            return error;
      }

      function validatePhone(value) {
          let error
        if(value.phone) {
            const regPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(value.phone)
            if (!regPhone) {
                error = 'Invalid Phone Number'
            }
        }

        return error;
    }

    function validateText(value) {
        let error
        if (!value.text) {
            error = 'Required'
        }

        return error;
    }
  
    return (
      <Box mt={150}>
          <Formik
            initialValues={{ name: '', email: '', phone: '', text: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {(props) => (
              <Form>
                <Field name='name' validate={validateName}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'></FormLabel>
                      <Input {...field} id='name' placeholder='Dein Name' type='text' css={{border: `.2px solid ${useColorModeValue('grey', 'white')}`}} height={55} />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email' validate={validateEmail}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email} my={6}>
                      <FormLabel htmlFor='email'></FormLabel>
                      <Input {...field} id='email' placeholder='Deine Email Adresse' type="email" css={{border: `.2px solid ${useColorModeValue('grey', 'white')}`}} height={55} />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='phone' validate={validatePhone}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                      <FormLabel htmlFor='phone'></FormLabel>
                      <Input {...field} id='phone' placeholder='Deine Telefonnumer' type="tel" css={{border: `.2px solid ${useColorModeValue('grey', 'white')}`}} height={55} />
                      <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Container display='flex' flexDirection='column' justifyContent='flex-start' maxW='100%' my={6} mx={0} p={0}>
                    <Heading as="h1" fontSize={24}>Serivces</Heading>
                    <Box display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center'>
                        <ButtonGroup>
                            <Button variant='outline' colorScheme={useColorModeValue('teal', 'white')}>Web Design</Button>
                            <Button variant='outline' colorScheme={useColorModeValue('teal', 'white')}>Web Development</Button>
                            <Button variant='outline' colorScheme={useColorModeValue('teal', 'white')}>Andere</Button>
                        </ButtonGroup>
                    </Box>
                </Container>
                <Field name='text' validate={validateText}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.text && form.touched.text}>
                      <FormLabel htmlFor='text'></FormLabel>
                      <Textarea {...field} id='text' placeholder='Deine Nachricht' type="text" css={{border: `.2px solid ${useColorModeValue('grey', 'white')}`}} rows={10}/>
                      <FormErrorMessage>{form.errors.text}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  my={4}
                  colorScheme='teal'
                  color='white'
                  isLoading={props.isSubmitting}
                  type='submit'
                  rightIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
      </Box>
    )
  }

  export default FormikExample