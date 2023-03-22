const key = '88485d42c5a2c0d6be8776ea324d0ca4'

const request = {


    requestPopular: `
    https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`ttps://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestTv: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default request