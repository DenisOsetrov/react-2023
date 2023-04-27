const baseUrl = 'http://owu.linkpc.net/carsAPI/v1';
                            // Є загальна URL baseUrl

// Створюємо компонент АРІ з під нашу Cars, бо може їх там бути декілька
const urls = {
    cars:'/cars'            // В цій API є лише Cars! Тому 1 об'єкт
}

export {
    baseUrl, urls
}