declare global {
    interface Window {
        pageName: string;
    }
}
declare const usePageName: () => string;
export default usePageName;
