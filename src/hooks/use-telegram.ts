declare global {
    interface Window {
        Telegram?: {
            WebApp: any;
        };
    }
}

export const useTelegram = () => {
    return window.Telegram?.WebApp;
};
