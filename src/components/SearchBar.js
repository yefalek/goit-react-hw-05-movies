import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export default function SearchBar({ onSubmit }) {
    const [querry, setQuerry] = useState('');
    
    const handleNameChange = e => {
        setQuerry(e.target.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (querry.trim() === '') {
            toast.error('Enter your search');
            return;
        }

        onSubmit(querry);
        setQuerry('');
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <button type="submit"><span>Search...</span></button>
                <input value={querry} onChange={handleNameChange} type="text" autoComplete="off" autoFocus />
            </form>
        </section>
    );
}

SearchBar.propTypes = { imageName: PropTypes.string, };