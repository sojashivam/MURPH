"use server"

import { client } from "@/lib/prisma"

export const findUser = async (clerkId: string) => {
    return await client.user.findUnique({
        where: {
            clerkId,
        },
        include: {
            subscription: true,
            integrations: {
                select: {
                    id: true,
                    token: true,
                    expiresAt: true,
                    name: true,
                }
            },
        },
    })
}


export const createUser = async (clerkId: string, firstname: string, lastname: string, email: string) => {
    return await client.user.create({
        data: {
            clerkId,
            firstname,
            lastname,
            email,
            subscription: {
                create: {}
            },
        },
        select: {
            firstname: true,
            lastname: true,
        },
    })
}


export const addTrigger = async (automationId: string, trigger: string[]) => {

    if (trigger.length > 2) {
        return await client.automation.update({
            where: { id: automationId },
            data: {
                trigger: {
                    createMany: {
                        data: [{ type: trigger[0] }, { type: trigger[1] }]
                    }
                }
            }

        })
    }

    return await client.automation.update({
        where: {
             id: automationId 

        },
        data:{
            trigger:{
                create:{
                    type:trigger[0]
                }
            }
        }
    })
}

export const addKeyword = async (automationId:string, keyword:string) => {
    return client.automation.update({
        where:{
            id:automationId
        },
        data:{
            keywords:{
                create:{
                    word:keyword
                }
            }
        }
    })
}

export const deleteKeywordQuery = async (id:string) => {
    return client.keyword.delete({
        where:{
            id
        }
    })
}


export const updateSubscription = async (
    clerkId:string,
    props:{customerId?:string; plan?:'PRO' | 'FREE'}
) => {
    return await client.user.update({
        where:{
            clerkId,
        },
        data:{
            subscription:{
                update:{
                    data:{
                        ...props,
                    },
                },
            },
        },
    })
}