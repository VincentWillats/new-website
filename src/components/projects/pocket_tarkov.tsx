import React, { useState } from 'react';
import { css, styled } from '../../stitches.config';

const TarkovWrap = css('div', {
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
    padding: '10px',
});

const TheImage = styled('img', {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',

    variants: {
        maxWidth: {
            default: {
                maxWidth: '700px',
            },
            smaller: {
                maxWidth: '500px',
            },
            smallest: {
                maxWidth: '400px',
            },
        },
    },
});

const ImgBtnWrap = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
});

const animation = css.keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

const ImgBtn = styled('button', {
    backgroundColor: 'grey',
    color: 'gold',
    border: '0',
    borderWidth: '1px',
    borderColor: 'black',
    marginLeft: '1px',
    marginRight: '1px',
    transition: 'all 0.2s',

    ':hover': {
        animation: `${animation} 500ms`,
    },

    ':active': {
        transform: 'translate(2px, 2px)',
    },
});

export const PocketTarkov = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const imgPaths: String[] = [
        '/assets/tarkov01.jpeg',
        '/assets/tarkov02.jpeg',
        '/assets/tarkov03.jpeg',
    ];
    return (
        <div className={TarkovWrap}>
            <TextWrap>
                <h1>Pocket Tarkov</h1>
                <p>
                    Pocket Tarkov is a basic winform application designed to primarily help people
                    with a single monitor, or just just people that want necessary information
                    within a couple of clicks. It provides easy access to mutilple versions of each
                    map, variations of ammo ballistic information, much needed quest information and
                    quest item track sheets.
                </p>
                <p>
                    I built this application with Windows Forms, using Windows API to get the game
                    window information and the low level keyboard hooks for hot keys. Each window
                    has some custom built functions, keep on top, opacity, clickable, window resize
                    and close. With the maps having a scrollable zoom and panning options. I still
                    have some ideas for features to add to this application so it is an on going
                    project.
                </p>
            </TextWrap>
            <ImageWrap>
                <TheImage
                    maxWidth={{
                        initial: 'default',
                        bp1180: 'smaller',
                        bp980: 'smallest',
                        bp880: 'default',
                    }}
                    src={imgPaths[imgIndex].toString()}
                />
                <ImgBtnWrap>
                    {imgPaths.map((_, i) => {
                        return <ImgBtn onClick={() => setImgIndex(i)}>{i + 1}</ImgBtn>;
                    })}
                </ImgBtnWrap>
            </ImageWrap>
        </div>
    );
};
