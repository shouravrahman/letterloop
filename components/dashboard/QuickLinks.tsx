import React from "react";

const QuickLinks: React.FC = () => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-sm border">
			<h2 className="text-lg font-semibold mb-2">Quick Links & Tutorials</h2>
			<ul className="list-disc pl-5 text-sm">
				<li>
					<a href="/tutorials" className="text-blue-600 hover:underline">
						Tutorials
					</a>
				</li>
				<li>
					<a href="/quick-links" className="text-blue-600 hover:underline">
						Quick Links
					</a>
				</li>
				<li>
					<a href="/help" className="text-blue-600 hover:underline">
						Help & Support
					</a>
				</li>
			</ul>
		</div>
	);
};

export default QuickLinks;
