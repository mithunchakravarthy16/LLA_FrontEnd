export const googleMapApiKey = {
    SET_GOOGLE_MAP_API : "SET_GOOGLE_MAP_API",
    GET_GOOGLE_MAP_API : "GET_GOOGLE_MAP_API",
    SET_GOOGLE_MAP_API_POST : "SET_GOOGLE_MAP_API_POST",
    GET_GOOGLE_MAP_API_POST : "GET_GOOGLE_MAP_API_POST",
    SHOW_LOADER : "SHOW_LOADER",
    HIDE_LOADER : "HIDE_LOADER",
}

export const getGoogleMapApi = (payload:any) =>({
    type : googleMapApiKey.GET_GOOGLE_MAP_API,
    payload : payload
})

export const setGoogleMapApi = (googleMapApiKeyData:any) =>({
    type : googleMapApiKey.SET_GOOGLE_MAP_API,
    googleMapApiKeyData
})

export const getGoogleMapPostApi = (payload:any) =>({
    type : googleMapApiKey.GET_GOOGLE_MAP_API_POST,
    payload : payload
})

export const setGoogleMapPostApi = (googleMapApiKeyDataPost:any) =>({
    type : googleMapApiKey.SET_GOOGLE_MAP_API_POST,
    googleMapApiKeyDataPost
})


export const setShowLoaderGoogleMapApiKey = () => ({
    type: googleMapApiKey.SHOW_LOADER,
  });
  
  export const hideLoaderGoogleMapApiKey = () => ({
    type: googleMapApiKey.HIDE_LOADER,
  });

export default googleMapApiKey;