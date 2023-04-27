// import React, {
//     createContext, useContext, useEffect, useMemo, useState,
// } from 'react';
//
// type CreateContextProps = {
//     sections: Array<{
//         render: JSX.Element
//     }>
// };
//
// export const ProjectDetailsContext = createContext<CreateContextProps>(
//     null,
// );
//
// export const useProjectDetailsContext = () => {
//     const context = useContext(ProjectDetailsContext);
//
//     if (!context) {
//         throw new Error(
//             'useProjectDetailsContext must be used within a ProjectDetailsContextProvider',
//         );
//     }
//
//     return context;
// };
//
// export const RouteContextProvider = ()
