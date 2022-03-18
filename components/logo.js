import Link from 'next/link'
import styled from '@emotion/styled'

import { Text, useColorModeValue } from '@chakra-ui/react'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: 200ms ease;
    }

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const Image = "/images/Rocketbelt.png"

    return (
        <Link href='/' className='Link'>
           <a>
               <LogoBox>
                    <img src={Image} width='20px' height='20px' alt='Logo' />
                    <Text
                     color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                     fontFamily='Fedora, sans-serif'
                     fontWeight='bold'
                     ml={3}
                    >
                       Simon Klein
                    </Text>
                </LogoBox>
           </a>
        </Link>
    )
}

export default Logo;

