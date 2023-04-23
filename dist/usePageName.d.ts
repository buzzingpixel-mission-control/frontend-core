declare global {
    interface Window {
        pageName: string;
    }
}
declare const usePageName: (value?: string) => string;
export default usePageName;
