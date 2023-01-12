export const development = {
    api: {
        mode: 'cors',
        url: process.env.REACT_APP_DEV_API_URL,
        AUTH: process.env.REACT_APP_API_KEY
    },
    MEADIA_URL: process.env.REACT_APP_MEADIA_URL,
    SITE_URL: process.env.REACT_APP_SITE_URL,
    ADMIN_URL: process.env.REACT_APP_ADMIN_URL,

    
    
}


export const staging = {
    api: {
        mode: 'cors',
        url: process.env.REACT_APP_DEV_API_URL,
        AUTH: process.env.REACT_APP_API_KEY,
    },
    MEADIA_URL: process.env.REACT_APP_MEADIA_URL,
    SITE_URL: process.env.REACT_APP_SITE_URL,
    ADMIN_URL: process.env.REACT_APP_ADMIN_URL,
}
