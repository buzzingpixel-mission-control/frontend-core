declare global {
    interface Window {
        showPageNameOnPage: boolean;
    }
}
declare const useShowPageNameOnPage: () => boolean;
export default useShowPageNameOnPage;
