interface Weather {
    main: string;
    description: string;
}

interface MainData {
    temp: number;
    humidity: number;
    condition: string;
    windSpeed: number;
}

interface Wind {
    speed: number;
}

export interface CityData {
    id: number;
    city: string;
}

export interface WeatherData {
    id: number;
    city: string;
    main: MainData;
    weather: Weather[];
    wind: Wind;
}
