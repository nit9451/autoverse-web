import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getSpacialUserService, getAssignedUsersService, getAllRoleService ,getUsersByRoleService, assignSuperUserService} from '../../service/userService';
import { Badge, Modal } from 'react-bootstrap'

import { EmptyData, PageLoader } from '../../components/Svg';
import settings from '../../config/settings';
import { Link } from 'react-router-dom';
import { resHandle } from '../../helper';

const AboutAdmin = () => {
    const params = useParams();
    const history = useHistory();
    const [userData, setUserData] = useState({});
    const [users, setUsers] = useState([]);
    const [managers, setCreaterManagers] = useState([]);
    
    const [loader, setLoader] = useState(true);
    const [userRoles, setUserRoles] = useState([]);
    const [assignModal, setAssignModal] = useState(false);
    const [rm, setRm] = useState('');
    const [cm, setCm] = useState({});
    const adminId = localStorage.getItem('adminId');

    useEffect(() => {
        getAllRoleService().then(res => {
            let {status, data} = resHandle(res);
            if(status){
                //let startIndex = data.findIndex(i => i.role == localStorage.getItem('role'));
                var temp = {}
                data.map((val)=>{
                       if (val.role =="creator-manager" ) {
                        temp = val
                       }
                })
                setCm(temp)

                let sliceRole = data.slice(data.findIndex(i => i.role === "creator-manager"), data.length);
            }
        })
    }, [])

    
    useEffect(() => {
        if(cm._id){
            getAllUser();
        }


    }, [cm._id])
    const getAllUser = async () => {
        try {
            let query = `${cm._id}`;
            const { data } = await getUsersByRoleService(query);
            return new Promise(function (resolve, reject) {
                resolve(data);
                setCreaterManagers(data.data);
            });
        } catch (err) {
            return new Promise(function (resolve, reject) {
                reject(err);
            });
        }
    };
    const handleAssign = () => {
       
        let params = {
            assignee: adminId,
            superUser: rm,
            superUserType: "creator-manager",
            assignedSuperUser: userData._id,
            assignedSuperUserType: "relationship-manager"
        }
       
        assignSuperUserService(params).then(res => {
            handleClose();
        })
    }
    const handleClose = () => {
        setAssignModal(false);
    };

    const getUser = async () => {
        let query = `${params.id}`;
        try {
            const { data } = await getSpacialUserService(query);
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

    useEffect(() => {
        if (params.id) {
            getAssignedUsersService(params.id).then((res) => {
                if (res?.data?.statusCode == 200) {
                    let temp_list = res.data.data || [];
                    if (temp_list.length) {
                        let temp_list_res = temp_list.map((i) => i.influencer);
                        setUsers(temp_list_res);
                    }
                }
            });
        }
    }, [params.id]);

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
                        <div className="back_btn" onClick={() => history.goBack()}>
                            <i className="fa fa-chevron-left" /> Back
                        </div>
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
                <div className="col-lg-9">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h3 className="table_heading">Assigned Influencer</h3>
                        <div>
                            <span className="btn btn-primary" onClick={() => setAssignModal(true)}>
                                Assign Super User
                            </span>
                        </div>
                    </div>

                    <Modal show={assignModal} backdrop="static" size="lg" centered onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Assign</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {/* <div className="cm_chip_wrap">
                                 {userRoles.map((i) => (
                                    <span
                                        onClick={() => (setActiveTab(i._id), setActiveTabRole(i.role))}
                                        className={`cm_chip ${activeTab == i._id ? 'active' : ''}`}
                                        key={i._id}
                                    >
                                        {i.name}
                                    </span>
                                ))}
                            </div> */}
                            <ul className="cm_users_sm">
                                {managers.map((item) => (
                                    <li key={item._id}>
                                        <img src={`${settings.MEADIA_URL}${item.image}`} />
                                        {item.name}
                                        <div className="cm_checkbox">
                                            <input type="radio" checked={rm == item._id ? true : false} onChange={() => setRm(item._id)} />
                                            <span />
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {rm ? (
                                <div className="text-center">
                                    <button onClick={handleAssign} className="btn btn-primary px-5">
                                        Assign
                                    </button>
                                </div>
                            ) : (
                                ''
                            )}
                        </Modal.Body>
                    </Modal>
                    <div className='table-responsive'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Journey Started From</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item, i) => (
                                    <tr key={item._id}>
                                        <td>{i + 1}</td>
                                        <td>
                                            <Link className="user_sm_img" to={`/influencer/${item._id}`}>
                                                <img src={`${settings.MEADIA_URL}${item.displayPicture}`} />
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.journeyStartedFrom}</td>
                                        <td>
                                            <Link className="btn btn-dark btn-sm" to={`/influencer/${item._id}`}>
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {users.length ? (
                        ''
                    ) : (
                        <div className="no_data">
                            <EmptyData /> <p>No Data</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutAdmin;
                                           

