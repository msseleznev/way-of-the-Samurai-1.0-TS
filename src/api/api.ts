import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd06a07e1-f53e-4e98-bc98-489aa1584176'
    }
})

export const authAPI = {

    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },


}
export const profileAPI = {
    getUserProfile(userId: string | undefined) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: string | undefined) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }

}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
}

