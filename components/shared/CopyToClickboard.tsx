"use client";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

interface CopyToClipboardProps {
	text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
	const handleCopy = () => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				toast.success("URL copied to clipboard!");
			})
			.catch(() => {
				toast.error("Failed to copy URL.");
			});
	};

	return (
		<div className="flex  gap-4">
			<input
				type="text"
				value={text}
				readOnly
				className="input input-accent w-full"
			/>
			<button className="btn btn-square " onClick={handleCopy}>
				<CopyIcon />
			</button>
		</div>
	);
};

export default CopyToClipboard;
