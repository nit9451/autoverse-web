import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getSpacialUserService, updateAdminService } from '../../service/userService';

import { EmptyData, PageLoader } from '../../components/Svg';
import settings from '../../config/settings';
import { Link } from 'react-router-dom';
import { resHandle } from '../../helper';
import { Modal } from 'react-bootstrap';

const Profile = () => {
    const params = useParams();
    const history = useHistory();
    const [userData, setUserData] = useState({});
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true);
    const [userRoles, setUserRoles] = useState([]);
    const [editModal, setEditModal] = useState(false);

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [designation, setDesignation] = useState('');
    const [image, setImage] = useState('');
    const [imageView, setImageView] = useState('');







    const adminId = localStorage.getItem('adminId');

    const getUser = async () => {

        try {
            const { data } = await getSpacialUserService(adminId);
            return new Promise(function (resolve, reject) {
                resolve(data);
                setUserData(data.data);
                setLoader(false);
            });
        } catch (err) {
            return new Promise(function (resolve, reject) {
                reject(err);
                setLoader(false);
            });
        }
    };

    useEffect(() => {
        getUser();
    }, []);
    const handleEdit = (userData) => {

        setEditModal(true);
        setEmail(userData.email);
        setName(userData.name);
        setBio(userData.bio);
        setDesignation(userData?.designation?.name);
        setMobile(userData.mobile);
        setImageView(settings.MEADIA_URL + userData.image);
    }
    const handleClose = () => {
        setEditModal(false);
    }
    const handleFileChange = (e, name) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        setImage(file);
       
        reader.addEventListener('load', () => {
            setTimeout(() => {
                setImageView(reader.result);
            }, 10)
        }, false);
        if (file) { reader.readAsDataURL(file) }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let formData = new FormData();
            
        formData.set('image', image);
        formData.set('name', name);
        formData.set('email', email);
        formData.set('bio', bio);
        formData.set('designation',designation);
        formData.set('mobile', mobile);
        formData.set('_id', userData._id);

        updateAdminService(formData).then((res) => {
            if (res?.statusCode <= 201) {
                localStorage.setItem('image', res.data.data.image);
                window.changeAdminImage();
                handleClose();
                getUser();
            }
        });










    }

    return (
        <div className="main_layout">
            {loader ? (
                <div className="page_loader" style={{ minHeight: '400px' }}>
                    <PageLoader />
                </div>
            ) : (
                ''
            )}
            <div className="row px-3">

                <div className="col-lg-3">

                    <div className="admin_card">
                        <img src={settings.MEADIA_URL + userData.image} />
                        <h3>{userData.name}</h3>
                        <p>
                            <b>Email: </b>
                            {userData.email}
                        </p>
                        <p>
                            <b>Mobile: </b>
                            {userData.mobile}
                        </p>
                        <p>
                            <b>Designation: </b>
                            {userData?.designation?.name}
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <button className="btn btn-primary btn-sm" onClick={()=>handleEdit(userData)}>
                        Edit
                    </button>
                </div>


            </div>
            <Modal
                show={editModal}
                backdrop="static"
                size="lg"
                centered
                onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit}>



                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Name<b className="cm_extact">*</b></label>
                                    <input
                                        type="text"
                                        required
                                        onChange={e => (setName(e.target.value))}
                                        value={name}
                                        className={`form-control`} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Bio<b className="cm_extact">*</b></label>
                                    <input
                                        type="text"
                                        value={bio}
                                        onChange={e => (setBio(e.target.value))}
                                        className={`form-control`} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email<b className="cm_extact">*</b></label>
                                    <input
                                        type="email"
                                        required
                                        onChange={e => (setEmail(e.target.value))}
                                        value={email}
                                        className={`form-control`} />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Mobile<b className="cm_extact">*</b></label>
                                    <input
                                        type="number"
                                        value={mobile}
                                        onChange={e => (setMobile(e.target.value))}
                                        className={`form-control`} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                        <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Designation<b className="cm_extact">*</b></label>
                                    <input
                                        type="text"
                                        required
                                        onChange={e => (setDesignation(e.target.value))}
                                        value={designation}
                                        className={`form-control`} />
                                </div>
                            </div>
                            <div className="col-lg-6">

                            <div className="form-group">
                                <label>Profile Image<b className="cm_extact">*</b></label>
                                <input
                                    onChange={e => handleFileChange(e, 'img')}
                                    type="file"
                                    accept="image/*"
                                    className={`form-control`} />

                                {imageView ? <div className="media_preview"><img src={imageView} /></div> : ''}
                            </div>
                            </div>
                            </div>


                           













                        <div className="d-flex mt-5">
                            <span onClick={handleClose} className="btn btn-dark w-100 me-4">Close</span>
                            <button className="btn btn-primary w-100">Submit</button>
                        </div>


                    </form>
                </Modal.Body>
            </Modal>

        </div>
    )
}



export default Profile;