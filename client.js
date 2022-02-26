import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: '6yfev950',
    dataset: 'production',
	useCdn: true
});