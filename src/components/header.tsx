import React from 'react';
import { styled } from '../stitches.config';

export interface HeaderProps {
    header: string;
    subheader: string;
}

export const Header = ({ header, subheader }: HeaderProps) => {
    return (
        <HeaderWrap size={{ initial: 'default', bp880: 'small', bp540: 'smallest' }}>
            <h1>{header}</h1>
            <p>{subheader}</p>
        </HeaderWrap>
    );
};

const HeaderWrap = styled('div', {
    width: '90%',
    height: 'auto',

    textAlign: 'center',
    padding: '10px 0',

    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    marginBottom: '20px',

    backgroundColor: '$main',
    borderRadius: '2px',
    borderColor: '$main',
    boxShadow: '0px 0px 15px 15px $main',

    h1: {
        borderRadius: '2px',

        marginTop: '0px',
        marginBottom: '0px',
        fontSize: '58px',
        fontStyle: 'normal',
    },
    p: {
        borderRadius: '2px',

        marginTop: '0px',
        marginBottom: '0px',
        fontSize: '12px',
    },

    variants: {
        size: {
            default: {
                h1: {
                    fontSize: '58px',
                },
            },
            small: {
                h1: {
                    fontSize: '44px',
                },
            },
            smallest: {
                h1: {
                    fontSize: '28px',
                },
            },
        },
    },
});
