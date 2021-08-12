function useGenre(selectedGenres){
    if(selectedGenres.length <1)
        return "";


    const genreid=selectedGenres.map((g) => g.id);
    return genreid.reduce((acc,curr) => acc+','+curr);

}

export default useGenre;