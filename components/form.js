import { useState } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button, 
  ButtonGroup,
  useColorModeValue,
  Textarea
} from '@chakra-ui/react'

function Form() {

  // let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  // const matchMail = input.match(regex)

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ option, setOption ] = useState('')
  const [message, setMessage ] = useState('') 

  const handleSubmit = (e) => {
    e.preventDefault()
  
    let data = {
      name,
      email,
      phone,
      option,
      message
    }
  
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
          console.log('Response received')
          console.log(data)
          if (res.status === 200) {
              console.log('Response succeeded!')
              setName('')
              setEmail('')
              setPhone('')
              setOption('')
              setMessage('')
          }
      })
  }
    
    return (
      <Box as='form' mt={150} display='flex' flexDirection='column'justifyContent='center' alignItems='center' > 
    
        <FormControl isRequired>
          <FormLabel htmlFor="name"></FormLabel>
          <Input id="name" name="name" type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder="Dein Name" />
        </FormControl>
    
        <FormControl isRequired>
          <FormLabel htmlFor="email"></FormLabel>
          <Input id="email" name="email" type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Deine Email Adresse" />
        </FormControl>
    
        <FormControl>
          <FormLabel htmlFor="phone"></FormLabel>
          <Input id="phone" name="phone" type='text' onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Deine Handynummer" />
        </FormControl>
    
        <ButtonGroup display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' my={10} variant='outline' >
          <Button colorScheme={useColorModeValue('teal', 'white' )} onClick={() => setOption('Web Design')} _hover={{backgroundColor: 'white', color: 'black'}} >Web Design</Button>
          <Button colorScheme={useColorModeValue('teal', 'white' )} onClick={() => setOption('Web Development')} _hover={{backgroundColor: 'white', color: 'black'}} >Web Development</Button>
          <Button colorScheme={useColorModeValue('teal', 'white' )} onClick={() => setOption('Sonstiges')} _hover={{backgroundColor: 'white', color: 'black'}} >Sonstiges</Button>
        </ButtonGroup>
    
        <FormControl isRequired>
          <FormLabel htmlFor="message"></FormLabel>
          <Textarea id="message" name="message" rows={5} type="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Deine Nachricht" />
        </FormControl>
    
        <Button type="submit" id="submitButton" colorScheme={'teal'} onClick={(e) => {handleSubmit(e)}} >Submit</Button>
    
      </Box>
    )
  }

export default Form;