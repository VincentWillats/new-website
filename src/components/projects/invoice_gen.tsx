import React from 'react';
import { css, styled } from '../../stitches.config';

const InvoiceWrap = css('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
});

const TextWrap = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '10px',
    flex: '1',
    maxWidth: '460px',

    h1: {
        textAlign: 'center',
    },

    p: {
        padding: '10px',
        margin: '5px',
        width: '100%',
        maxWidth: '100%',
        borderRadius: '10px',
        alignSelf: 'stretch',
    },
});

const ImageWrap = styled('img', {
    minWidth: '300px',
    maxWidth: '500px',
    flex: '1',
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
});

export const InvoiceGen = () => {
    return (
        <div className={InvoiceWrap}>
            <ImageWrap src={'/assets/invoiceGenerator.jpg'} />
            <TextWrap>
                <p>
                    This is a Windows Form application that takes the information you provide and
                    exports it as an invoice in .pdf and .xlsx format. I built this application for
                    myself early on in my career as a developer for when I needed to make multiple
                    invoices quickly, and it has saved me many numerous hours.
                </p>
                <p>
                    Looking back on this project I would a couple of things differently as I have
                    gained a lot of knowledge since. But as a application that works and I still use
                    regularly I am happy to display it as an example of how I can build logical
                    soluitions to help myself save time.
                </p>
            </TextWrap>
        </div>
    );
};
