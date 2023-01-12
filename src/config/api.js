import setting from './settings';

export default (() => {
  return {
    'AUTH': setting.api.AUTH,
    'CREATE_PROJECT': setting.api.url + 'project/about/create-new-project',
    'ADMIN_LOGIN': setting.api.url + 'admin/login',
    'GET_ALL_USERS': setting.api.url + 'admin/get-all-users/',
    'GET_USER_DETAIL': setting.api.url + 'about-me/influencer/about/',
    'CHECK_USERNAME_EXIST': setting.api.url + 'about-me/influencer/',
    'CREATE_ADMIN': setting.api.url + 'admin/create-new-special-user',
    'UPDATE_ADMIN': setting.api.url + 'admin/update-special-user',
    'CHANGE_PASSWORD': setting.api.url + 'admin/change-password',
    'UPDATE_USER_PROFILE': setting.api.url + 'about-me/influencer/update-user',
    'CREATE_NEW_ACHIEVEMENT': setting.api.url + 'about-me/achievement/create-new-achievement',
    'GET_ALL_ROLES': setting.api.url + 'role/get-all-roles',
    'CREATE_NEW_USER': setting.api.url + 'about-me/influencer/create-new-user',
    'UPDATE_ACHIEVEMENT': setting.api.url + 'about-me/achievement/update-achievement',
    'CREATE_JOURNEY': setting.api.url + 'about-me/journey/create-new-journey',
    'UPDATE_JOURNEY': setting.api.url + 'about-me/journey/update-journey',
    'CREATE_USER_MEDIA': setting.api.url + 'about-me/media/create-new-media',
    'UPDATE_USER_MEDIA': setting.api.url + 'about-me/media/update-media',
    'CREATE_USER_GALLERY': setting.api.url + 'about-me/gallery/create-new-gallery',
    'GET_USER_GALLERY': setting.api.url + 'about-me/gallery/get-user-gallery/',
    'GET_ALL_USER_PROJECTS': setting.api.url + 'project/about/all/',
    'CREATE_NEW_PROJECT': setting.api.url + 'project/about/create-new-project',
    'UPDATE_PROJECT': setting.api.url + 'project/about/update-project',
    'GET_ALL_USER_PROJECT': setting.api.url + 'project/about/all/',
    'ABOUT_PROJECT': setting.api.url + 'project/about/',
    'CREATE_NEW_PROJECT_FINANCIAL': setting.api.url + 'project/financial/create-new-project-financial',
    'UPDATE_PROJECT_FINANCIAL': setting.api.url + 'project/financial/update-project-financial',
    'CREATE_NEW_PROJECT_FUNDING': setting.api.url + 'project/funding/create-new-project-funding',
    'UPDATE_PROJECT_FUNDING': setting.api.url + 'project/funding/update-project-funding',
    'GET_ORDERS_BY_PROJECT': setting.api.url + 'user/order/get-order-with-projectID/',

    'CREATE_FUNDING_CAT': setting.api.url + 'project/funding/create-new-funding-category',
    'UPDATE_FUNDING_CAT': setting.api.url + 'project/funding/update-funding-category',
    'GET_USERS_BY_ROLE': setting.api.url + 'admin/get-user-by-role/',
    'CREATE_NEW_PEEK': setting.api.url + 'project/sneek-peek/create-new-peek',
    'UPDATE_PEEK': setting.api.url + 'project/sneek-peek/update-peek',
    'CREATE_NEW_SNEEK_PEEK': setting.api.url + 'project/sneek-peek/create-new-sneek-peek',
    'UPDATE_SNEEK_PEEK': setting.api.url + 'project/sneek-peek/update-sneek-peek',
    'GET_TOKEN_BY_PROJECTID': setting.api.url + 'token/get-token/',
    'CREATE_BRAND': setting.api.url + 'about-me/brand/create-new-brand',
    'UPDATE_BRAND': setting.api.url + 'about-me/brand/update-brand',
    'CREATE_SOCIAL': setting.api.url + 'about-me/social/create-social-media',
    'UPDATE_SOCIAL': setting.api.url + 'about-me/social/update-social-media',
    'CREATE_TRIVIA': setting.api.url + 'trivia/create-trivia',
    'GET_TRIVIA': setting.api.url + 'trivia/get-trivia/',
    'ASSIGN_USER': setting.api.url + 'admin/assign-user',
    'ASSIGN_SUPER_USER': setting.api.url + 'admin/assign-super-user',
    'GET_SPECIAL_USER': setting.api.url + 'admin/get-special-user',
    'GET_ASSIGNED_USER': setting.api.url + 'admin/get-assigned-user/',
    'UPDATE_TRIVIA': setting.api.url + 'trivia/update-trivia/',
    'DELETE_TRIVIA': setting.api.url + 'trivia/delete-trivia/',
    'CREATE_TOKEN': setting.api.url + 'token/create-token',
    'UPDATE_TOKEN': setting.api.url + 'token/update-token/',
    'DELETE_TRIVIA': setting.api.url + 'trivia/delete-trivia',
    'GET_TRIVIA_IMAGES': setting.api.url + 'trivia/get-trivia-image/',
    'CREATE_TRIVIA_IMAGES': setting.api.url + 'trivia/create-trivia-image/',
    'UPDATE_TRIVIA_IMAGES': setting.api.url + 'trivia/update-trivia-image/',
    'DELETE_TRIVIA_IMAGES': setting.api.url + 'trivia/delete-trivia-image/',
    'CREATE_NEW_PERK': setting.api.url + 'perks/create-perk',
    'UPDATE_PERK': setting.api.url + 'perks/update-perk',
    'GET_PERK_BY_SUBCATEGORY_ID': setting.api.url + 'perks/category/perks/get-perks/',
    'CREATE_PERK_CATEGORY': setting.api.url + 'perks/category/create-perk-category',
    'CREATE_PERK_SUB_CATEGORY': setting.api.url + 'perks/category/create-perk-subcategory',
    'GET_ALL_CATEGORY_BY_PROJECTID': setting.api.url + 'perks/category/get-all-categories/',
    'GET_PERK_CATEGORY': setting.api.url + 'perks/category/get-perk-category/',
    'CREATE_COUPON': setting.api.url + 'perks/coupon/create-coupon',
    'GET_COUPON': setting.api.url + 'perks/coupon/get-coupon',
    'GET_SUB_CATEGORY_BY_ID': setting.api.url + 'perks/category/get-perk-subcategories',
    'GET_ALL_PERKS_BY_SUB_CATEGORY': setting.api.url + 'perks/get-perks',
    'UPDATE_PERK_SUB_CATEGORY': setting.api.url + 'perks/category/update-perk-subcategory',
    'UPDATE_PERK_CATEGORY': setting.api.url + 'perks/category/update-perk-category',
    //'UPDATE_PERK_CATEGORY' : setting.api.url + 'perks/category/update-perk-subcategory',
    'GET_INVEST_CAMPAIGN': setting.api.url + 'invest/get-campaign/',
    'CREATE_INVEST_CAMPAIGN': setting.api.url + 'invest/create-campaign',
    'UPDATE_INVEST_CAMPAIGN': setting.api.url + 'invest/update-campaign/',
    'DELETE_INVEST_CAMPAIGN': setting.api.url + 'invest/delete-campaign/',
    'GET_ALL_COUPON': setting.api.url + 'perks/coupon/get-all-coupons',
    'UPDATE_COUPON': setting.api.url + 'perks/coupon/update-coupon',
    'GET_ALL_FANS' : setting.api.url + 'user/getalluser/',
    'GET_ALL_ORDERS' : setting.api.url + '/user/order/get-order',
    'GET_DASHBOARD': setting.api.url + 'user/dashboard/get-dashboard-admin/',
    'GET_INFLUENCER_PERMISSION': setting.api.url + 'visibility/fetch/',
    'SET_INFLUENCER_PERMISSION': setting.api.url + 'visibility/create',
    'GET_ALL_ORDERS_BY_PAGE' : setting.api.url + 'user/order/getallorders/',
    'GET_ICONS' : setting.api.url + 'icon/',
    'STORE_ICONS' : setting.api.url + 'icon/store-icons',
    'GET_UPDATE': setting.api.url + 'update/updateList',
    'GET_BACKERS': setting.api.url + 'invest/get-backer/',
    'CREATE_NOTABLE_BACKERS': setting.api.url + 'invest/create-notableBacker',
    'GET_NOTABLE_BACKERS': setting.api.url + 'invest/get-notableBacker/',
    'UPDATE_NOTABLE_BACKERS': setting.api.url + 'invest/update-notableBacker/',
    'DELETE_NOTABLE_BACKERS': setting.api.url + 'invest/delete-notableBacker/',

    'CREATE_HOW_IT_WORK': setting.api.url + 'invest/create-howitwork',
    'GET_HOW_IT_WORK': setting.api.url + 'invest/get-howitwork',

    'CREATE_LOGIN_SLIDER': setting.api.url + 'banners/create-banner',
    'GET_LOGIN_SLIDER': setting.api.url + 'banners/get-banners',





    'DELETE_SOCIAL': setting.api.url + 'about-me/social/delete-social-media',




    'DELETE_SOCIAL': setting.api.url + 'about-me/social/delete-social-media',


    // UPDATES API**

    'CREATE_UPDATE': setting.api.url + 'update/createUpdate',
    'EDIT_UPDATE': setting.api.url + 'update/updateUpdatesData',
    'LIKE_DISLIKE_POST': setting.api.url + 'update/like_dislike_post',
    'COMMENT_POST': setting.api.url + 'update/comment_post',
    'LIKE_LIST': setting.api.url + 'update/liked_list',
    'DISLIKE_LIST': setting.api.url + 'update/disliked_list',
    'COMMENT_LIST': setting.api.url + 'update/comment_list',
    'LIKE_DISLIK_COMMENT_LIST': setting.api.url + 'update/like_dislike_comment',
    'EDIT_UPDATE': setting.api.url + 'update/updateUpdatesData',

    // Payment method Api**

    'GET_PAYMENT_METHOD': setting.api.url + 'payment-method/get-default-payment-method',
    'UPDATE_PAYMENT_METHOD': setting.api.url + 'payment-method/set-default-payment-method',

    // community APi

    'COMMUNITY_LIST': setting.api.url + 'community/communityList',
    'CREATE_COMMUNITY': setting.api.url + 'community/createCommunity',
    

    'LIKE_LIST_COMMUNITY': setting.api.url + 'community/liked_list',
    'DISLIKE_LIST_COMMUNITY': setting.api.url + 'community/disliked_list',
    'COMMENT_LIST_COMMUNITY': setting.api.url + 'community/comment_list',
    'UPDATE_COMMUNITY': setting.api.url + 'community/updateCommunity',
   
    'GET_DISCOVER': setting.api.url + 'discover/get-discover',
    'CREATE_DISCOVER': setting.api.url + 'discover/create-discover',
    'UPDATE_DISCOVER': setting.api.url + 'discover/update-discover',



    'GET_REQUESTED_PERKS': setting.api.url + 'user-perk/get-requested-claims',

    'APPROVE_PERK': setting.api.url + 'user-perk/update-claim'
    
  }
})()