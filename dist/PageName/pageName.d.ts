declare global {
    interface Window {
        pageName: string;
    }
}
declare const pageName: () => string;
export default pageName;
