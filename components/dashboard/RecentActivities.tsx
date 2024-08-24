const activities = [
	"Activity 1: Description",
	"Activity 2: Description",
	"Activity 3: Description",
];

const RecentActivities: React.FC = () => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-sm border">
			<h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
			<ul className="list-disc pl-5 text-sm">
				{activities.map((activity, index) => (
					<li key={index} className="mb-1">
						{activity}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RecentActivities;
