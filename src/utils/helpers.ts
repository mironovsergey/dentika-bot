export const getFormatDate = (timestamp: number): string => {
    const months: string[] = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const date: Date = new Date(timestamp * 1000);
    const day: string = date.getDate().toString();
    const month: string = months[date.getMonth()];

    return `${day} ${month}`;
};

export const addLeadingZero = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
};

export const getFormatTime = (timestamp: number): string => {
    const date: Date = new Date(timestamp * 1000);
    const hours: string = addLeadingZero(date.getHours());
    const minutes: string = addLeadingZero(date.getMinutes());

    return `${hours}:${minutes}`;
};
