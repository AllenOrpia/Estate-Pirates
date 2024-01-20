import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prisma.config.js';



export const createProperty = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        price,
        address,
        country,
        city,
        bathrooms,
        parking,
        bedrooms,
        userEmail,
        image,
    } = req.body










    try {

        const property = await prisma.properties.create({
            data: {
                title, description, price,
                address, country,
                city,
                facilities: {
                    bathrooms: bathrooms,
                    parking: parking,
                    bedrooms: bedrooms
                },
                image,
                owner: { connect: { email: userEmail } }
            }
        })

        res.status(201).json({
            message: "Property successfully created",
            property
        })

    } catch (err) {
        if (err.code === 'P2002') {
            res.json({
                message: "Property with the same address already exists!",
                
            })
            throw new Error('A property with the same address already exists!')
        } else {
            throw new Error(err.message)

        }
    }
})

export const getAllProperties = asyncHandler(async (req, res) => {
    const properties = await prisma.properties.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    res.status(201).json({ properties })
})

export const getOneProperty = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const property = await prisma.properties.findUnique({
            where: { id: id }
        })
        res.status(200).json({ property })

    } catch (err) {
        throw new Error(err.message)
    }
})