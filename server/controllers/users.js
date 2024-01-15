import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prisma.config.js';

export const createUser = asyncHandler(async (req, res) => {


    let { email } = req.body;
    const userExists = await prisma.user.findUnique({ where: { email: email } })

    if (!userExists) {
        const user = await prisma.user.create({ data: req.body });
        res.send({
            message: "User registered successfully",
            user: user
        })

    } else {
        res.status(201).json({ message: "User already exists!" })
    }

})


export const bookVisit = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;

    try {
        const alreadyBooked = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: { bookedVisits: true }
        })

        // Checks if we already made an appointment for this property
        if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
            res.status(400).json({ message: "You already have an appointment for this property" })
        } else {
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: { push: { id, date } }
                }
            })
            res.status(200).json({ message: "Booked Successfully" })
        }

    } catch (err) {
        throw new Error(err.message)
    }
})

export const getAllBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
        const bookings = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })

        res.status(200).json({bookings})

        } catch (err) {
            throw new Error(err.message)
        }
    })


export const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })

        //In the bookedVisits array we find the index of the property with a matching id to the req.params id
        const index = user.bookedVisits.findIndex((visit) => visit.id === id)
        if (index === -1) {
            res.status(404).json({ message: "No appointment found" })
        } else {
            //In the array we delete only one element whose index is equal to the specified index
            user.bookedVisits.splice(index, 1)
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: user.bookedVisits
                }
            })

            res.json({ message: "Cancelled Successfully" })
        }
    } catch (err) {
        throw new Error(err.message)
    }
})

export const likeProperty = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { pid } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        //If the property is already in our list then we delete it from our list otherwise we add it to our fav list
        if (user.favPropertiesID.includes(pid)) {
            const updatedUser = await prisma.user.update({
                where: { email: email },
                data: {
                    favPropertiesID: {
                        set: user.favPropertiesID.filter((id) => id !== pid)
                    }
                }
            });
            res.json({ message: "Removed property from favorites", user: updatedUser });
        } else {
            const updatedUser = await prisma.user.update({
                where: { email },
                data: {
                    favPropertiesID: {
                        push: pid,
                    },
                },
            });

            res.json({ message: "Added property to favorites", user: updatedUser })
        };

    } catch (err) {
        throw new Error(err.message)
    }
})

export const getAllFavorites = asyncHandler(async (req, res) => {
    const { email } = req.body;

    try {
        const favProperties = await prisma.user.findUnique({
            where: { email: email },
            select: { favPropertiesID: true }
        });
        res.status(200).json(favProperties)
    } catch (err) {
        throw new Error(err.message)
    }
})