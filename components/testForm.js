import styled from '@emotion/styled'

import { Formik } from 'formik'
import * as Yup from 'yup'

import {
    FormLabel,
    Input,
    Button,
    Box,
    FormErrorMessage,
    ButtonGroup,
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
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {formik => (
                <Box 
                    as='form' 
                    onSubmit={formik.handleSubmit}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    mt={150}
                >
                    <FormControl isInvalid={formik.errors.name && formik.errors.email && formik.errors.message }>

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
                                <StyledButton active={active === type ? true : false } onClick={() => setActive(type)} key={type}>{type}</StyledButton>
                            ))}
                        </ButtonGroup>

                        <FormLabel htmlFor='message' ></FormLabel>
                        <Textarea rows={5} placeholder='Deine Nachricht' />        
                        
                    </FormControl>
            
                <Button as='button' type='submit' colorScheme='teal' my={6} >Submit</Button>
            </Box>
            )}      
        </Formik>
    )
}

export default Form;