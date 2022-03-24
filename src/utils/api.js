// параметры запроса
export const PUBLIC_API_KEY = '34fc70d352583e5bf73ed1ac3b573798';
export const MY_HASH = 'b65b8e999147b30bb4f7d3c175b40ebc';
// параметры запроса end

export const API_URL = 'https://gateway.marvel.com/v1/public/';
export const URL_COMICS = 'comics';
export const URL_CHARACTERS = 'characters';

// img size
const STANDARD_FANTASTIC = 'standard_fantastic';
export const PORTRAIT_FANTASTIC = 'portrait_fantastic';
const PORTRAIT_INCREDIBLE = 'portrait_incredible';
// not img
export const IMG_NOT_AVAILABLE = 'image_not_available';

// формат записи запроса комиксов
export const MARVEL_COMICS = API_URL + URL_COMICS;
// https://gateway.marvel.com/v1/public/comics

/**
 * формат записи запроса героев комикса
 * 	https://gateway.marvel.com:443/v1/public/comics/1003/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
 */
