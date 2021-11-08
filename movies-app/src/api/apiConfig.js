const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/movie/550?api_key=fd64c772f2b148ebf06ae391d2948626',
    apiKey: 'fd64c772f2b148ebf06ae391d2948626',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;