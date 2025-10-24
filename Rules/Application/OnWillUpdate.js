/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/MDK_MCP_Demo/Actions/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/MDK_MCP_Demo/Actions/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}