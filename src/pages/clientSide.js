import React, { useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image"

const PageWithClientSide = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        const getDogImage = async () => {
            const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
            const image = await res.json();
            console.log(image);
            setDogImage(image.message);
        }

        getDogImage();
        setIsLoading(false);
    }, []);

    console.log(dogImage);

    return(
        <div>
            { isLoading ?
                <h1>Carregando</h1> :
                <>
                    <h1>Página carregada</h1>
                    <img alt="Happy dog" src={dogImage} style={{ width: 500, height: 500}}/>
                </>
            }
        </div>
    )
    
}

export default PageWithClientSide

export const Head = () => {
    return (
        <>
            <title>Teste Client Side</title>
            <meta name='description' content='Teste de client-side renderizando imagem de api aberta' />
        </>
    )
}