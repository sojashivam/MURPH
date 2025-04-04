'use server'


import axios from "axios";
import { onCurrentUser } from "../user"
import { addKeyword, addTrigger, deleteKeywordQuery, findUser } from "../user/queries";
import { getAutomations, createAutomation, findAutomation, updateAutomation, addListener, addPost } from "./query";


export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser();
    try {
        const create = await createAutomation(user.id, id)
        if (create) return { status: 200, data: 'Automation created', res: create }

        return { status: 404, data: 'Oops! something went wrong ' }
    } catch (error) {
        return { status: 500, data: 'Internal server error' }
        console.log('error -->>', error)
    }
}

export const getAllAutomations = async () => {
    const user = await onCurrentUser();
    try {
        const automations = await getAutomations(user.id);
        if (automations) return { status: 200, data: automations.automations }

        return { status: 404, data: [] }

    } catch (error) {
        return { status: 500, data: [] }

    }
}


export const getAutomationInfo = async (id: string) => {
    await onCurrentUser();

    try {
        const automation = await findAutomation(id);
        if (automation) return { status: 200, data: automation }
        return { status: 404 }
    } catch (error) {
        return { status: 500 }
    }
}

export const updateAutomationName = async (
    automationId: string,
    data: {
        name?: string,
        active?: boolean,
        automation?: string,
    }
) => {
    await onCurrentUser();
    try {
        const update = await updateAutomation(automationId, data)
        if (update) {
            return { status: 200, data: "Automation successfully updates." }
        }
        return { status: 404, data: 'Oops could not find Automation' }
    } catch (error) {
        return { status: 500, data: 'Oops! something went wrong' }
    }
}

export const saveListener = async (
    automationId: string,
    listener: 'SMARTAI' | 'MESSAGE',
    prompt: string,
    reply?: string,
) => {
    await onCurrentUser();
    try {
        const create = await addListener(automationId, listener, prompt, reply)

        if (create) return { status: 200, data: 'Listener created' }
        return { status: 404, data: "Cant save Listener" }
    } catch (error) {
        return { status: 500, data: 'Opps something went wrong' }
    }
}

export const saveTrigger = async (automationId: string, trigger: string[]) => {
    await onCurrentUser();
    try {
        const create = await addTrigger(automationId, trigger)
        if (create) return { status: 200, data: 'Trigger Saved' }
        return { status: 400, data: 'Cannot save trigger' }
    } catch (error) {
        return { status: 500, data: 'Oops!! something went wrong' }
    }

}

export const saveKeyword = async (automationId: string, keyword: string) => {
    await onCurrentUser();
    try {
        const create = await addKeyword(automationId, keyword);

        if (create) return { status: 200, data: 'Trigger added successfully ' }
        return { status: 400, data: 'Cannot add this keyword ' }
    } catch (error) {
        return { status: 500, data: 'Oops!! something went wrong' }

    }
}

export const deleteKeyword = async (id: string) => {
    await onCurrentUser()
    try {
        const deleted = await deleteKeywordQuery(id)

        if (deleted) return { status: 200, data: 'Keyword deleted' }

        return { status: 404, data: 'Keyword not found' }

    } catch (error) {
        return { status: 500, data: 'Oops!! something went wrong' }
    }
}

export const getProfilePosts = async () => {
    const user = await onCurrentUser()
    try {
        const profile = await findUser(user.id)
        const posts = await fetch(
            `${process.env.INSTARAM_BASE_URL}/me/media?/fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
        )
        const parsed = await posts.json()
        if (parsed) return { status: 200, data: parsed }
        console.log('🔴 Errors in getting posts')
        return { status: 404 }
    } catch (error) {
        console.log('🔴 Server side errors in getting posts', error)
        return { status: 500 }
    }
}


export const savePosts = async (
    automationId: string,
    posts: {
        postid: string,
        caption?: string,
        media: string,
        mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
    }[]
) => {
    await onCurrentUser()
    try {
        const create = await addPost(automationId, posts)

        if (create) {
            return { status: 200, data: 'Posts attached' }
        }
        return { status: 404, data: 'Automation nost found' }
    } catch (error) {
        return { status: 500, data: ' Opps something went wrong' }
    }
}


export const activateAutomation = async (id: string, state: boolean) => {
    await onCurrentUser()
    try {
        const update = await updateAutomation(id, { active: state })
        if (update)
            return {
                status: 200,
                data:`Automation ${state ? 'activated' : 'disabled'}`,
            }
            return {status:400, data:'Automation not found'}
    } catch (error) {
        return {status:500, data:'Oops! somehing went wrong'}
    }
}
