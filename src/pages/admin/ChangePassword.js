import { useState } from 'react';
import { changePasswordService } from '../../service/userService';


const ChangePassword = () => {
    const [loader, setLoader] = useState(true);
    const [oldPassword, setOldPassword] = useState('');
    const [oldPasswordErr, setOldPasswordErr] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordErr, setNewPasswordErr] = useState('');
    const [showPass2, setShowPass2] = useState(false);

    const handleClick=(e)=>{
        e.preventDefault();
        let _id = localStorage.getItem("adminId");
        let params = {oldPassword,newPassword,_id}
        changePasswordService(params).then((res) => {
            setOldPassword("");
            setNewPassword("");
        });





    }

    

    return (
        <div className="main_layout">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 pt-5'>
                        <h3 className='mb-4'>Change Password</h3>
                        <form>
                            

                            <div className="form-group">
                                <label>Old Password<b className="cm_extact">*</b></label>
                                <div className='with_icon'>
                                    <input
                                        value={oldPassword}
                                        onChange={e => (setOldPassword(e.target.value), setOldPasswordErr(''))}
                                        type={showPass ? 'text' : 'password'}
                                        className={`form-control ${oldPasswordErr ? 'is-invalid' : ''}`} />
                                        <i className={`fa fa-eye${showPass ? '-slash' : ''}`} onClick={() => setShowPass(!showPass)} />
                                </div>
                                {oldPasswordErr ? <div className="invalid-feedback">{oldPasswordErr}</div> : ''} 
                            </div>

                            <div className="form-group">
                                <label>New Password<b className="cm_extact">*</b></label>
                                <div className='with_icon'>
                                    <input
                                        value={newPassword}
                                        onChange={e => (setNewPassword(e.target.value), setNewPasswordErr(''))}
                                        type={showPass ? 'text' : 'password'}
                                        className={`form-control ${newPasswordErr ? 'is-invalid' : ''}`} />
                                        <i className={`fa fa-eye${showPass2 ? '-slash' : ''}`} onClick={() => setShowPass2(!showPass2)} />
                                </div>
                                {newPasswordErr ? <div className="invalid-feedback">{newPasswordErr}</div> : ''} 
                            </div>
                     

                            <button className='btn btn-primary w-100' type="submit" onClick={handleClick}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
