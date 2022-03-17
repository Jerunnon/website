import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GriItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center" >
        <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} className="gridItem-thumbnail" loading="lazy" />
            <LinkOverlay>
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
);

export const GridItemStyle = () => (
    <Global
      styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
  );