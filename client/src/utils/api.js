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


export const createUser = async (email, token) => {
    try {
      await api.post(
        `/user/register`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };

export const bookVisit = async (date, propertyId, email, token) => {
    try {

        await api.post(`/user/book-visit/${propertyId}`, 
        {
            email: email,
            id: propertyId,
            date: dayjs(date).format('DD/MM/YYYY')
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
    } catch(err) {
        toast.error('Error, please try again')
        throw err
    }
}

export const removeVisit = async(id, email, token) => {
    try {
        await api.post(`user/cancel-booking/${id}`, {
            email
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        )
    } catch(err) {
        toast.error('Error, please try again')
        throw err
    }
}

export const toFav = async( id, email, token ) => {
    try {
        await api.post(`user/favor-property/${id}`, {
            email
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        )
    } catch(err) {
        toast.error('Error, please try again')
        throw err
    }
}