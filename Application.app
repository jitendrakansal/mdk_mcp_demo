{
	"_Name": "MDK_MCP_Demo",
	"Version": "/MDK_MCP_Demo/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/MDK_MCP_Demo/Pages/Incident/Incident_List.page",
	"OnLaunch": [
		"/MDK_MCP_Demo/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/MDK_MCP_Demo/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MDK_MCP_Demo/Actions/Service/InitializeOffline.action",
	"Styles": "/MDK_MCP_Demo/Styles/Styles.less",
	"Localization": "/MDK_MCP_Demo/i18n/i18n.properties",
	"_SchemaVersion": "25.9"
}