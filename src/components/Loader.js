import LoadingOverlay from 'react-loading-overlay';

export default function Loader() {
    return (
        <LoadingOverlay
        spinner
        text='Loading your content...'
        >
        {/* <p>Some content or children or something.</p> */}
        </LoadingOverlay>
    );
}