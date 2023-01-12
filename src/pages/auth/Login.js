import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import brandLogo from '../../assets/img/logo-dark.svg';
import { BtnLoader } from '../../components/Svg';
import { isValidEmail, resHandle } from '../../helper';
import { adminLoginService, getSpacialUserService } from '../../service/userService';
import settings from '../../config/settings';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [btnLoder, setBtnLoder] = useState(false);
    const [resErr, setResErr] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [tokenId, setTokenId] = useState('');

    const [role, setRole] = useState('');

    const history = useHistory()

    const validation = () => {
        let validate = true;
        if (email == '') {
            setEmailErr('Email is required');
            validate = false;
        }
        // else if(!isValidEmail(email)){
        //     setEmailErr('Email is not valid');
        //     validate = false
        // }

        if (password == '') {
            setPasswordErr('Password is required');
            validate = false;
        }

        return validate;
    };

    useEffect(() => {
        async function getapi() {
            const config = {
                headers : {
                    name: "Nitish"
                }
            }
            const res = await axios.get('http://localhost:5000/name',config);
            alert(JSON.stringify(res.data));
        }
        getapi();
    }, []);

    // const role = localStorage.getItem("role")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            setBtnLoder(true);
            setResErr('');
            let params = '';

            params = { email, password };
            adminLoginService(params)
                .then((res) => {
                    let { status, data } = resHandle(res);
                    if (status) {
                        localStorage.setItem('Token', data);
                        // axios.defaults.headers.common['Token'] = data;
                        setTokenId(data);
                        // getUser();
                        // await getUser();
                        // localStorage.setItem("adminId", data._id);
                        // // localStorage.setItem("role", data.role);
                        // localStorage.setItem("adminName", data.name);
                        // localStorage.setItem("image",data.image);
                        window.location.href = '/influencer';
                    } else {
                        setBtnLoder(false);
                    }
                })
                .catch((err) => {
                    setResErr(err.response.data.message);
                    setBtnLoder(false);
                });
        }
    };


    const handleLogin = ()=>{
        history.push("/dashboard")

    }
    return (
        <div className="auth_wrapper">
            <div className="auth_box">
                {btnLoder ? (
                    <div className="btn_loader">
                        <BtnLoader />
                    </div>
                ) : (
                    ''
                )}
                <form onSubmit={()=>handleLogin()}>
                    <div className="text-center auth_text">
                        {/* <img src={brandLogo} /> */}
                        <h2>Hi, Welcome Back</h2>
                        <p>Enter your credentials to continue</p>
                        <small>Sign in with Email address</small>
                    </div>

                    <div className="form-group">
                        <label>
                            Email<b className="cm_extact">*</b>
                        </label>
                        <input
                            value={email}
                            required
                            onChange={(e) => (setEmail(e.target.value), setEmailErr(''))}
                            type="email"
                            className={`form-control ${emailErr ? 'is-invalid' : ''}`}
                        />
                        {emailErr ? <div className="invalid-feedback">{emailErr}</div> : ''}
                    </div>

                    <div className="form-group">
                        <label>
                            Password<b className="cm_extact">*</b>
                        </label>
                        <div className="with_icon">
                            <input
                                value={password}
                                onChange={(e) => (setPassword(e.target.value), setPasswordErr(''))}
                                type={showPass ? 'text' : 'password'}
                                className={`form-control ${passwordErr ? 'is-invalid' : ''}`}
                            />
                            <i className={`fa fa-eye${showPass ? '-slash' : ''}`} onClick={() => setShowPass(!showPass)} />
                        </div>
                        {passwordErr ? <div className="invalid-feedback">{passwordErr}</div> : ''}
                    </div>
                    <div className="with_auth_link">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>

                    {resErr ? <h6 className="res_err">{resErr}</h6> : ''}

                    <button disabled={btnLoder} className="btn btn-primary w-100" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
