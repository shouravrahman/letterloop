export const simpleEmailTemplate: any = {
	body: {
		id: "simpleTemplate",
		rows: [
			{
				id: "row_1",
				cells: [1],
				columns: [
					{
						id: "column_1",
						contents: [
							{
								id: "heading_1",
								type: "heading",
								values: {
									headingType: "h1",
									text: "Welcome to Our Newsletter!",
									color: "#333333",
									textAlign: "center",
								},
							},
							{
								id: "text_1",
								type: "text",
								values: {
									text: "<p>Thank you for subscribing to our newsletter. We are excited to share our latest updates with you!</p>",
									textAlign: "center",
								},
							},
							{
								id: "button_1",
								type: "button",
								values: {
									text: "Learn More",
									href: "https://www.example.com",
									backgroundColor: "#0071e3",
									color: "#FFFFFF",
									padding: "10px 20px",
									borderRadius: "5px",
									textAlign: "center",
								},
							},
						],
						values: {
							padding: "20px",
							backgroundColor: "#f9f9f9",
						},
					},
				],
				values: {
					padding: "20px",
				},
			},
		],
	},
	schemaVersion: 1,
};
