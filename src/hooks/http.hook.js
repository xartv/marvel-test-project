import {useState, useCallback} from 'react';

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {
		
		setLoading(true); // ставим загрузку в активный стэйт

		try {
			const response = await fetch(url, {method, body, headers}); // передаем в фетч аргументы из коллбэка для настройки запроса

			if (!response.ok) {
				throw new Error(`Could not fetch ${url}, status: ${response.status}`);
			}

			const data = await response.json();

			setLoading(false); // завершаем загрузку
			return data;

		} catch(e) {
			setLoading(false); // даже если ошибка, то завершаем загрузку
			setError(e.message); // передаем в стэйт ошибки сообщение об ошибке
			throw e; // пробрасываем ошибку дальше
		}
	}, []);

	// нужна функция, для того, чтобы затереть стейт с ошибкой
	const clearError = useCallback(() => setError(null), []);

	return {loading, request, error, clearError, setError}; // возвращаем из хука сущности
}