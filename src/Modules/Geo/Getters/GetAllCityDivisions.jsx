import { getFromCacheOrApi } from 'Base'

const getAllCityDivision = async () => {

    return await getFromCacheOrApi(`/cityDivision/getAll`)
}

export default getAllCityDivision
