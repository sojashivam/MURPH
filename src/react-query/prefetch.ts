import { getAllAutomations, getAutomationInfo } from "@/actions/automations";
import { onUserInfo } from "@/actions/user";
import { Query, QueryClient, QueryFunction } from "@tanstack/react-query";


// fetch data from a seerver ( or another source)
// cache data
// allows preloaded data to be reused
const prefetch = async (
    client : QueryClient,
    //query client instance

    action : QueryFunction,
    // data fetching

    key : string,
    // unique indentifier

) => {
    return await client.prefetchQuery({
        queryKey:[key],
        queryFn:action,
        staleTime : 60000,
    })
}

export const PrefetchUserProfile = async (client: QueryClient) => {
    return await prefetch(client , onUserInfo, 'user-profile');
}


export const PrefetchUserAutomations = async (client:QueryClient) => {
    return await prefetch(client, getAllAutomations, 'user-automations');
}

export const PrefetchUserAutomation = async (
    client:QueryClient,
    automationId:string,
) => {
    return await prefetch(
        client,
        ()=>getAutomationInfo(automationId),
        'automation-info'
    )
}