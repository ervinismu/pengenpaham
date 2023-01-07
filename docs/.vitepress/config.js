export default {
	base: "/pengenpaham/",
	description: "Welcome to our learning universe.",
	lang: "en-US",
	title: "Pengenpaham",
	appearance: true,
	lastUpdated: true,
	markdown: {
		theme: "material-palenight",
		lineNumbers: true,
	},
	themeConfig: {
		socialLinks: [
			{ icon: "github", link: "https://github.com/ervinismu/pengenpaham" },
			{ icon: "twitter", link: "https://twitter.com/pengenpaham" },
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2022-present pengenpaham",
		},

		sidebar: {
			"/golang-planet/": SidebarGolangPlanet(),
		},
	},
};

function SidebarGolangPlanet() {
	return [
		{
			text: "Golang Planet",
			items: [
				{ text: "Overview", link: "/golang-planet/" },
				{ text: "Array", link: "/golang-planet/array.md" },
				{ text: "Commentary", link: "/golang-planet/commentary.md" },
				{
					text: "Control Structures",
					link: "/golang-planet/control_structures.md",
				},
				{ text: "Data Types", link: "/golang-planet/data_types.md" },
				{ text: "File", link: "/golang-planet/file.md" },
				{ text: "Functions", link: "/golang-planet/functions.md" },
				{ text: "Go - Packages", link: "/golang-planet/go_packages.md" },
				{ text: "Install", link: "/golang-planet/install.md" },
				{ text: "Interfaces", link: "/golang-planet/interfaces.md" },
				{ text: "Hello world", link: "/golang-planet/hello_world.md" },
				{ text: "Log", link: "/golang-planet/log.md" },
				{ text: "Maps", link: "/golang-planet/maps.md" },
				{ text: "Operators", link: "/golang-planet/operators.md" },
				{ text: "Overview", link: "/golang-planet/overview.md" },
				{
					text: "REGEX (Regular Expression)",
					link: "/golang-planet/regex.md",
				},
				{ text: "Struct", link: "/golang-planet/struct.md" },
				{ text: "Slice", link: "/golang-planet/slice.md" },
				{ text: "Testing", link: "/golang-planet/testing.md" },
				{ text: "Values", link: "/golang-planet/values.md" },
				{ text: "Variables", link: "/golang-planet/variables.md" },
			],
		},
	];
}
