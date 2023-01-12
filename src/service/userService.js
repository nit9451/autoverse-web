import axios from 'axios';
import API from '../config/api';

axios.defaults.headers.common['listed-api-key'] = `${API.AUTH}`;

if (typeof(window) !== 'undefined') {
    const token = localStorage.getItem('Token');

    axios.defaults.headers.common['AUTHORIZATION'] = `bearer ${token}`;
    axios.defaults.headers.common['Token'] = token;
}

const headersApplicationJson = {
    "Content-Type": "application/json",
};

export const adminLoginService = (params) => axios.post(API.ADMIN_LOGIN, params, { headers: headersApplicationJson });

export const getAllUsersService = params => axios.get(API.GET_ALL_USERS + params);

export const getUserDetailService = params => axios.get(API.GET_USER_DETAIL + params);

export const updateUserProfileService = params => axios.put(API.UPDATE_USER_PROFILE, params);

export const changePasswordService = params => axios.put(API.CHANGE_PASSWORD, params);

export const createNewAchievements = (params) => axios.post(API.CREATE_NEW_ACHIEVEMENT, params, { headers: headersApplicationJson });

export const getAllRoleService = params => axios.get(API.GET_ALL_ROLES , params);

export const createNewUserService = params => axios.post(API.CREATE_NEW_USER, params);

export const updateAchievement = (params) => axios.put(API.UPDATE_ACHIEVEMENT, params, { headers: headersApplicationJson });

export const createNewJourney = (params) => axios.post(API.CREATE_JOURNEY, params, { headers: headersApplicationJson });

export const updateJourney = (params) => axios.put(API.UPDATE_JOURNEY, params, { headers: headersApplicationJson });

export const createUserMediaService = params => axios.post(API.CREATE_USER_MEDIA, params);

export const updateUserMediaService = params => axios.put(API.UPDATE_USER_MEDIA, params);

export const createUserGalleryService = params => axios.post(API.CREATE_USER_GALLERY, params);

export const getUserGalleryService = params => axios.get(API.GET_USER_GALLERY + params);

export const getAllUserProjectsService = params => axios.get(API.GET_ALL_USER_PROJECTS + params);

export const createNewBrand = (params) => axios.post(API.CREATE_BRAND, params, { headers: headersApplicationJson });

export const updateBrand = (params) => axios.put(API.UPDATE_BRAND, params, { headers: headersApplicationJson });

export const createNewSocial = (params) => axios.post(API.CREATE_SOCIAL, params, { headers: headersApplicationJson });

export const updateSocial = (params) => axios.put(API.UPDATE_SOCIAL, params, { headers: headersApplicationJson });

export const createTrivia = (params) => axios.post(API.CREATE_TRIVIA, params, { headers: headersApplicationJson });

export const getTriviaService = params => axios.get(API.GET_TRIVIA + params);

export const updateTrivia = (params, id) => axios.put(API.UPDATE_TRIVIA + id, params);

export const deleteTrivia = (params, id) => axios.delete(`${API.DELETE_TRIVIA}${params}/${id}`);

export const deleteSocialService = (params) => axios.delete(API.DELETE_SOCIAL, { data: params });


export const createNewProjectService = params => axios.post(API.CREATE_NEW_PROJECT, params);

export const getAllUserProjectService = params => axios.get(API.GET_ALL_USER_PROJECT + params);

export const updateProjectService = params => axios.put(API.UPDATE_PROJECT, params);

export const aboutProjectService = params => axios.get(API.ABOUT_PROJECT + params);

export const createNewProjectFinancialService = params => axios.post(API.CREATE_NEW_PROJECT_FINANCIAL, params);

export const updateProjectFinancialService = params => axios.put(API.UPDATE_PROJECT_FINANCIAL, params);

export const createNewProjectFundingService = params => axios.post(API.CREATE_NEW_PROJECT_FUNDING, params);

