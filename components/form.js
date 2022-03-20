import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input
} from '@chakra-ui/react'

function Form () {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
            <FormControl>
                <FormLabel htmlFor='name'>Dein Name</FormLabel>
                <Input id="name" type="text" />
                <FormHelperText>Gib bitte deinen vollständigen Namen an</FormHelperText>

                <FormLabel htmlFor='email'>Deine Email</FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>Über welche Email Addresse kann ich dich erreichen?</FormHelperText>

                <FormLabel htmlFor='phone'>Deine Telefonnummer</FormLabel>
                <Input id="phone"  type='tel' />
                <FormHelperText>Über welche Nummer kann ich dich erreichen?</FormHelperText>

                <FormLabel htmlFor='message'>Deine Nachricht</FormLabel>
                <Input id="message" type="text" />
                <FormHelperText>Wie kann ich dir behilflich sein?</FormHelperText>
            </FormControl>
        </Box>
    )
   
}

export default Form;