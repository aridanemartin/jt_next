
export function handleImageProps(image){
    const mainImageProps = useNextSanityImage(
        sanityClient,
        data.image
    );
    return mainImageProps;
}