export const updateProjectFundingService = params => axios.put(API.UPDATE_PROJECT_FUNDING, params);

export const createFundingCatService = params => axios.post(API.CREATE_FUNDING_CAT, params);

export const updateFundingCatService = params => axios.put(API.UPDATE_FUNDING_CAT, params);

export const getUsersByRoleService = params => axios.get(API.GET_USERS_BY_ROLE + params);

export const createAdminService = params => axios.post(API.CREATE_ADMIN, params);

export const updateAdminService = params => axios.put(API.UPDATE_ADMIN, params);

export const assignUserService = params => axios.post(API.ASSIGN_USER, params);

export const assignSuperUserService = params => axios.post(API.ASSIGN_SUPER_USER, params);

export const getAssignedUsersService = params => axios.get(API.GET_ASSIGNED_USER + params);

export const getSpacialUserService = params => axios.get(API.GET_SPECIAL_USER, params);

export const createNewPeekService = params => axios.post(API.CREATE_NEW_PEEK, params);

export const updatePeekService = params => axios.put(API.UPDATE_PEEK, params);

export const createNewSneekPeekService = params => axios.post(API.CREATE_NEW_SNEEK_PEEK, params);

export const updateSneekPeekService = params => axios.put(API.UPDATE_SNEEK_PEEK, params);

export const getTokenByProjectId = params => axios.get(API.GET_TOKEN_BY_PROJECTID + params);

export const createNewToken = params => axios.post(API.CREATE_TOKEN, params);

export const updateToken = (params, id) => axios.put(API.UPDATE_TOKEN + id, params);

export const deleteTriviaService = params => axios.delete(API.DELETE_TRIVIA + params);

export const getTriviaImagesService = params => axios.get(API.GET_TRIVIA_IMAGES + params);

export const createTriviaImagesService = params => axios.post(API.CREATE_TRIVIA_IMAGES, params);

export const updateTriviaImagesService = (params, id) => axios.patch(API.UPDATE_TRIVIA_IMAGES + id, params);

export const deleteTriviaImagesService = params => axios.delete(API.DELETE_TRIVIA_IMAGES + params);

export const checkUsernameService = params => axios.get(API.CHECK_USERNAME_EXIST + params);

export const createNewPerk = params => axios.post(API.CREATE_NEW_PERK, params);

export const updatePerk = params => axios.put(API.UPDATE_PERK, params);

export const getPerkCategory = (params) => axios.get(API.GET_PERK_CATEGORY + params);

export const getAllCategoriesByProjectId = (params) => axios.get(API.GET_ALL_CATEGORY_BY_PROJECTID + params);

export const createPerkCategory = params => axios.post(API.CREATE_PERK_CATEGORY, params);

export const createPerkSubCategory = params => axios.post(API.CREATE_PERK_SUB_CATEGORY, params);

export const updatePerkSubCategory = params => axios.put(API.UPDATE_PERK_SUB_CATEGORY, params);

export const createCouponService = params => axios.post(API.CREATE_COUPON, params);

export const updatePerkCategory = params => axios.put(API.UPDATE_PERK_CATEGORY, params);

export const updatePerkCategoryService = params => axios.put(API.UPDATE_PERK_CATEGORY, params);

export const getCouponService = params => axios.get(API.GET_COUPON + params);

export const getPerksBySubcategoryId = params => axios.get(API.GET_PERK_BY_SUBCATEGORY_ID + params);

export const getSubCategoryByCategoryIdService = params => axios.post(API.GET_SUB_CATEGORY_BY_ID, params);

export const getPerksBySubCategoryService = params => axios.post(API.GET_ALL_PERKS_BY_SUB_CATEGORY, params);

export const getInvestCampaignService = params => axios.get(API.GET_INVEST_CAMPAIGN + params);

export const createInvestCampaignService = params => axios.post(API.CREATE_INVEST_CAMPAIGN, params);

