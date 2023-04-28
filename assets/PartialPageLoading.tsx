import React from 'react';

const PartialPageLoading = () => (
    <div
        className="w-full overflow-hidden opacity-75 flex flex-col items-center justify-center"
        style={{
            height: 'calc(100vh - 130px)',
        }}
    >
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4" />
    </div>
);

export default PartialPageLoading;
