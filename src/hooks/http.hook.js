import {useState, useCallback} from 'react';

export const useHttp = () => {
	const [process, setProcess] = useState('waiting');

	const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {
		
		setProcess('loading');

		try {
			const response = await fetch(url, {method, body, headers}); // передаем в фетч аргументы из коллбэка для настройки запроса

			if (!response.ok) {
				throw new Error(`Could not fetch ${url}, status: ${response.status}`);
			}

			const data = await response.json();

			return data;

		} catch(e) {
			setProcess('error');
			throw e; // пробрасываем ошибку дальше
		}
	}, []);

	// нужна функция, для того, чтобы затереть стейт с ошибкой
	const clearError = useCallback(() => {
		setProcess('loading');
	}, []);

	return {request, clearError, process, setProcess}; // возвращаем из хука сущности
}