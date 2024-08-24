"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
	question: string;
	answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
	{
		question: "What features does your newsletter app include?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Our newsletter app includes a range of features such as automated email
				campaigns, customizable templates, advanced analytics, and integration
				with popular email services. You can manage subscribers, track
				performance, and easily create engaging newsletters with our
				user-friendly interface.
			</div>
		),
	},
	{
		question: "Is there a free trial available?",
		answer: (
			<p>
				Yes, we offer a 14-day free trial for all new users. You can explore all
				the features of our app without any commitment. After the trial period,
				you can choose a plan that best suits your needs.
			</p>
		),
	},
	{
		question: "Can I import my existing subscriber list?",
		answer: (
			<p>
				Absolutely! You can easily import your existing subscriber list from
				various formats like CSV or directly from other email marketing
				platforms. Our app supports seamless import to help you get started
				quickly.
			</p>
		),
	},
	{
		question: "How does customer support work?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				We offer comprehensive customer support via email and live chat. Our
				team is available to assist you with any questions or issues you may
				encounter. We also provide detailed documentation and tutorials to help
				you make the most of our app.
			</div>
		),
	},
	{
		question: "Are there any integration options?",
		answer: (
			<p>
				Yes, our app integrates with popular tools such as Google Analytics, CRM
				systems, and social media platforms. This allows you to streamline your
				workflow and connect your newsletter campaigns with other aspects of
				your marketing strategy.
			</p>
		),
	},
	{
		question: "What security measures are in place?",
		answer: (
			<p>
				We take data security seriously. Our app uses industry-standard
				encryption to protect your data, and we adhere to best practices to
				ensure the safety and privacy of your information. Regular security
				audits are conducted to maintain high standards of security.
			</p>
		),
	},
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
	const accordion = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li>
			<button
				className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
				onClick={(e) => {
					e.preventDefault();
					setIsOpen(!isOpen);
				}}
				aria-expanded={isOpen}
			>
				<span
					className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
				>
					{item?.question}
				</span>
				<svg
					className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center transition duration-200 ease-out ${
							isOpen && "rotate-180"
						}`}
					/>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center rotate-90 transition duration-200 ease-out ${
							isOpen && "rotate-180 hidden"
						}`}
					/>
				</svg>
			</button>

			<div
				ref={accordion}
				className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
				style={
					isOpen
						? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
						: { maxHeight: 0, opacity: 0 }
				}
			>
				<div className="pb-5 leading-relaxed">{item?.answer}</div>
			</div>
		</li>
	);
};

const FAQ = () => {
	return (
		<section className="bg-base-200" id="faq">
			<div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
				<div className="flex flex-col text-left basis-1/2">
					<p className="inline-block font-semibold text-primary mb-4">FAQ</p>
					<p className="sm:text-4xl text-3xl font-extrabold text-base-content">
						Frequently Asked Questions
					</p>
				</div>

				<ul className="basis-1/2">
					{faqList.map((item, i) => (
						<FaqItem key={i} item={item} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default FAQ;
