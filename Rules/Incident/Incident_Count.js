export default function IncidentCount(context) {
	return context.count('/MDK_MCP_Demo/Services/IncidentManagement.service', 'Incident', ``).then((count) => {
     return `Incidents (${count})`;
    });
}