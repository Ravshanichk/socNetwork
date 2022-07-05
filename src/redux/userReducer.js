const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_PAGE = "SET-PAGE"
const SET_TOTAL_USERS = "SET-TOTAL-USERS"
const SET_SEARCH_INPUT = "SET-SEARCH-INPUT"
const SET_FETCH = "SET-FETCH"


let initialState ={
    users: [],
    searchedUsers:[],
    // users: [
    //     { id: 1, fullName: "Jojo", status: "Well shiet", location: {city: "Almaty", country: "Kazakhstan"}, isFollow: false},
    //     { id: 2, fullName: "Ricardo", status: "Flex", location: {city: "San-Francisco", country: "USA"}, isFollow: false},
    //     { id: 3, fullName: "Jarmush", status: "Kurum", location: {city: "Taskent", country: "Uzbekistan"}, isFollow: false},
    //   ],
    currentPage: 1,
    pageSize: 30,
    totalUsersCount: 1000,
    searchInputText: "",
    term: "",
    isFetching: true,
}

const usersReducer = (state=initialState, action) =>{
    
    switch(action.type){
        case FOLLOW:
            debugger
            return{
                ...state,
                users: state.users.map((user)=>{
                    if(user.id===action.body){
                        return{...user,isFollow:true};
                    }
                    return user;
                })
            };
            case UNFOLLOW:
            return{
                ...state,
                users: state.users.map((user)=>{
                    if(user.id===action.body){
                        return{...user,isFollow:false};
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
            case SET_FETCH:
                return{
                    ...state,
                    isFetching: action.fetching
                }
        default:
            return state;
    }
}

export const followAC=(userId)=>({type:FOLLOW, body: userId})
export const unFollowAC=(userId)=>({type:UNFOLLOW, body:userId})
export const setUsersAC=(users)=>({type: SET_USERS, body: users})
export const setCurrentPageAC=(page) => ({type: SET_PAGE, body: page})
export const setTotalUsersCountAC=(totalUsersCount) => ({type: SET_TOTAL_USERS, body: totalUsersCount})
export const setSearchInputAC=(text) => ({type: SET_SEARCH_INPUT, body: text})
export const setFetchingAC=(fetching) => ({type: SET_FETCH, fetching})


export default usersReducer