import styled from '@emotion/styled'

import { Formik } from 'formik'
import * as Yup from 'yup'

import {
    FormLabel,
    Input,
    Button,
    ButtonGroup,
    Box,
    FormErrorMessage,
    FormControl,
    Textarea
} from '@chakra-ui/react'
import { useState } from 'react'

const StyledButton = styled(Button) `
    background: transparent;
    ${({active}) => 
        active && ` 
            background: white;
            color: black
        `
    }
`
const Form = () => {

    const types = ["Web Design", "Web Development", "Sonstiges"]

    const [ active, setActive ] = useState(types[null]);

    return (  
        <Formik
            initialValues= {{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
            
            validationSchema = {Yup.object({
                name: Yup.string()
                .min(3, 'mindestens 3 Zeichen eingeben')
                .max(70, 'maximale Länge beträgt 70 zeichen')
                .required('Required'),
                email: Yup.string().email('Ungültiges Format')
                .required('Required'),
                phone: Yup.string(),
                message: Yup.string().required('Required')
                .min(5, 'Mindestens 5 Zeichen eingeben!')
            })}
            onSubmit={ async (values, actions) => {
                
                await fetch('/api/contact', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(values)
                }).then((res) => {
                  actions.setSubmitting(false)
                  console.log('Response received')
                  if(res.status === 200) {
                    console.log('Response succeeded!')
                  } else { console.log('Response failed') }
                })
            }}
        >
            {(formik) => (
                <form 
                    as='form' 
                    onSubmit={formik.handleSubmit}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    mt={150}
                >
                    <FormControl>

                        <FormLabel htmlFor='name'></FormLabel>
                        <Input variant='outline' size='lg' id='name' name='name' placeholder='Dein Name' type='text' value={formik.values.name} onChange={formik.handleChange}/>
                        {formik.touched.name && formik.errors.name ? <FormErrorMessage>{formik.errors.name}</FormErrorMessage> : null}

                        <FormLabel htmlFor='email'></FormLabel>
                        <Input variant='outline' size='lg' name='email' type='email' placeholder='Deine Email Adresse' value={formik.values.email} onChange={formik.handleChange} />
                        {formik.touched.email && formik.errors.email ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null}

                        <FormLabel htmlFor='phone'></FormLabel>
                        <Input variant='outline' size='lg' name='phone' type='text' placeholder='Deine Handynummer' value={formik.values.phone} onChange={formik.handleChange} />
                        
                        <ButtonGroup display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' my={10} variant='outline' >
                            {types.map((type) => (
                                <StyledButton active={active === type} onClick={() => setActive(type)} key={type}>{type}</StyledButton>
                            ))}
                        </ButtonGroup>

                        <FormLabel htmlFor='message' ></FormLabel>
                        <Textarea size='lg' rows={5} placeholder='Deine Nachricht' />        
                        
                    </FormControl>
            
                <Button type='submit' isLoading={formik.isSubmitting} colorScheme='teal' my={6}>Submit</Button>
            </form>
            )}      
        </Formik>
    )
}

export default Form;