import React from "react";
import { ArrowUpRight, Check, FolderOpen, Mic, Paperclip, Plus, Share2 } from "lucide-react";

const notes = [
	"Enroll in real estate courses to update knowledge and skills",
	"Conduct a price analysis of real estate in the selected area",
	"Enhance the feedback and review system for clients",
];

const attachmentImage = "https://res.cloudinary.com/dnk0bvpym/image/upload/q_auto/f_auto/v1775850030/notes_k7eqgt.jpg";

export default function RightSidebar({ selectedContact, activeUser }) {
	return (
		<div className="flex h-full w-full flex-col gap-4 xl:w-[320px] xl:max-w-[320px]">
			<div className="flex justify-end gap-2">
				<button
					type="button"
					className="flex items-center gap-2 rounded-2xl border border-white/80 bg-white px-3 py-2 text-[12px] font-semibold text-gray-600 shadow-sm"
				>
					<Share2 size={14} />
					Share
				</button>
				<button
					type="button"
					className="grid h-10 w-10 place-items-center rounded-2xl border border-white/80 bg-white text-gray-500 shadow-sm"
				>
					<FolderOpen size={16} />
				</button>
			</div>

			<section className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-sm">
				<div className="mb-3 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="rounded-full border border-gray-100 bg-white px-2 py-1 text-[10px] font-bold text-gray-700">3</span>
						<h3 className="text-[14px] font-semibold text-gray-800">Noted</h3>
					</div>
					<button
						type="button"
						className="grid h-8 w-8 place-items-center rounded-full bg-white text-gray-500 shadow-sm"
					>
						<Plus size={14} />
					</button>
				</div>

				<div className="rounded-2xl bg-white p-3 shadow-sm">
					<p className="mb-2 text-[11px] font-semibold leading-5 text-gray-700">
						After our conversation with {selectedContact?.name || "the client"}, the following tasks remained:
					</p>

					<div className="space-y-2">
						{notes.map((note, index) => (
							<div key={note} className="flex items-start gap-2">
								<span
									className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded ${
										index < 2 ? "bg-[#F3FF90]" : "bg-gray-200"
									}`}
								>
									{index < 2 ? <Check size={10} className="text-gray-900" /> : null}
								</span>
								<p className={`text-[11px] leading-5 ${index === 2 ? "font-semibold text-gray-800" : "text-gray-500"}`}>
									{note}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="flex min-h-0 flex-1 flex-col rounded-3xl border border-white/70 bg-white/80 p-4 shadow-sm">
				<div className="mb-3 flex items-center justify-between">
					<h3 className="text-[14px] font-semibold text-gray-800">Chat</h3>
					<button
						type="button"
						className="grid h-8 w-8 place-items-center rounded-full bg-white text-gray-500 shadow-sm"
					>
						<ArrowUpRight size={14} />
					</button>
				</div>

				<div className="custom-scrollbar flex-1 space-y-3 overflow-y-auto pr-1">
					<div className="w-[82%] rounded-2xl rounded-bl-sm bg-[#F7F7EE] p-3 text-[12px] text-gray-700 shadow-sm">
						Hey {activeUser?.name?.split(" ")[0] || "there"}, I need to check something about this deal.
					</div>

					<div className="ml-auto flex w-[82%] justify-end gap-2">
						<div className="h-20 w-20 overflow-hidden rounded-xl bg-gray-100 shadow-sm sm:h-20.5 sm:w-22">
							<img src={attachmentImage} alt="Attachment preview" className="h-full w-full object-cover" />
						</div>
						<div className="h-20 w-20 overflow-hidden rounded-xl bg-gray-100 shadow-sm sm:h-20.5 sm:w-22">
							<img src={attachmentImage} alt="Attachment preview" className="h-full w-full object-cover" />
						</div>
					</div>

					<div className="flex items-center justify-end gap-2 pr-1">
						<span className="text-[10px] text-gray-400">8:42 AM</span>
						<img
							src={activeUser?.avatar}
							alt={activeUser?.name || "User"}
							className="h-8 w-8 rounded-full object-cover"
						/>
					</div>
				</div>

				<div className="mt-3 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
					<input
						type="text"
						placeholder="Type something..."
						className="w-full bg-transparent text-[12px] text-gray-700 outline-none placeholder:text-gray-400"
					/>
					<button type="button" className="grid h-7 w-7 place-items-center rounded-full text-gray-500">
						<Paperclip size={14} />
					</button>
					<button type="button" className="grid h-8 w-8 place-items-center rounded-full bg-[#F3FF90] text-gray-900 shadow-sm">
						<Mic size={14} />
					</button>
				</div>
			</section>
		</div>
	);
}
