export const resHandle = res => {
    let status = res.data.status;
    let data;
    if (status) {
        data = res.data.data
    } else {
        data = res.data.message
    }
    return { status, data }
}


const emailPattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
export const isValidEmail = e => new RegExp(emailPattern).test(e);
export const isValidPassword = e => new RegExp(passwordPattern).test(e);


export const getAdminType = () => {
    switch(localStorage.getItem('role')){
        case 'super-admin':
            return 1;
            break;
        case 'admin':
            return 2;
            break;
        case 'creator-manager':
            return 3;
            break;
        case 'relationship-manager':
            return 4;
        default: return 5;

    }


        
}