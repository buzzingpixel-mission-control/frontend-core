import { useSearchParams } from 'react-router-dom';

const useFilterText = (): [
    string,
    (val: string) => void,
] => {
    const [
        searchParams,
        setSearchParams,
    ] = useSearchParams();

    const filterText = searchParams.get('filter') ?? '';

    const setFilterText = (val: string) => {
        setSearchParams((params) => {
            if (!val) {
                params.delete('filter');
            } else {
                params.set('filter', val);
            }

            return params;
        });
    };

    return [
        filterText,
        setFilterText,
    ];
};

export default useFilterText;
