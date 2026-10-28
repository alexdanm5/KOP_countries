import { useHttp } from "../hooks/http.hook";

const useCountriesService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "https://api.restcountries.com/countries/v5";
	const _baseOffset = 25;

    const getAllCountries = async (offset = _baseOffset) => {
		const res = await request(
			`${_apiBase}?limit=9&offset=${offset}`
		);
        console.log(res.data.objects)
		return res.data.objects.map(_transformCountries);
	};

    const _transformCountries = (country) => {
		return {
			name: country.names.common,
            region: country.region || "There is no region",
            flag: country.flag.url_png || null,
			description: country.descriptions.long || "There is no description",
            gini: country.economy.gini_coefficient,
            area: country.area,
            borders: country.borders,
            translations: country.names.translations
		};
	};

	return {
		loading,
		error,
		clearError,
        getAllCountries
	};
}

export default useCountriesService