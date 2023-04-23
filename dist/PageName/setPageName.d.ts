declare global {
    interface Window {
        pageName: string;
    }
}
declare const setPageName: (value: string) => void;
export default setPageName;