export const updateInvestCampaignService = (id, params) => axios.put(API.UPDATE_INVEST_CAMPAIGN + id, params);

export const deleteInvestCampaignService = params => axios.delete(API.DELETE_INVEST_CAMPAIGN + params);

export const getAllFansListService = params => axios.get(API.GET_ALL_FANS + params);

export const getAllOrdersListService = params => axios.get(API.GET_ALL_ORDERS ,params);

export const getAllCouponService = params => axios.get(API.GET_ALL_COUPON + params);

export const getDashbordService = params => axios.get(API.GET_DASHBOARD + params);

export const updateCouponService = params => axios.put(API.UPDATE_COUPON, params);

export const getInfluencerPermissionService = params => axios.get(API.GET_INFLUENCER_PERMISSION + params);

export const setInfluencerPermissionService = params => axios.post(API.SET_INFLUENCER_PERMISSION, params);

export const getOrdersByProjectIdService = params => axios.get(API.GET_ORDERS_BY_PROJECT + params);

export const getOrdersByPageService = (params, q) => axios.post(API.GET_ALL_ORDERS_BY_PAGE + q, params);

export const getIconsService = params => axios.get(API.GET_ICONS + params);

export const storeIconsService = params => axios.post(API.STORE_ICONS , params);


export const getBackersService = params => axios.get(`${API.GET_BACKERS}${params}`);
export const createNotableBackersService = params => axios.post(API.CREATE_NOTABLE_BACKERS, params);
export const getNotableBackersService = params => axios.get(API.GET_NOTABLE_BACKERS + params);
export const updateNotableBackersService = (params, id) => axios.put(API.UPDATE_NOTABLE_BACKERS + id, params);
export const deleteNotableBackersService = params => axios.delete(API.DELETE_NOTABLE_BACKERS + params);

export const createHowItworkService = params => axios.post(API.CREATE_HOW_IT_WORK, params);
export const getHowItWorkService = params => axios.get(API.GET_HOW_IT_WORK,params);


export const createLoginSliderService = params => axios.post(API.CREATE_LOGIN_SLIDER, params);
export const getLoginSlinderService = params => axios.get(API.GET_LOGIN_SLIDER,params);

export const getDiscoverServiceService = params => axios.get(API.GET_DISCOVER , params);
export const createDiscoverService = params => axios.post(API.CREATE_DISCOVER,params);
export const updateDiscoverService = params => axios.put(API.UPDATE_DISCOVER,params);

export const getRequestedPerksService = params => axios.get(API.GET_REQUESTED_PERKS);
export const approvePerkService = params => axios.patch(API.APPROVE_PERK, params);






// UPDATES SERVICES
export const getUpdateListService = params => axios.get(API.GET_UPDATE , params);

export const createUpdateListService = params => axios.post(API.CREATE_UPDATE , params);
export const updateUpdateListService = params => axios.put(API.EDIT_UPDATE , params);

export const getLikeList = params => axios.post(API.LIKE_LIST , params);
export const getDisLikeList = params => axios.post(API.DISLIKE_LIST , params);
export const getCommentList = params => axios.post(API.COMMENT_LIST , params);


// community 
export const getCommunityListService = (params) => axios.get(API.COMMUNITY_LIST, { data: params });
export const createCommunityListService = (params) => axios.post(API.CREATE_COMMUNITY, params);




export const getLikeListCommunity = params => axios.post(API.LIKE_LIST_COMMUNITY , params);
export const getDisLikeListCommunity = params => axios.post(API.DISLIKE_LIST_COMMUNITY , params);
export const getCommentListCommunity = params => axios.post(API.COMMENT_LIST_COMMUNITY , params);
export const getPaymentMethodService = params => axios.get(API.GET_PAYMENT_METHOD , params);
export const updateCommunity = params => axios.post(API.UPDATE_COMMUNITY , params);


export const updatePaymentMethodService = params => axios.post(API.UPDATE_PAYMENT_METHOD , params);

