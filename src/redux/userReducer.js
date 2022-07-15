const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_PAGE = "SET-PAGE"
const SET_TOTAL_USERS = "SET-TOTAL-USERS"
const SET_SEARCH_INPUT = "SET-SEARCH-INPUT"
const TOGGLE_FETCH = "TOGGLE-FETCH"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING_PROGRESS"


let initialState ={
    users: [],
    searchedUsers:[],
    currentPage: 1,
    pageSize: 30,
    totalUsersCount: 1000,
    searchInputText: "",
    term: "",
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state=initialState, action) =>{
    
    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map((user)=>{
                    if(user.id===action.body){
                        return{...user,followed:true};
                    }
                    return user;
                })
            };
            case UNFOLLOW:
            return{
                ...state,
                users: state.users.map((user)=>{
                    if(user.id===action.body){
                        return{...user,followed:false};
                    }
                    return user;
                })
            };
            case SET_USERS:
                return{
                    ...state,
                    users: [...action.body],
                }
            case SET_PAGE:
                return{
                    ...state,
                    currentPage: action.body
                }
            case SET_TOTAL_USERS:
                return{
                    ...state,
                    totalUsersCount: action.body
                }
            case SET_SEARCH_INPUT:
                return{
                    ...state,
                    searchInputText: action.body
                }
            case TOGGLE_FETCH:
                return{
                    ...state,
                    isFetching: action.fetching
                }
            case TOGGLE_IS_FOLLOWING_PROGRESS:
                return{
                    ...state,
                    followingInProgress: action.isFetching
                    ?[...state.followingInProgress,action.id]
                    :[state.followingInProgress.filter(id=> id !== action.id)]
                }
            
        default:
            return state;
    }
}

export const followUser=(userId)=>({type:FOLLOW, body: userId})
export const unFollowUser=(userId)=>({type:UNFOLLOW, body:userId})
export const setUsers=(users)=>({type: SET_USERS, body: users})
export const setCurrentPage=(page) => ({type: SET_PAGE, body: page})
export const setTotalUsersCount=(totalUsersCount) => ({type: SET_TOTAL_USERS, body: totalUsersCount})
export const setSearchInput=(text) => ({type: SET_SEARCH_INPUT, body: text})
export const setFetching=(fetching) => ({type: TOGGLE_FETCH, fetching})
export const toggleFollowingProgress=(isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})


export default usersReducer