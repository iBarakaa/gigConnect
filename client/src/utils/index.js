import axios from "axios"

// const API_URL = "http://localhost:8800/api-v1"
const API_URL = "https://gigconnect.onrender.com/api-v1/jobs/find-jobs"

export const API = axios.create({
    baseURL: API_URL,
    responseType: "json",
})

export const apiRequest = async ({url, token, data, method}) => {
    try {
        const result = await API(url, {
            method: method || "GET",
            data: data,
            headers:{
                "content-type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
                }
        });

        return result?.data;
    } catch (error) {
        const err = error.response.data
        console.log(err)
        return { status: err.success, message: err.message }
    }
}

export const handleFileUpload = async (uploadFile) => {
    const formData = new FormData();
    formData.append("file", uploadFile)
    formData.append("upload_preset", "gigconnect")

    try{
        const response = await axios.post("https://api.cloudinary.com/v1_1/dexdmzaer/image/upload", formData)
    
    } catch (error) {
        console.log(error)
    }
}

export const updateURL = ({
    pageNum,
    query,
    cmpLoc,
    sort,
    navigate,
    location,
    jType,
}) => {
    const params = new URLSearchParams();

        if (pageNum && pageNum > 1) {
            params.set("page", pageNum)
        }

        if (query) {
            params.set("search", query)
        }

        if (cmpLoc) {
            params.set("location", cmpLoc)
        }

        if (sort) {
            params.set("sort", sort)
        }

        if (jType) {
            params.set("jtype", jType)
        }

        const newURL = `${location.pathname}?${params.toString()}`
        navigate(newURL, { replace: true })

        return newURL
}

