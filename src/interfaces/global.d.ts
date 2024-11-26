declare global {
    interface Window {
        fullpage_api: {
            setAutoScrolling: (value: boolean) => void;
            setFitToSection: (value: boolean) => void;
        };
    }
}