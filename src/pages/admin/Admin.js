import { Link } from 'react-router-dom';
import { Modal, Badge } from 'react-bootstrap';
import Select from 'react-select';
import { useEffect, useState } from 'react';

import { BtnLoader, PageLoader } from '../../components/Svg';
import settings from '../../config/settings';
import { createAdminService, getAllRoleService, getUsersByRoleService } from '../../service/userService';
import { resHandle } from '../../helper';
import placeholderImage from '../../assets/img/user-placeholder.png';
import axios from 'axios';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true);
    const [createUserModal, setCreateUserModal] = useState(false);
    const [userRoles, setUserRoles] = useState([]);
    const [newTag, setNewTag] = useState('');
    const [btnLoader, setBtnLoader] = useState(false);
    const [activeTab, setActiveTab] = useState('');
    const [resErr, setResErr] = useState('');

    const [designation, setDesignation] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [profileTags, setProfileTags] = useState([]);
    const [url, setUrl] = useState(null);

    console.log("url",url);
    const [images, setImage] = useState('');
    console.log("image", images)
    const [imageView, setImageView] = useState('');

    const [designationErr, setDesignationErr] = useState('');
    const [priceErr, setPriceErr] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [bioErr, setBioErr] = useState('');
    const [imageViewErr, setImageViewErr] = useState('');

    const adminId = localStorage.getItem('adminId');

    const [list, setList] = useState([])

    // useEffect(() => {
    //     getAllRoleService().then((res) => {
    //         let { status, data } = resHandle(res);
    //         if (status) {
    //             if (data.length) {
    //                 data.pop();

    //                 setUserRoles(data);
    //                 setActiveTab(data[0]._id);
    //             }
    //         }
    //     });
    // }, []);

    // const getAllUser = async () => {
    //     setLoader(true);
    //     try {
    //         let query = `${activeTab}`;
    //         const { data } = await getUsersByRoleService(query);
    //         return new Promise(function (resolve, reject) {
    //             resolve(data);
    //             setUsers(data.data);
    //             setLoader(false);
    //         });
    //     } catch (err) {
    //         return new Promise(function (resolve, reject) {
    //             reject(err);
    //             setLoader(false);
    //         });
    //     }
    // };

    // useEffect(() => {
    //     if (activeTab) {
    //         getAllUser();
    //     }
    // }, [activeTab]);


    const handleClose = () => {
        setCreateUserModal(false);
        setDesignation('');
        setName('');
        setEmail('');
        setBio('');
        setProfileTags([]);
        setImage('');
        setImageView('');
        setNewTag('');
        setPrice('');

        setDesignationErr('');
        setNameErr('');
        setEmailErr('');
        setBioErr('');
        setImageViewErr('');
        setPriceErr('');
    };

    const handleFileChange = (e, name) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log("filess",e.target.files);
        setImage(file);

        reader.addEventListener(
            'load',
            () => {
                setTimeout(() => {
                    setImageView(reader.result);
                }, 10);
            },
            false
        );
        if (file) {
            reader.readAsDataURL(file);
        }


        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "nitish")
        data.append("cloud_name","breellz")
        fetch("https://api.cloudinary.com/v1_1/dvrh5nedu/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
        setUrl(data.url)
        })
        .catch(err => console.log(err))
    };

    const validation = () => {
        let validate = true;

        if (designation == '' || designation == 'undefined') {
            setDesignationErr('Designation is required');
            validate = false;
        }

        if (email == '') {
            setEmailErr('Email is required');
            validate = false;
        }
        // else if(!isValidEmail(email)){
        //     setEmailErr('Email is not valid');
        //     validate = false
        // }

        if (name == '') {
            setNameErr('Name is required');
            validate = false;
        }

        // if(price == ''){
        //     setPriceErr('price number is required');
        //     validate = false
        // }

        // if(imageView == ''){
        //     setImageViewErr('Profile image is required');
        //     validate = false
        // }

        // if(bio == ''){
        //     setBioErr('Description is required');
        //     validate = false
        // }

        return validate;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            setBtnLoader(true);
            let formData = new FormData();

            formData.set('image', images);
            formData.set('superUserId', localStorage.getItem('adminId'));
            formData.set('designation', designation.value);
            formData.set('name', name);
            formData.set('bio', bio);
            formData.set('email', email);
            formData.set('password', password);

            formData.set('price', price);

            createAdminService(formData)
                .then((res) => {
                    setBtnLoader(false);
                    if (res?.data?.status) {
                        handleClose();
                        // getAllUser();
                    }
                })
                .catch((err) => {
                    setBtnLoader(false);
                    setResErr(err.response.data.message);
                });
        }
    };
    const handleProfile = () => {
        localStorage.setItem('isProfile', false);
    };

    function convertDataURIToBinary(dataURI) {
        
        var BASE64_MARKER = ';base64,';
        var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        var base64 = dataURI.substring(base64Index);
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
    
        for(var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }

    const handleForm = (e) => {
        e.preventDefault()
        console.log("image111111", images)
        let formData = new FormData();
        let binary = convertDataURIToBinary(imageView)
        console.log("binary,,,,", binary)
        formData.set('image', images);
        formData.set('bikeName', name);
        formData.set('price', price.toString());
        formData.set('description', bio);
        console.log("formadata", formData)
        let obj = {
            "image" : JSON.stringify(binary),
            "bikeName": name,
            "price" : price,
            "description" : bio
        }

        console.log("obj:", obj)


        let auth ={ headers: {
            'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibml0aXNoIiwiaWF0IjoxNjczNDA5OTUxfQ.0-U9vkfYgs8qsgtzPKS8Lvex5B0yLUACWb62CdfM0GY"}`
          }}
        axios.post('http://localhost:8000/bike/create', formData, auth).then((res) => {
            console.log('res', res);
            getData();
            setCreateUserModal(false);
        });
    };


    

    const getData = ()=>{
        axios.get("http://localhost:8000/bike").then((res)=>{
            console.log("resssss", res)
            setList(res?.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])


    const handleEdit = (data)=>{
        setName(data?.bikeName)
        setBio(data?.description)
        setPrice(data?.price)
        setImage(data?.image)
        setCreateUserModal(true)

    }

    
    return (
        <div className="main_layout">
            {/* {loader ? (
                <div className="page_loader">
                    <BtnLoader />
                </div>
            ) : (
                ''
            )} */}
            <div className="page_header px-3">
                <div className="cm_chip_wrap">
                    {userRoles.map((i) => (
                        <span onClick={() => setActiveTab(i._id)} className={`cm_chip ${activeTab == i._id ? 'active' : ''}`} key={i._id}>
                            {i.name}
                        </span>
                    ))}
                </div>

                <div className="page_header_actions">
                    <div className="cm_search">
                        <i className="fa fa-search" />
                        <input type="text" className="form-control" placeholder="Search..." />
                    </div>
                    <button onClick={() => setCreateUserModal(true)} className="btn btn-primary ms-3">
                        Create
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, i) => (
                            <tr key={item._id}>
                                <td>{i + 1}</td>

                                <td>
                                    <Link className="user_sm_img d-flex" to={`/admin/${item._id}`}>
                                        <img src={item.image ? `${settings.MEADIA_URL}${item.image}` : placeholderImage} alt={item.name} />
                                        {item.bikeName}
                                    </Link>
                                </td>

                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    {/* <Link className="btn btn-dark btn-sm" to={`/admin/${item._id}`} onClick={handleProfile}>
                                        View
                                    </Link> */}
                                    <button onClick={()=>handleEdit(item)} >Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={createUserModal} backdrop="static" size="lg" centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {btnLoader ? (
                        <div className="sm_loader">
                            <PageLoader />
                        </div>
                    ) : (
                        ''
                    )}
                    <form onSubmit={(e)=>handleForm(e)}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>
                                        Product Name<b className="cm_extact">*</b>
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => (setName(e.target.value), setNameErr(''), setResErr(''))}
                                        className={`form-control ${nameErr ? 'is-invalid' : ''}`}
                                    />
                                    {nameErr ? <div className="invalid-feedback">{nameErr}</div> : ''}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Price</label>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => (setPrice(e.target.value), setPriceErr(''), setResErr(''))}
                                        className={`form-control`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                onChange={(e) => (setBio(e.target.value), setBioErr(''), setResErr(''))}
                                value={bio}
                                className={`form-control`}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Image</label>
                            <input onChange={(e) => handleFileChange(e, 'img')} type="file" accept="glb/*" className={`form-control`} />

                            {imageView ? (
                                <div className="media_preview">
                                    <img src={imageView} />
                                </div>
                            ) : (
                                ''
                            )}
                        </div>

                        {resErr ? <h6 className="resErr">{resErr}</h6> : ''}

                        <div className="d-flex mt-5">
                            <span onClick={handleClose} className="btn btn-dark w-100 me-4">
                                Close
                            </span>
                            <button className="btn btn-primary w-100">Submit</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Admin;
