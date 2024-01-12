import axios from 'axios'
import dayjs from 'dayjs'
import {toast} from 'react-toastify'

export const api = axios.create({
    baseURL : "http://localhost:3000/api"
})

export const getAllProperties = async() => {
    try {
        const res = await api.get('/property/all-properties', {
            timeout: 10 * 1000,
        });

        if (res.status === 400 || res.status === 500) {
            throw res.data
        }

        return res.data.properties

    } catch(err) {
        toast.error("Error, something went wrong")
        throw err
    }
}

export const getProperty = async(id) => {
    try {
        const res = await api.get(`/property/${id}`, {
            timeout: 10 * 1000,
        });

        if (res.status === 400 || res.status === 500) {
            throw res.data
        }

        return res.data.property

    } catch(err) {
        toast.error("Error, something went wrong")
        throw err
    }
}