
const apiKey=
'FU8sWRaMHaVdxsA1qiox1KEoa4iDXHk_DK-ZFLiGVRAP-e8Lq1wc80zwh26oaUd1twQBzYrPWF7Xa4wwL66XqPQnrezd_vnKWQ4jysRCXzi3asHAf6tTMA6BCvU7X3Yx';
const Yelp={
search(term,location,sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
    headers:{
        Authorization:`Bearer ${apiKey}`,
    },
    }).then(response=>{
        return response.json();
    }).then(jsonResponse=>{
        if (jsonResponse.businesses){
            return jsonResponse.businesses.map((business=>{
                return{
                id: business.id,
                imageSrc: business.image_url,
                name:business.name,
                address:business.location.address1,
                city:business.location.city,
                state: business.location.state,
                zipCode:business.location.zip_code,
                category:business.categories[0].title,
                rating:business.rating,
                reviewCount:business.review_count
            }}));
        }
        

    })
    
}
};

export default Yelp;