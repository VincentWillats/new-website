import React, { useState } from 'react';
import { css, styled } from '../../stitches.config';
import { ImgButtons } from '../img_buttons';

const WaplWrap = css('div', {
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

const ImageWrap = styled('div', {
    display: 'flex',
    flexDirection: 'column',
});

const TheImage = styled('img', {
    width: 'auto',
    height: 'auto',
    maxHeight: '500px',
    borderRadius: '10px',
});

export const Wapl = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const imgPaths: String[] = [
        '/assets/waplApp01.png',
        '/assets/waplApp02.png',
        '/assets/waplApp03.png',
        '/assets/waplApp04.png',
        '/assets/waplApp05.png',
    ];
    return (
        <div className={WaplWrap}>
            <TextWrap>
                <h1>Western Australia Poker League Mobile App</h1>
                <p>
                    This is a mobile application to provide information about upcoming and previous
                    events held by Western Australian Poker League. Overall it is a simple
                    application with a clean layout, swipe navigation functionality and push
                    notifcations.
                </p>
                <p>
                    I built this application using Xamarin and Azure services. It was my first full
                    mobile application, and I learnt a lot including how to use Azure services to
                    build an API webapp to access the database data, how to build a notification
                    backend to register devices for push notification via Azure Notifcation Hub, how
                    to design and build using MVVM design pattern and much more. This project is
                    still being worked on with the next step being getting it ready for iOS
                    publishing.
                </p>
            </TextWrap>
            <ImageWrap>
                <TheImage src={imgPaths[imgIndex].toString()} />
                <ImgButtons
                    listLength={imgPaths.length}
                    selectedIndex={imgIndex}
                    setIndex={setImgIndex}
                />
            </ImageWrap>
        </div>
    );
};
