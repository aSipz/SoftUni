import './SearchBar.css';

import { memo, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { onChangeHandler } from '../../utils/inputUtils';

export default memo(SearchBar);

function SearchBar({ onSearch, searchFor, addSearch }) {
    const [searchParams] = useSearchParams();

    const defaultSearch = useMemo(() => ({ [searchFor]: '' }), [searchFor]);

    const [formValue, setFormValue] = useState(() =>
    (JSON.parse(searchParams.get('search'))?.[searchFor]
        ? { [searchFor]: JSON.parse(searchParams.get('search'))[searchFor] }
        : defaultSearch));

    useEffect(() => {
        setFormValue(JSON.parse(searchParams.get('search'))?.[searchFor]
            ? { [searchFor]: JSON.parse(searchParams.get('search'))[searchFor] }
            : defaultSearch)
    }, [searchParams, searchFor, defaultSearch]);

    const onChange = onChangeHandler.bind(null, setFormValue, searchFor !== 'title' ? onSearch : null);

    const onClear = () => {

        const { [searchFor]: _, ...searchQuery } = JSON.parse(searchParams.get('search')) ? JSON.parse(searchParams.get('search')) : {};

        setFormValue({ [searchFor]: '' });

        const searchObj = Object.assign({}, searchQuery);

        onSearch(searchObj);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (formValue[searchFor] === JSON.parse(searchParams.get('search'))?.[searchFor]) {
            return;
        }

        const { [searchFor]: _, ...searchQuery } = JSON.parse(searchParams.get('search')) ? JSON.parse(searchParams.get('search')) : {};

        const searchObj = Object.assign({}, searchQuery, formValue[searchFor] ? { [searchFor]: formValue[searchFor] } : null);

        onSearch(searchObj);
    }

    const onClick = (field) => {
        const { [field]: _, ...searchQuery } = JSON.parse(searchParams.get('search'));
        const searchObj = Object.assign({}, searchQuery);

        onSearch(searchObj);
    }

    return (
        <>
            <form className="search-form" onSubmit={onSubmit}>
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder={`Enter to search ${searchFor}`}
                        name={searchFor}
                        value={formValue[searchFor]}
                        onChange={onChange}
                    />

                    {formValue[searchFor] &&
                        <button type="button" className="close-btn" onClick={onClear}>
                            <i className="fa-solid fa-xmark" />
                        </button>
                    }

                    {searchFor === 'title' &&
                        <button type='submit' className="btn" title="Search text">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    }
                </div>
            </form>

            {addSearch && <div className="additional-search-params">
                {Object.entries(addSearch).map(([k, v]) => <button key={k} onClick={onClick.bind(null, k)}>{k} {v}<i className="fa-solid fa-xmark" /></button>)}

            </div>}
        </>
    );
}