/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ShowPriorityImage(clientAPI) {
    let incidentUrgency = clientAPI.binding.Urgency;
    if (incidentUrgency == "Low") {
        return '/MDK_MCP_Demo/Images/low-priority.png';
    }
  else  if (incidentUrgency == "Medium") {
        return '/MDK_MCP_Demo/Images/medium-priority.png';
    }
   else if (incidentUrgency == "High") {
        return '/MDK_MCP_Demo/Images/high-priority.png';
    }

}
