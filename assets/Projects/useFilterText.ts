import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import useUpdateQueryStringValueWithoutNav from '../useUpdateQueryStringValueWithoutNav';

const useFilterText = (): [
    string,
    (val: string) => void,
] => {
    const [searchParams] = useSearchParams();

    const [filterText, setFilterText] = useState(
        searchParams.get('filter') ?? '',
    );

    useUpdateQueryStringValueWithoutNav(
        'filter',
        filterText,
    );

    return [
        filterText,
        setFilterText,
    ];
};

export default useFilterText;
